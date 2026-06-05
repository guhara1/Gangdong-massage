// 이용가이드 데이터.
export interface Guide {
  slug: string;
  name: string;
  summary: string;
  sections: { heading: string; body: string }[];
  keywords: string[];
}

export const guides: Guide[] = [
  {
    slug: "reservation",
    name: "예약 방법",
    summary: "예약 절차, 확인 문자, 취소 기준 안내",
    sections: [
      { heading: "예약 절차", body: "전화 또는 카카오톡으로 희망 지역·날짜·시간과 서비스 유형을 알려주시면 가능 여부를 확인해 드립니다." },
      { heading: "예약 확인", body: "예약이 확정되면 확인 메시지를 보내드립니다. 방문 전 출입 방법과 준비사항을 다시 안내드립니다." },
      { heading: "변경·취소", body: "일정 변경·취소는 가능한 한 빨리 알려주세요. 당일 취소·노쇼 기준은 취소·환불 규정을 따릅니다." },
    ],
    keywords: ["출장마사지 예약 방법", "강동 방문 마사지 예약"],
  },
  {
    slug: "preparation",
    name: "이용 전 준비사항",
    summary: "수건, 공간, 샤워, 반려동물, 주차 안내",
    sections: [
      { heading: "공간 준비", body: "편하게 누울 수 있는 공간을 확보해 주세요. 인원수에 맞는 자리가 필요합니다." },
      { heading: "위생 준비", body: "이용 전 가벼운 샤워를 권장합니다. 수건 준비 여부는 예약 시 안내드립니다." },
      { heading: "반려동물·주차", body: "반려동물이 있는 경우 미리 알려주세요. 방문자 주차 가능 여부도 함께 확인해 주세요." },
    ],
    keywords: ["출장마사지 준비물", "방문 마사지 준비사항"],
  },
  {
    slug: "pricing",
    name: "요금 안내",
    summary: "시간별 요금, 출장비, 추가요금 투명 공개",
    sections: [
      { heading: "기본 요금", body: "시간(코스)별 기본 요금을 투명하게 안내합니다. 정확한 금액은 예약 상담 시 확정됩니다." },
      { heading: "출장비", body: "지역·거리에 따라 출장비가 적용될 수 있으며 예약 전 미리 안내합니다." },
      { heading: "추가요금", body: "야간 시간대·연장 등은 추가요금이 발생할 수 있습니다. 모든 비용은 사전 고지합니다." },
    ],
    keywords: ["강동 출장마사지 요금", "방문 마사지 가격"],
  },
  {
    slug: "first-time",
    name: "첫 이용자 안내",
    summary: "처음 이용 시 걱정되는 부분 FAQ",
    sections: [
      { heading: "처음이라 걱정돼요", body: "예약부터 방문, 진행, 마무리까지 단계별로 안내해 드리므로 처음이어도 어렵지 않습니다." },
      { heading: "어떤 케어를 고르나요", body: "원하는 목적(휴식/근육 피로/순환 등)을 알려주시면 적합한 유형을 함께 정해드립니다." },
      { heading: "안심하고 이용하려면", body: "안전 이용 정책을 먼저 확인해 주세요. 불법·선정적 서비스는 제공하지 않습니다." },
    ],
    keywords: ["출장마사지 첫 이용", "처음 방문 마사지"],
  },
  {
    slug: "safety",
    name: "안전 이용 정책",
    summary: "신원 확인, 불법·선정적 서비스 금지",
    sections: [
      { heading: "안전 확인", body: "방문 케어 특성상 예약자·방문지 확인 절차를 거칠 수 있습니다. 관리사와 이용자 모두의 안전을 위한 기준입니다." },
      { heading: "금지 행위", body: "불법·선정적 서비스 요청은 접수되지 않으며, 현장에서 즉시 이용이 중단될 수 있습니다." },
      { heading: "이용 제한", body: "음주 상태, 미성년자 단독 이용 등은 제한될 수 있습니다." },
    ],
    keywords: ["출장마사지 안전", "방문 케어 정책"],
  },
  {
    slug: "refund",
    name: "취소·환불 규정",
    summary: "예약금, 당일 취소, 노쇼 기준",
    sections: [
      { heading: "취소 기준", body: "예약 변경·취소는 가능한 한 빨리 연락해 주세요. 시점에 따라 기준이 다를 수 있습니다." },
      { heading: "당일 취소·노쇼", body: "당일 취소·노쇼는 출장 준비가 진행된 점을 고려해 별도 기준이 적용될 수 있습니다." },
      { heading: "환불", body: "환불이 필요한 경우 결제 수단과 기준에 따라 처리됩니다." },
    ],
    keywords: ["출장마사지 취소", "방문 마사지 환불"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
