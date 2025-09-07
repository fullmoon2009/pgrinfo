// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
  ],
  theme: { extend: {} },
  safelist: [
    // 정확 매칭
    'text-blue-500',
    'text-rose-400',
    'font-semibold',

    // 또는 패턴(추천): 필요한 팔레트만 범위 지정
    { pattern: /(text|bg|border)-(blue|rose|amber|sky|fuchsia|red|emerald)-(300|400|500)/ },
  ],
  plugins: [],
}
