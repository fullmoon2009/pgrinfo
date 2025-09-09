// src/index.ts
export interface Env {
  VIDEOS: R2Bucket          // wrangler의 r2_buckets 바인딩 이름
  ORIGIN_ALLOW: string      // 쉼표로 구분된 화이트리스트(도메인 생기면 채우기)
}

function pickOrigin(req: Request, allowList: string[]): string | null {
  const origin = req.headers.get("Origin") || ""
  if (!allowList.length) return "*"                 // 도메인 없을 땐 임시 전체 허용
  return allowList.includes(origin) ? origin : null
}

function setCors(h: Headers, origin: string | null) {
  if (origin) {
    h.set("Access-Control-Allow-Origin", origin)
    h.set("Vary", "Origin")
  }
  h.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS")
  h.set("Access-Control-Allow-Headers", "Range, Content-Type")
}

export default {
  async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(req.url)
    const allow = (env.ORIGIN_ALLOW || "").split(",").map(s => s.trim()).filter(Boolean)
    const origin = pickOrigin(req, allow)

    // CORS preflight
    if (req.method === "OPTIONS") {
      const h = new Headers()
      setCors(h, origin)
      return new Response(null, { status: 204, headers: h })
    }

    if (!url.pathname.startsWith("/video/"))
      return new Response("Not found", { status: 404 })

    const key = decodeURIComponent(url.pathname.slice("/video/".length))
    if (!key) return new Response("Bad Request", { status: 400 })

    // HEAD 지원(메타만 반환)
    if (req.method === "HEAD") {
      const head = await env.VIDEOS.head(key)
      if (!head) return new Response("Not found", { status: 404 })
      const h = new Headers({
        "Accept-Ranges": "bytes",
        "Content-Length": String(head.size),
        "Cache-Control": "public, max-age=31536000, immutable",
        "ETag": head.httpEtag ?? ""
      })
      setCors(h, origin)
      return new Response(null, { status: 200, headers: h })
    }

    // GET (Range 포함) 처리
    const rangeHeader = req.headers.get("Range")
    let getOpts: R2GetOptions | undefined
    let status = 200

    if (rangeHeader?.startsWith("bytes=")) {
      const [s, e] = rangeHeader.replace("bytes=", "").split("-")
      const start = Number(s)
      const end = e ? Number(e) : undefined
      getOpts = { range: { offset: start, length: end !== undefined ? end - start + 1 : undefined } }
      status = 206
    }

    // 캐시(Cloudflare CDN) – 전체 GET만 캐싱
    if (!rangeHeader) {
      const cache = caches.default
      const hit = await cache.match(req)
      if (hit) {
        const h = new Headers(hit.headers)
        setCors(h, origin)
        return new Response(hit.body, { status: hit.status, headers: h })
      }
    }

    const obj = await env.VIDEOS.get(key, getOpts)
    if (!obj) return new Response("Not found", { status: 404 })

    const type =
      key.endsWith(".mp4") ? "video/mp4" :
      key.endsWith(".webm") ? "video/webm" :
      "application/octet-stream"

    const h = new Headers({
      "Content-Type": type,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
      "ETag": obj.httpEtag ?? ""
    })

    if (status === 206 && obj.range) {
      const start = obj.range.offset
      const end = start + obj.range.length - 1
      h.set("Content-Range", `bytes ${start}-${end}/${obj.size}`)
      h.set("Content-Length", String(obj.range.length))
    } else {
      // 전체 응답일 때 Content-Length 제공(선택)
      if (obj.size !== undefined) h.set("Content-Length", String(obj.size))
    }

    setCors(h, origin)
    const resp = new Response(obj.body, { status, headers: h })

    if (!rangeHeader) {
      const cache = caches.default
      ctx.waitUntil(cache.put(req, resp.clone()))
    }
    return resp
  }
} satisfies ExportedHandler<Env>;
