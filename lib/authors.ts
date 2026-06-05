// 작성자·검수자 정보 (E-E-A-T). 실제 인물 정보로 교체하세요.
export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
}

export const authors: Author[] = [
  {
    slug: "editor",
    name: "콘텐츠 편집자",
    role: "콘텐츠 작성·편집",
    bio: "방문 케어 이용 안내와 웰니스 정보를 정확하고 과장 없이 전달하기 위해 콘텐츠를 작성·관리합니다.",
  },
  {
    slug: "reviewer",
    name: "검수 담당자",
    role: "콘텐츠 검수",
    bio: "안전·금기 사항과 표현의 적정성을 검수하여, 의료·치료를 보장하는 표현이 사용되지 않도록 점검합니다.",
  },
];

// 콘텐츠 신뢰 정보(작성·검수·수정일) 기본값.
export const editorialMeta = {
  author: "콘텐츠 편집자",
  reviewer: "검수 담당자",
  lastUpdated: "2026-06-05",
};
