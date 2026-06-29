// 후기·평점(리뷰) 데이터 — 구조화 데이터(Review / AggregateRating)에 사용.
//
// ⚠️⚠️ 매우 중요 (구글·네이버 정책) ⚠️⚠️
// 아래 후기·평점은 "구조 예시"용 샘플입니다. 실제 고객 후기가 아닙니다.
// 검색엔진은 "조작된(실제가 아닌) 후기·평점 구조화 데이터"를 정책 위반으로 보고
// 리치결과 제외 또는 수동 조치(패널티)를 줄 수 있습니다.
// 반드시 운영 전, 실제로 받은 고객 후기·평점으로 교체하거나,
// 실제 후기가 없다면 이 파일의 데이터를 비우고(빈 배열) 노출을 끄세요.
// (USE_REVIEW_SCHEMA = false 로 두면 모든 페이지에서 후기 스키마가 비활성화됩니다.)

// 후기 구조화 데이터 전체 on/off 스위치.
// 실제 후기가 준비되기 전까지는 false 권장(정책 위반 회피).
export const USE_REVIEW_SCHEMA = true;

export interface Review {
  author: string; // 작성자(닉네임 등)
  rating: number; // 1~5
  date: string; // YYYY-MM-DD
  body: string; // 후기 본문
}

// 실제 후기로 교체하세요. (샘플)
export const reviews: Review[] = [
  {
    author: "천호동 이용 고객",
    rating: 5,
    date: "2026-05-21",
    body: "예약부터 방문까지 안내가 정확했고, 요금도 사전에 들은 그대로라 부담이 없었습니다. 어깨 뭉친 게 한결 편해졌어요.",
  },
  {
    author: "고덕동 이용 고객",
    rating: 5,
    date: "2026-05-09",
    body: "신축 아파트 공동현관 출입까지 미리 챙겨주셔서 도착 후 바로 진행됐습니다. 압 강도도 원하는 대로 맞춰주셨어요.",
  },
  {
    author: "둔촌동 이용 고객",
    rating: 4,
    date: "2026-04-27",
    body: "야간 예약이었는데 조용히 진행해 주셔서 좋았습니다. 다음에는 조금 더 일찍 예약하려고 합니다.",
  },
  {
    author: "성내동 이용 고객",
    rating: 5,
    date: "2026-04-15",
    body: "오피스텔이라 주차가 걱정이었는데 인근 주차 안내까지 받아 편했습니다. 정찰제라 추가요금 걱정이 없었어요.",
  },
  {
    author: "명일동 이용 고객",
    rating: 5,
    date: "2026-03-30",
    body: "가정 방문이라 공간 준비 안내를 미리 받아 깔끔하게 진행됐습니다. 응대가 친절하고 전문적이었어요.",
  },
];

// 평점 요약(AggregateRating). 실제 후기 합계로 교체하세요.
export const ratingSummary = {
  ratingValue: "4.8",
  reviewCount: reviews.length,
  bestRating: "5",
  worstRating: "1",
};
