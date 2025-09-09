export type SkillTier = "orb" | "active" | "passive";

export type SkillDetail = {
  title: string;
  levelText?: string;
  badges?: { text: string; cls?: string }[];
  body: string[];
};

export type SkillItem = {
  id: string;
  tier: SkillTier;
  name: string;
  icon: string;
  subText?: string;
  accent?: string;
  detail: SkillDetail;
};

export type SkillSection = {
  label: string;
  tier: SkillTier;
  items: SkillItem[];
};

export type CharSkillMap = Record<string, SkillSection[]>;

export const charSkillData: CharSkillMap = {
  geiravor: [
    {
      label: "스킬볼",
      tier: "orb",
      items: [
        {
          id: "flame_slasher",
          tier: "orb",
          name: "불꽃의 절단",
          icon: "/assets/skillball/geiravorred.png",
          subText: "적색 스킬볼",
          accent: "ring-1 ring-rose-400/40 bg-white/5",
          detail: {
            title: "불꽃의 절단",
            levelText: "Level 18",
            badges: [
              {
                text: "적색 스킬볼",
                cls: "bg-red-500/15 border-red-400/30 text-red-300",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">솟구치는 화염-<span class="text-blue-400 font-semibold">솟구치는 화염 연계 미진입+적색 스킬볼 터치</span></span><br>
               베라 · 작망이 장창을 휘둘러 불속성 피해를 입히고 <span class="text-red-400 font-semibold">솟구치는 화염 연계</span>에 진입한다.`,
              `-소모한 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">200%</span>/<span class="text-red-400 font-semibold">400%</span>/<span class="text-red-400 font-semibold">600%</span>의 불속성 피해를 입힌다.`,
              `-소모한 스킬볼 개수에 따라 최대 HP의 <span class="text-red-400 font-semibold">2%</span>/<span class="text-red-400 font-semibold">5%</span>/<span class="text-red-400 font-semibold">10%</span>에 해당하는 HP를 회복한다.`,
              `-적색 스킬볼 1세트마다 <span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간이 <span class="text-red-400 font-semibold">1초</span> 연장되며, <span class="text-red-400 font-semibold">단절의 불꽃</span>의 최대 지속 시간은 <span class="text-red-400 font-semibold">10초</span>까지이다.`,
              `-적색 스킬볼 1개당 <span class="text-red-400 font-semibold">10 불꽃 재연</span>을 획득하며, <span class="text-red-400 font-semibold">불꽃 재연</span>의 상한은 <span class="text-red-400 font-semibold">60</span>이다. <span class="text-red-400 font-semibold">영혼의 불길</span>, <span class="text-red-400 font-semibold">창날의 춤</span>, <span class="text-red-400 font-semibold">살육의 참격</span> 상태에서 <span class="text-red-400 font-semibold">불꽃 재연</span>을 획득할 수 없다.`,
              `-베라·작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">102.94%</span>/<span class="text-red-400 font-semibold">205.88%</span>/<span class="text-red-400 font-semibold">308.82%</span>의 암연 피해를 입히고, 적색 스킬볼 <span class="text-red-400 font-semibold">1</span>개를 소모할 때마다 <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득한다.<br><br><br>
              
              <span class="text-[17px] font-bold">파동의 화염-<span class="text-blue-400 font-semibold">솟구치는 화염 연계 상태+적색 스킬볼 터치</span></span><br>
              베라·작망이 장창을 휘둘러 적을 계속 공격하여, 불속성 피해를 입히고 <span class="text-red-400 font-semibold">솟구치는 화염 연계</span> 상태를 종료한다.`,
              `-소모한 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">411.76%</span>/<span class="text-red-400 font-semibold">823.53%</span>/<span class="text-red-400 font-semibold">1235.29%</span>의 불속성 피해를 입힌다.`,
              `-소모한 스킬볼 개수에 따라 최대 HP의 <span class="text-red-400 font-semibold">2%</span>/<span class="text-red-400 font-semibold">5%</span>/<span class="text-red-400 font-semibold">10%</span>에 해당하는 HP를 회복한다.`,
              `-적색 스킬볼 1세트마다 <span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간이 <span class="text-red-400 font-semibold">1초</span> 연장되며, <span class="text-red-400 font-semibold">단절의 불꽃</span>의 최대 지속 시간은 <span class="text-red-400 font-semibold">10초</span>까지이다.`,
              `-적색 스킬볼 1개당 <span class="text-red-400 font-semibold">10 불꽃 재연</span>을 획득하며, <span class="text-red-400 font-semibold">불꽃 재연</span>의 상한은 <span class="text-red-400 font-semibold">60</span>이다.`,
              `-베라·작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">100</span>/<span class="text-red-400 font-semibold">200%</span>/<span class="text-red-400 font-semibold">300%</span>의 암연 피해를 입히고, 적색 스킬볼 <span class="text-red-400 font-semibold">1</span>개를 소모할 때마다 <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득한다.`,
            ],
          },
        },
        {
          id: "flame_contract",
          tier: "orb",
          name: "불의 계약",
          icon: "/assets/skillball/geiravoryellow.png",
          subText: "황색 스킬볼",
          accent: "ring-1 ring-amber-300/40 bg-white/5",
          detail: {
            title: "불의 계약",
            levelText: "Level 18",
            badges: [
              {
                text: "황색 스킬볼",
                cls: "bg-amber-400/15 border-amber-400/30 text-amber-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">황색 스킬볼-<span class="text-blue-400 font-semibold">야밤의 불꽃 시전 시 자동으로 모든 황색 스킬볼 소모</span></span><br>
               베라 · 작망이 <span class="text-red-400 font-semibold">화염의 춤</span> 상태일 때, 청색 스킬볼 <span class="text-red-400 font-semibold">3개</span>를 소모할 때마다 황색 스킬볼 <span class="text-red-400 font-semibold">2개</span>를 생성한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span> 시전 시 모든 황색 스킬볼을 소모한다.`,
              `-황색 스킬볼의 보유 상한은 <span class="text-red-400 font-semibold">6개</span>이다.`,
            ],
          },
        },
        {
          id: "blue_orb",
          tier: "orb",
          name: "찬란한 불빛",
          icon: "/assets/skillball/geiravorblue.png",
          subText: "청색 스킬볼",
          accent: "ring-1 ring-sky-300/40 bg-white/5",
          detail: {
            title: "찬란한 불빛",
            levelText: "Level 18",
            badges: [
              {
                text: "청색 스킬볼",
                cls: "bg-sky-400/15 border-sky-400/30 text-sky-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">청색 스킬볼-<span class="text-blue-400 font-semibold">청색 스킬볼 터치</span></span><br>
               베라 · 작망이 적을 휩쓸어 <span class="text-red-400 font-semibold">300%</span>/<span class="text-red-400 font-semibold">600%</span>/<span class="text-red-400 font-semibold">900%</span>의 불속성 피해를 입힌다.`,
              `-청색 스킬볼 <span class="text-red-400 font-semibold">3개</span>를 소모할 때마다, 황색 스킬볼 <span class="text-red-400 font-semibold">2개</span>를 생성한다.`,
            ],
          },
        },
      ],
    },
    {
      label: "액티브 스킬",
      tier: "active",
      items: [
        {
          id: "basic_attack",
          tier: "active",
          name: "화염 격류",
          icon: "/assets/skillball/geiravorbasic.png",
          subText: "일반 공격",
          accent: "ring-1 ring-white/20 bg-white/5",
          detail: {
            title: "화염 격류",
            levelText: "Level 18",
            badges: [{ text: "일반 공격", cls: "bg-white/10 border-white/20" }],
            body: [
              `<span class="text-[17px] font-bold">순파-<span class="text-blue-400 font-semibold">화염의 춤 상태 중+일반 공격 터치</span></span><br>
               베라 · 작망이 <span class="text-red-400 font-semibold">화염의 춤</span> 상태일 때, 일반 공격이 <span class="text-red-400 font-semibold">900%</span>의 불속성 피해를 입힌다.`,
              `-소모한 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">200%</span>/<span class="text-red-400 font-semibold">400%</span>/<span class="text-red-400 font-semibold">600%</span>의 불속성 피해를 입힌다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">역날-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+일반 공격 터치</span></span><br>
              베라 · 작망이 종말의 불길 상태일 때, 일반 공격이 <span class="text-red-400 font-semibold">1200%</span>의 불속성 피해를 입힌다.`,
              `-각 단계의 일반 공격마다 현재 <span class="text-red-400 font-semibold">불꽃의 잔재 2%</span>를 베라·작망의 실제 HP로 전환한다.`,
              `-베라 · 작망이 징계의 침몰을 보유하고 있으면, <span class="text-red-400 font-semibold">1200%</span>의 암연 피해를 입힌다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">잿빛 연무-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+회피 터치로 가드+일반 공격 연속 터치</span></span><br>
              적의 공격이 곧 명중하거나, 제자리 회피로 가드에 성공한 후 일반 공격을 터치할 시, 베라 · 작망이 카운터를 시전하여 <span class="text-red-400 font-semibold">600%</span>의 불속성 피해를 입힌다. 최대 <span class="text-red-400 font-semibold">3회</span>까지 카운터(에어본 미포함)할 수 있다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">잿빛 연무</span>를 1회 발동할 때마다, 현재 <span class="text-red-400 font-semibold">불꽃의 잔재 5%</span>를 베라 · 작망의 실제 HP로 전환한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">600%</span>의 암연 피해를 입힌다.`,
            ],
          },
        },
        {
          id: "signature",
          tier: "active",
          name: "영원한 불길",
          icon: "/assets/skillball/geiravorult.png",
          subText: "필살기",
          accent: "ring-1 ring-rose-300/40 bg-white/5",
          detail: {
            title: "영원한 불길",
            levelText: "Level 18",
            badges: [
              {
                text: "필살기",
                cls: "bg-rose-500/15 border-rose-400/30 text-rose-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">야밤의 불꽃-<span class="text-blue-400 font-semibold">45 필살 에너지+필살기 터치/길게 누르기</span></span><br>
              전의를 창끝에 응집시켜 불속성 피해를 입힌다. 현재 보유한 모든 황색 스킬볼을 제거하고, 대응하는 개수의 적색 스킬볼을 획득한다. 시전 기간에 타임스톱 연산이 발동되며, 종말의 불길에 진입한다. 야밤의 불꽃 시전 후, 베라 · 작망이 쿨타임 상태가 아닌 초산 공간을 발동한다.`,
              `-베라 · 작망의 필살 에너지 상한은 <span class="text-red-400 font-semibold">45</span>이며, <span class="text-red-400 font-semibold">종말의 불길</span> 진입 후 <span class="text-red-400 font-semibold">120</span>까지 상승한다.`,
              `-제거된 황색 스킬볼 개수 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4</span>/<span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>에 따라 현재 HP의 <span class="text-red-400 font-semibold">15%</span>/<span class="text-red-400 font-semibold">30%</span>/<span class="text-red-400 font-semibold">45%</span>/<span class="text-red-400 font-semibold">60%</span>/<span class="text-red-400 font-semibold">75%</span>/<span class="text-red-400 font-semibold">90%</span>를 <span class="text-red-400 font-semibold">불꽃의 잔재</span>로 전환하며, 베라 · 작망에게 기본 피해를 <span class="text-red-400 font-semibold">10%</span>/<span class="text-red-400 font-semibold">20%</span>/<span class="text-red-400 font-semibold">30%</span>/<span class="text-red-400 font-semibold">40%</span>/<span class="text-red-400 font-semibold">50%</span>/<span class="text-red-400 font-semibold">60%</span> 상승시키는 <span class="text-red-400 font-semibold">단절의 불꽃</span> 효과를 부여한다. <span class="text-red-400 font-semibold">단절의 불꽃</span> 효과는 <span class="text-red-400 font-semibold">4초</span>간 지속된다.`,
              `-베라 · 작망이 현재 <span class="text-red-400 font-semibold">불꽃의 잔재</span>와 <span class="text-red-400 font-semibold">단절의 불꽃</span> 효과를 보유하고 있으면, <span class="text-red-400 font-semibold">야밤의 불꽃</span> 시전 시 보유하고 있는 <span class="text-red-400 font-semibold">불꽃의 잔재</span>와 <span class="text-red-400 font-semibold">단절의 불꽃</span> 효과를 제거하고 다시 획득한다.`,
              `-<span class="text-red-400 font-semibold">2400%</span>의 불속성 피해를 입힌다.`,
              `-길게 눌러 시전 시, <span class="text-red-400 font-semibold">징계의 침몰</span>을 획득하고, <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득하며, <span class="text-red-400 font-semibold">1500%</span>의 암연 피해를 입힌다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">하늘을 태우는 창-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+120 필살 에너지+필살기 터치</span></span><br>
              전쟁 춤을 추듯 양날 검을 휘둘러 피해를 입힌다. 시전 기간에 타임스톱 연산이 발동되며, 이후 <span class="text-red-400 font-semibold">종말의 불길</span>을 종료하고, <span class="text-red-400 font-semibold">화염의 춤</span>에 진입한다. 시전 후 아군 유닛을 지속적으로 치료할 수 있는 <span class="text-red-400 font-semibold">영원한 밤의 불</span>을 남긴다.`,
              `-<span class="text-red-400 font-semibold">하늘을 태우는 창</span>이 시전되면, 소모되지 않은 적색 스킬볼이 청색 스킬볼로 전환된다.`,
              `-<span class="text-red-400 font-semibold">5800%</span>의 불속성 피해를 입힌다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">3000%</span>의 암연 피해를 입힌다. <span class="text-red-400 font-semibold">종말의 불길</span> 상태가 종료될 시, <span class="text-red-400 font-semibold">징계의 침몰</span>이 제거된다.`,
              `-시전 후 <span class="text-red-400 font-semibold">12초</span>간 지속되는 <span class="text-red-400 font-semibold">영원한 밤의 불</span>을 남기며, 영역 내 아군 유닛에게 초당 베라·작망 최대 HP <span class="text-red-400 font-semibold">5%</span>만큼의 HP를 회복시킨다.`,
            ],
          },
        },
        {
          id: "qte",
          tier: "active",
          name: "불꽃의 그림자",
          icon: "/assets/skillball/qte.webp",
          subText: "QTE",
          accent: "ring-1 ring-rose-300/40 bg-white/5",
          detail: {
            title: "불꽃의 그림자",
            levelText: "Level 18",
            badges: [
              {
                text: "QTE",
                cls: "bg-white-500/15 border-white-400/30 text-white-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">QTE-<span class="text-blue-400 font-semibold">QTE 터치</span></span><br>
               베라 · 작망이 무기를 휘둘러 피해를 입히고, 치료를 부여한다.`,
              `-총 <span class="text-red-400 font-semibold">600%</span>의 불속성 피해를 입힌다.`,
              `-<span class="text-red-400 font-semibold">암연 단계 수가 1단계 이상일 경우</span>, <span class="text-red-400 font-semibold">600%</span>의 암연 피해를 입힌다.`,
              `-최대 HP <span class="text-red-400 font-semibold">20%</span>의 치료를 부여한다.`,
            ],
          },
        },
        {
          id: "class",
          tier: "active",
          name: "증폭형",
          icon: "/assets/skillball/geiravorcore.png",
          subText: "직업 스킬",
          accent: "ring-1 ring-rose-300/40 bg-white/5",
          detail: {
            title: "증폭형",
            levelText: "Level 18",
            badges: [
              {
                text: "직업 스킬",
                cls: "bg-white-500/15 border-white-400/30 text-white-200",
              },
            ],
            body: [
              `모든 아군 멤버가 전환되어 출전 시, 공격력이 <span class="text-red-400 font-semibold">20%</span> 증가하고, 증폭형 캐릭터의 대응하는 속성 피해 버프가 <span class="text-red-400 font-semibold">20%</span> 증가한다. <span class="text-red-400 font-semibold">10초</span>간 지속. <span class="text-red-400 font-semibold">암연 단계 수가 1단계 이상일 경우</span>, 베라·작망의 대응 속성을 암흑속성으로 간주한다.`,
            ],
          },
        },
        {
          id: "awaken",
          tier: "active",
          name: "최종 해방",
          icon: "/assets/skillball/haebang.webp",
          subText: "최종 해방",
          accent: "ring-1 ring-rose-300/40 bg-white/5",
          detail: {
            title: "최종 해방",
            levelText: "Level 1",
            badges: [
              {
                text: "최종 해방",
                cls: "bg-white-500/15 border-white-400/30 text-white-200",
              },
            ],
            body: [`처음 전투 진입 시 3개의 스킬볼을 즉시 획득한다.`],
          },
        },
      ],
    },
    {
      label: "패시브 스킬",
      tier: "passive",
      items: [
        {
          id: "core_passive",
          tier: "passive",
          name: "심판의 불꽃",
          icon: "/assets/skillball/geiravorcore.png",
          subText: "코어 패시브",
          accent: "ring-1 ring-white/20 bg-white/5",
          detail: {
            title: "심판의 불꽃",
            levelText: "Level 18",
            badges: [
              { text: "코어 패시브", cls: "bg-white/10 border-white/20" },
            ],
            body: [
              `<span class="text-[17px] font-bold">역습의 파괴<span class="text-blue-400 font-semibold"></span></span><br>
              <span class="text-red-400 font-semibold">화염의 춤</span> 상태일 시, 청색 스킬볼만 사용할 수 있으며, 일반 공격으로는 청색 스킬볼만 획득할 수 있다.`,
              `-<span class="text-red-400 font-semibold">종말의 불길</span> 상태 진입 후, 적색 스킬볼만 사용할 수 있으며, 일반 공격은 적색 스킬볼만 획득할 수 있다.`,
              `-<span class="text-red-400 font-semibold">종말의 불길</span> 상태 진입 시, <span class="text-red-400 font-semibold">화염의 춤</span> 상태에서 사용하지 않은 청색 스킬볼은 보류된다`,
              `-<span class="text-red-400 font-semibold">종말의 불길</span> 상태가 종료될 시, 사용하지 않은 적색 스킬볼은 청색 스킬볼로 전환된다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">종말의 불길</span> 상태일 때 퇴장하면, 보유하고 있는 청색 스킬볼과 적색 스킬볼은 제거된다. 다시 출전하면 청색 스킬볼을 <span class="text-red-400 font-semibold">2개</span> 획득한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">QTE-불꽃의 그림자</span>를 시전할 때마다, 다음에 <span class="text-red-400 font-semibold">단절의 불꽃</span> 상태에 진입할 때 추가로 <span class="text-red-400 font-semibold">25%</span>의 기본 피해가 상승한다. 최대 <span class="text-red-400 font-semibold">50%</span> 상승 가능하다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">사냥의 전율-<span class="text-blue-400 font-semibold">화염의 춤 상태 중+일반 공격 길게 누르기</span></span><br>
              베라 · 작망이 장창으로 적을 강타하여 불속성 피해를 입힌다. 시전 기간에는 상태이상 면역 효과를 획득한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">사냥의 전율</span>을 시전하여 힘 절반 축적 완료 시, <span class="text-red-400 font-semibold">400%</span>의 불속성 피해를 입힌다. 동시에 <span class="text-red-400 font-semibold">12</span> 필살 에너지를 누적하며, 자신 최대 HP <span class="text-red-400 font-semibold">50%</span>만큼의 HP를 회복한다.`,
              `-베라 · 작망이 사냥의 전율을 시전하여 힘 축적 완료 시 <span class="text-red-400 font-semibold">1000%</span>의 불속성 피해를 입힌다. 동시에 <span class="text-red-400 font-semibold">24</span> 필살 에너지를 누적하며, 자신 최대 HP <span class="text-red-400 font-semibold">100%</span>만큼의 HP를 회복한다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">영혼의 불길-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+20 불꽃 재연+일반 공격 길게 누르기</span></span><br>
              베라 · 작망이 장창을 휘둘러 <span class="text-red-400 font-semibold">1000%</span>의 불속성 피해를 입히며, 영혼의 불길 연계에 진입한다. <span class="text-red-400 font-semibold">10</span> 필살 에너지를 누적하고, 시전 기간에는 상태이상 면역 효과를 획득한다. 시전 시 <span class="text-red-400 font-semibold">20 불꽃 재연</span>을 소모한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4</span>개일 시, 베라 · 작망이 현재 보유한 <span class="text-red-400 font-semibold">불꽃의 잔재</span>의 <span class="text-red-400 font-semibold">10%</span>/<span class="text-red-400 font-semibold">15%</span>/<span class="text-red-400 font-semibold">20%</span>/<span class="text-red-400 font-semibold">25%</span>를 베라·작망의 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>개일 시, 베라 · 작망 최대 HP의 <span class="text-red-400 font-semibold">10%</span>/<span class="text-red-400 font-semibold">15%</span>에 해당하는 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 베라 · 작망의 실제 HP로 전환한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">300%</span>의 암연 피해를 입히며, <span class="text-red-400 font-semibold">200</span> 암연 축적치를 획득한다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">창날의 춤-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+영혼의 불길 연계 후+20 불꽃 재연+일반 공격 길게 누르기</span></span><br>
              베라 · 작망의 창끝에 불꽃이 타오른다. <span class="text-red-400 font-semibold">영혼의 불길</span> 연계 상태를 종료하고, <span class="text-red-400 font-semibold">1600%</span>의 불속성 피해를 입히며, <span class="text-red-400 font-semibold">창날의 춤</span> 연계에 진입한다. <span class="text-red-400 font-semibold">20</span> 필살 에너지를 누적하고, 시전 기간에는 상태이상 면역 효과를 획득한다. 시전 시 <span class="text-red-400 font-semibold">20 불꽃 재연</span>을 소모한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4</span>개일 시, 베라 · 작망이 현재 보유한 <span class="text-red-400 font-semibold">불꽃의 잔재</span>의 <span class="text-red-400 font-semibold">20%</span>/<span class="text-red-400 font-semibold">30%</span>/<span class="text-red-400 font-semibold">40%</span>/<span class="text-red-400 font-semibold">50%</span>를 베라·작망의 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>개일 시, 베라 · 작망 최대 HP의 <span class="text-red-400 font-semibold">15%</span>/<span class="text-red-400 font-semibold">20%</span>에 해당하는 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 베라 · 작망의 실제 HP로 전환한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">500%</span>의 암연 피해를 입히며, <span class="text-red-400 font-semibold">400</span> 암연 축적치를 획득한다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">살육의 참격-<span class="text-blue-400 font-semibold">종말의 불길 상태 중+창날의 춤 연계 후+20 불꽃 재연+일반 공격 길게 누르기</span></span><br>
              베라 · 작망이 장창을 휘둘러 무한한 전의를 내뿜어, <span class="text-red-400 font-semibold">3200%</span>의 불속성 피해를 입히고, <span class="text-red-400 font-semibold">창날의 춤</span> 연계 상태를 종료한다. <span class="text-red-400 font-semibold">70</span> 필살 에너지를 누적하고, 시전 기간에는 상태이상 면역을 획득한다. 시전 시 <span class="text-red-400 font-semibold">20 불꽃 재연</span>을 소모한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수에 따라 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4</span>개일 시, 베라 · 작망이 현재 보유한 <span class="text-red-400 font-semibold">불꽃의 잔재</span>의 <span class="text-red-400 font-semibold"30%</span>/<span class="text-red-400 font-semibold">50%</span>/<span class="text-red-400 font-semibold">70%</span>/<span class="text-red-400 font-semibold">90%</span>를 베라·작망의 실제 HP로 전환한다.`,
              `-<span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수가 <span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>개일 시, 베라 · 작망 최대 HP의 <span class="text-red-400 font-semibold">50%</span>/<span class="text-red-400 font-semibold">55%</span>에 해당하는 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 베라 · 작망의 실제 HP로 전환한다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">징계의 침몰</span>을 보유하고 있으면, <span class="text-red-400 font-semibold">700%</span>의 암연 피해를 입히며, <span class="text-red-400 font-semibold">1000</span> 암연 축적치를 획득한다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">여명의 질주<span class="text-blue-400 font-semibold"></span></span><br>
              베라 · 작망이 <span class="text-red-400 font-semibold">종말의 불길</span> 상태에서 피해를 받을 시, 손실한 실제 HP의 <span class="text-red-400 font-semibold">20%</span>를 <span class="text-red-400 font-semibold">불꽃의 잔재</span>로 전환시킨다.`,
              `-최대 획득 가능한 <span class="text-red-400 font-semibold">불꽃의 잔재</span>는 최대 HP와 동일하다.`,
              `-베라 · 작망이 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 보유하고 있을 시, 다른 비율의 <span class="text-red-400 font-semibold">피해 감소 효과</span>를 획득한다.`,
              `-베라 · 작망의 <span class="text-red-400 font-semibold">불꽃의 잔재</span>가 최대 HP 비율의 <span class="text-red-400 font-semibold">50%</span> 미만일 경우, <span class="text-red-400 font-semibold">20%</span>의 피해 감소 효과를 획득한다.`,
              `-베라 · 작망의 <span class="text-red-400 font-semibold">불꽃의 잔재</span> 가 최대 HP 비율의 <span class="text-red-400 font-semibold">50%</span> 이상 <span class="text-red-400 font-semibold">75%</span> 미만일 경우, <span class="text-red-400 font-semibold">50%</span>의 피해 감소 효과를 획득한다.`,
              `-베라 · 작망의 <span class="text-red-400 font-semibold">불꽃의 잔재</span>가 최대 HP 비율의 <span class="text-red-400 font-semibold">75%</span> 이상일 경우, <span class="text-red-400 font-semibold">75%</span>의 피해 감소 효과를 획득한다.`,
              `-생성된 <span class="text-red-400 font-semibold">불꽃의 잔재</span>는 <span class="text-red-400 font-semibold">5초</span> 후 점차 감소하며, <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 실제 HP로 전환하거나 새로운 <span class="text-red-400 font-semibold">불꽃의 잔재</span>를 획득할 시 감소 쿨타임이 초기화된다.`,
              `전투 종료 후, <span class="text-red-400 font-semibold">불꽃의 잔재</span>는 모두 실제 HP로 전환된다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">어둠을 삼키는 화염<span class="text-blue-400 font-semibold"></span></span><br>
              베라·작망의 치료를 받은 아군 유닛은 불속성 피해를 <span class="text-red-400 font-semibold">20%</span> 증가시키는 <span class="text-red-400 font-semibold">화염 단련</span> 효과를 획득한다. <span class="text-red-400 font-semibold">8</span>초간 지속, 중복 발동 시 지속 시간이 초기화된다.`,
              `-<span class="text-red-400 font-semibold">암연 단계 수가 1단계 이상일 경우</span>, 베라·작망의 치료를 받은 아군 유닛은 암흑속성 피해를 <span class="text-red-400 font-semibold">20%</span> 증가시키는 <span class="text-red-400 font-semibold">어둠의 방사능</span> 효과를 획득한다. <span class="text-red-400 font-semibold">8</span>초간 지속, 중복 발동 시 지속 시간이 초기화된다.`,
              `-<span class="text-red-400 font-semibold">불꽃의 잔재</span>가 실제 HP로 전환될 때는 치료 행위로 간주하지 않는다.<br><br><br>
             
              
              <span class="text-[17px] font-bold">효과: 암연<span class="text-blue-400 font-semibold"></span></span><br>
              암연 축적치 <span class="text-red-400 font-semibold">200</span>당 암연 단계가 1 증가한다. 최대 15단계 중첩 가능. 암연 효과를 보유한 캐릭터는 현재 암연 단계 수에 따라 암연 광환을 획득하며, 적 유닛에게 지속적으로 소량의 암연 피해를 입히고 HP 회복 효과를 감소시킨다. 암연 단계 수가 임계치에 도달하면 광환이 강화되어, 영향 범위가 넓어지고 범위 내 적군 유닛에게 대량의 암연 피해를 입힌다.`,
              `-<span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">6</span>/<span class="text-red-400 font-semibold">10</span>/<span class="text-red-400 font-semibold">15</span> 단계 시: <span class="text-red-400 font-semibold">100%</span>/<span class="text-red-400 font-semibold">200%</span>/<span class="text-red-400 font-semibold">400%</span>/<span class="text-red-400 font-semibold">800%</span>/<span class="text-red-400 font-semibold">1600%</span>의 암연 피해를 입힌 후, 초당 <span class="text-red-400 font-semibold">20%</span>/<span class="text-red-400 font-semibold">40%</span>/<span class="text-red-400 font-semibold">60%</span>/<span class="text-red-400 font-semibold">80%</span>/<span class="text-red-400 font-semibold">100%</span>의 암연 피해를 입히고, 적군 유닛의 HP 회복 효과를 <span class="text-red-400 font-semibold">10%</span>/<span class="text-red-400 font-semibold">20%</span>/<span class="text-red-400 font-semibold">30%</span>/<span class="text-red-400 font-semibold">50%</span>/<span class="text-red-400 font-semibold">100%</span> 감소시킨다.`,
            ],
          },
        },
        {
          id: "leader",
          tier: "passive",
          name: "대장·불꽃의 징벌",
          icon: "/assets/skillball/geiravorleader.webp",
          subText: "대장 스킬",
          accent: "ring-1 ring-fuchsia-300/40 bg-white/5",
          detail: {
            title: "대장·불꽃의 징벌",
            levelText: "Level 1",
            badges: [
              {
                text: "대장 스킬",
                cls: "bg-red-500/15 border-red-400/30 text-red-200",
              },
            ],
            body: [
              `아군 전체의 공격력이 <span class="text-red-400 font-semibold">10%</span>, 증폭형 불속성 피해와 암연 피해가 <span class="text-red-400 font-semibold">5%</span> 증가한다`,
            ],
          },
        },
        {
          id: "core_passive",
          tier: "passive",
          name: "꺼지지 않는 불길",
          icon: "/assets/skillball/geiravors.webp",
          subText: "SS 승급 패시브",
          accent: "ring-1 ring-white/20 bg-white/5",
          detail: {
            title: "꺼지지 않는 불길",
            levelText: "Level 2",
            badges: [
              {
                text: "SS 승급 패시브",
                cls: "bg-red-500/15 border-red-400/30 text-red-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">1레벨-<span class="text-blue-400 font-semibold">S5 승급 해제</span></span><br>
              <span class="text-red-400 font-semibold">사냥의 전율</span>, <span class="text-red-400 font-semibold">영혼의 불길</span>, <span class="text-red-400 font-semibold">창날의 춤</soan>, <span class="text-red-400 font-semibold">살육의 참격</span>, <span class="text-red-400 font-semibold">하늘을 태우는 창</span> 시전 시 쿨타임 기간이 아닌 QTE를 발동한다.<br><br><br>
              
             
              
              <span class="text-[17px] font-bold">2레벨-<span class="text-blue-400 font-semibold">SS 승급 해제</span></span><br>
              청색 스킬볼이 황색 스킬볼로 전환되는 효율이 <span class="text-red-400 font-semibold">50%</span> 상승하고, 청색 스킬볼 <span class="text-red-400 font-semibold">1개</span>를 소모할 때마다 황색 스킬볼 <span class="text-red-400 font-semibold">1개</span>가 생성된다.`,
              `-<span class="text-red-400 font-semibold">사냥의 전율</span>을 힘 축적 완료 상태에서 시전할 때, 보유한 청색 스킬볼을 자동으로 소모할 수 있다. 최대 <span class="text-red-400 font-semibold">3개</span> 소모 가능하다.`,
              `-<span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간 동안, <span class="text-red-400 font-semibold">하늘을 태우는 창</span>은 <span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거한 황색 스킬볼 개수 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4<span>/<span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>에 따라 추가로 피해를 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">3</span>회 입힌다.`,
            ],
          },
        },
        {
          id: "core_passive",
          tier: "passive",
          name: "화염의 울림",
          icon: "/assets/skillball/geiravorss.webp",
          subText: "SSS 승급 패시브",
          accent: "ring-1 ring-white/20 bg-white/5",
          detail: {
            title: "화염의 울림",
            levelText: "Level 2",
            badges: [
              {
                text: "SSS 승급 패시브",
                cls: "bg-amber-400/15 border-amber-400/30 text-amber-200",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">1레벨-<span class="text-blue-400 font-semibold">SS3 승급 해제</span></span><br>
              베라 · 작망의 치료를 받은 아군 유닛이 획득하는 화염 단련 효과가 10% 상승한다.`,
              `-<span class="text-red-400 font-semibold">암연 단계 수가 1단계 이상일 경우<span class="text-red-400 font-semibold">, 베라·작망의 치료를 받은 아군 유닛은 추가로 <span class="text-red-400 font-semibold">10%</span>의 <span class="text-red-400 font-semibold">잿빛 붕렬</span> 효과를 획득한다.`,
              `-<span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간 동안, <span class="text-red-400 font-semibold">살육의 참격</span>은 <span class="text-red-400 font-semibold">야밤의 불꽃</span>으로 제거된 황색 스킬볼 개수 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">4</span>/<span class="text-red-400 font-semibold">5</span>/<span class="text-red-400 font-semibold">6</span>에 따라 추가로 피해를 <span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">1</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">2</span>/<span class="text-red-400 font-semibold">3</span>/<span class="text-red-400 font-semibold">3</span>회 입힌다.<br><br><br>
              
             
              
              <span class="text-[17px] font-bold">2레벨-<span class="text-blue-400 font-semibold">SSS 승급 해제</span></span><br>
              아군 전체가 전환되어 출전 시, QTE 스킬 쿨타임이 초기화된다.`,
              `-베라 · 작망의 치료를 받은 아군 유닛이 획득하는 화염 단련 효과가 <span class="text-red-400 font-semibold">10%</span> 상승한다.`,
              `-<span class="text-red-400 font-semibold">암연 단계 수가 1단계 이상일 경우</span>, 베라 · 작망의 치료를 받은 아군 유닛은 추가로 <span class="text-red-400 font-semibold">10%</span>의 <span class="text-red-400 font-semibold">잿빛 붕렬</span> 효과를 획득한다. <span class="text-red-400 font-semibold">출전할 때마다</span> 추가로 <span class="text-red-400 font-semibold">황색 스킬볼 3개</span>와 <span class="text-red-400 font-semibold">10 필살 에너지</span>를 획득할 수 있다. 처음으로 <span class="text-red-400 font-semibold">종말의 불길</span> 상태에 진입할 때, 추가로 <span class="text-red-400 font-semibold">10 필살 에너지</span>와 <span class="text-red-400 font-semibold">30 불꽃 재연</span>을 획득할 수 있다.`,
              `-청색 스킬볼을 1세트 소모하면 추가로 <span class="text-red-400 font-semibold">12 필살 에너지</span>를 획득할 수 있다.`,
              `-<span class="text-red-400 font-semibold">단절의 불꽃</span> 지속 시간 동안, <span class="text-red-400 font-semibold">사냥의 전율</span>, <span class="text-red-400 font-semibold">영혼의 불길</span>, <span class="text-red-400 font-semibold">창날의 춤</span>, <span class="text-red-400 font-semibold">살육의 참격</span>의 기본 피해가 <span class="text-red-400 font-semibold">50%</span> 상승한다.`,
            ],
          },
        },
        {
          id: "core_passive",
          tier: "passive",
          name: "붉은 불꽃의 각성",
          icon: "/assets/skillball/geiravorsss.webp",
          subText: "SSS+ 승급 패시브",
          accent: "ring-1 ring-white/20 bg-white/5",
          detail: {
            title: "붉은 불꽃의 각성",
            levelText: "Level 3",
            badges: [
              {
                text: "SSS+ 승급 패시브",
                cls: "bg-red-500/15 border-red-400/30 text-red-300",
              },
            ],
            body: [
              `<span class="text-[17px] font-bold">1레벨-<span class="text-blue-400 font-semibold">SSS3 승급 해제</span></span><br>
              <span class="text-red-400 font-semibold">단절의 불꽃</span>의 피해 증가 배율이 <span class="text-red-400 font-semibold">50%</span> 상승한다.<br><br><br>
              
             
              
              <span class="text-[17px] font-bold">2레벨-<span class="text-blue-400 font-semibold">SSS6 승급 해제</span></span><br>
              <span class="text-red-400 font-semibold">사냥의 전율</span>, <span class="text-red-400 font-semibold">영혼의 불길</span>, <span class="text-red-400 font-semibold">창날의 춤</span>, <span class="text-red-400 font-semibold">살육의 참격</span>의 추가 피해가 50% 상승한다.<br><br><br>
              
             
              
              <span class="text-[17px] font-bold">3레벨-<span class="text-blue-400 font-semibold">SSS+ 승급 해제</span></span><br>
              <span class="text-red-400 font-semibold">야밤의 불꽃</span>, <span class="text-red-400 font-semibold">하늘을 태우는 창</span>의 추가 피해가 <span class="text-red-400 font-semibold">50%</span> 상승한다.`,
              
            ],
          },
        },
      ],
    },
  ],
};
