// 사이트 전역 설정. 실제 운영 정보로 교체해서 사용하세요.
export const site = {
  name: "강동 출장마사지",
  shortName: "강동 케어",
  // 배포 도메인으로 교체하세요. (sitemap/robots/canonical 기준)
  url: "https://gangdong-massage.example.com",
  description:
    "강동구 전 지역 방문 웰니스 케어. 예약 전 지역, 요금, 준비사항, 안전 이용 기준을 먼저 확인하세요.",
  // 연락처는 실제 값으로 교체하세요.
  phone: "0000-0000",
  phoneHref: "tel:00000000",
  kakaoUrl: "#",
  reserveUrl: "#reserve",
  hours: "10:00 ~ 익일 05:00 (연중무휴)",
  // 선호 썸네일(OG/Discover). 1200x630 권장. public/og-image.png 로 교체하세요.
  ogImage: "/og-image.png",
  // 사업자 정보(예시) — 실제 정보로 교체 필요.
  business: {
    legalName: "강동 케어 (사업자명 기재)",
    registrationNo: "000-00-00000",
    representative: "대표자명",
    address: "서울특별시 강동구",
    addressRegion: "서울특별시",
    addressLocality: "강동구",
  },
  social: {
    blog: "",
    instagram: "",
  },
} as const;

// 코스별 기본 요금(카드용). 실제 운영 금액으로 검토 후 사용하세요.
export interface PriceCourse {
  name: string; // 예: 60분 코스
  time: string; // 예: 60분
  price: string; // 숫자만 (예: 90,000) — 단위는 화면에서 "원" 표기
  desc: string;
  recommended?: boolean;
}

export const courses: PriceCourse[] = [
  { name: "60분 코스", time: "60분", price: "90,000", desc: "기본 컨디션·릴랙스 케어" },
  { name: "90분 코스", time: "90분", price: "150,000", desc: "아로마 포함 추천 구성", recommended: true },
  { name: "120분 코스", time: "120분", price: "180,000", desc: "전신 집중 프리미엄 케어" },
];

// 추가 요금 안내(코스 외)
export const priceNotes: string[] = [
  "야간 추가요금: 시간대별 별도 안내",
  "출장비: 방문 지역·거리에 따라 상담 시 안내",
];

// 표 형태가 필요한 페이지(지역·서비스 상세)용 요금표.
export interface PriceRow {
  name: string;
  time: string;
  price: string;
  note?: string;
}

export const pricing: PriceRow[] = [
  { name: "60분 코스", time: "60분", price: "90,000원", note: "기본 컨디션·릴랙스 케어" },
  { name: "90분 코스", time: "90분", price: "150,000원", note: "아로마 포함 추천 구성" },
  { name: "120분 코스", time: "120분", price: "180,000원", note: "전신 집중 프리미엄 케어" },
  { name: "야간 추가", time: "시간대별", price: "별도 안내", note: "예약 시 고지" },
  { name: "출장비", time: "지역별", price: "상담 시 안내", note: "거리에 따라 적용" },
];

// 모든 페이지 하단/예약·서비스 상세에 노출하는 신뢰·면책 문구.
export const trustNotice =
  "본 서비스는 피로 완화와 휴식을 위한 웰니스 목적의 방문 케어입니다. 질병의 진단·치료·처방을 대신하지 않으며, 통증·질환·임신·수술 후 회복·고위험 건강 상태가 있는 경우 이용 전 의료 전문가와 상담해 주세요. 불법·선정적 서비스 요청은 접수되지 않으며, 현장에서 즉시 이용이 중단될 수 있습니다.";
