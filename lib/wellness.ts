// 건강·웰니스 콘텐츠(칼럼) 데이터.
// 일반 정보 제공 목적이며, 치료·효과를 보장하는 표현은 사용하지 않습니다.
export interface WellnessPost {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
  keywords: string[];
}

export const wellnessPosts: WellnessPost[] = [
  {
    slug: "fatigue",
    title: "피로 관리 칼럼",
    summary: "생활 습관, 스트레칭, 수면 관리",
    sections: [
      { heading: "피로는 신호입니다", body: "누적된 피로는 휴식과 생활 습관 조정이 필요하다는 신호일 수 있습니다." },
      { heading: "일상 속 관리", body: "규칙적인 수면, 수분 섭취, 가벼운 스트레칭이 컨디션 관리에 도움이 됩니다." },
      { heading: "전문가 상담이 필요한 경우", body: "휴식해도 회복되지 않는 만성 피로는 의료 전문가 상담을 권합니다." },
    ],
    keywords: ["피로 관리", "강동 직장인 피로"],
  },
  {
    slug: "neck-shoulder",
    title: "어깨·목 관리",
    summary: "일반 정보, 자세 습관 안내",
    sections: [
      { heading: "왜 뭉칠까요", body: "장시간 같은 자세, 모니터 사용 습관이 어깨·목 긴장에 영향을 줄 수 있습니다." },
      { heading: "자세 습관", body: "모니터 높이 조정, 주기적인 휴식, 가벼운 목 스트레칭이 도움이 됩니다." },
      { heading: "주의 신호", body: "저림·지속 통증이 있다면 의료기관 진료가 우선입니다. 본 정보는 치료를 보장하지 않습니다." },
    ],
    keywords: ["어깨 목 관리", "거북목 자세"],
  },
  {
    slug: "back-care",
    title: "허리 피로 관리",
    summary: "생활 습관과 병원 진료가 필요한 신호",
    sections: [
      { heading: "허리 피로 원인", body: "장시간 좌식, 무리한 자세가 허리 피로감에 영향을 줄 수 있습니다." },
      { heading: "생활 관리", body: "바른 앉은 자세, 자주 일어나 움직이기, 가벼운 스트레칭을 권합니다." },
      { heading: "병원 진료가 필요한 신호", body: "다리 저림, 마비감, 지속적 통증이 있다면 즉시 의료기관을 방문하세요." },
    ],
    keywords: ["허리 피로 관리", "좌식 생활 허리"],
  },
  {
    slug: "before-after",
    title: "마사지 전후 주의사항",
    summary: "수분 섭취, 음주 후 이용 제한",
    sections: [
      { heading: "케어 전", body: "과식·음주 직후는 피하고, 가벼운 상태로 이용하는 것을 권합니다." },
      { heading: "케어 후", body: "충분한 수분 섭취와 휴식을 권합니다. 무리한 활동은 피해주세요." },
      { heading: "이용 제한", body: "음주 상태에서는 안전을 위해 이용이 제한될 수 있습니다." },
    ],
    keywords: ["마사지 전후 주의", "케어 후 관리"],
  },
  {
    slug: "office-worker",
    title: "직장인 케어 가이드",
    summary: "강동구 직장인·재택근무자 페르소나",
    sections: [
      { heading: "재택·사무직의 피로", body: "장시간 모니터 작업과 좌식 생활은 어깨·허리 피로로 이어지기 쉽습니다." },
      { heading: "퇴근 후 관리", body: "방문 케어는 이동 부담 없이 자택에서 휴식을 취하려는 직장인에게 선택지가 될 수 있습니다." },
      { heading: "지속 가능한 습관", body: "케어와 함께 규칙적인 휴식·스트레칭을 병행하는 것을 권합니다." },
    ],
    keywords: ["직장인 케어", "재택근무 피로 관리"],
  },
];

export function getWellnessPost(slug: string): WellnessPost | undefined {
  return wellnessPosts.find((p) => p.slug === slug);
}
