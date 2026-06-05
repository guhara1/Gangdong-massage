// 상단 메뉴(드롭다운) 구성. 실제 <a> 링크로 렌더링되어 JS 없이도 크롤링 가능합니다.
export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string; // 그룹 대표(인덱스) 페이지
  children: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    label: "서비스 안내",
    href: "/service/",
    children: [
      { label: "강동 출장마사지 안내", href: "/service/" },
      { label: "아로마 케어", href: "/service/aroma/" },
      { label: "스포츠 케어", href: "/service/sports/" },
      { label: "림프 순환 케어", href: "/service/lymph/" },
      { label: "산전·산후 케어 안내", href: "/service/maternity/" },
      { label: "커플·가족 케어", href: "/service/couple-family/" },
      { label: "야간 예약 안내", href: "/service/night/" },
    ],
  },
  {
    label: "강동구 지역",
    href: "/area/",
    children: [
      { label: "강동구 전체", href: "/area/gangdong/" },
      { label: "강일동", href: "/area/gangil/" },
      { label: "고덕동", href: "/area/godeok/" },
      { label: "길동", href: "/area/gil/" },
      { label: "둔촌동", href: "/area/dunchon/" },
      { label: "명일동", href: "/area/myeongil/" },
      { label: "상일동", href: "/area/sangil/" },
      { label: "성내동", href: "/area/seongnae/" },
      { label: "암사동", href: "/area/amsa/" },
      { label: "천호동", href: "/area/cheonho/" },
    ],
  },
  {
    label: "이용가이드",
    href: "/guide/",
    children: [
      { label: "예약 방법", href: "/guide/reservation/" },
      { label: "이용 전 준비사항", href: "/guide/preparation/" },
      { label: "요금 안내", href: "/guide/pricing/" },
      { label: "첫 이용자 안내", href: "/guide/first-time/" },
      { label: "안전 이용 정책", href: "/guide/safety/" },
      { label: "취소·환불 규정", href: "/guide/refund/" },
    ],
  },
  {
    label: "건강·웰니스",
    href: "/wellness/",
    children: [
      { label: "피로 관리 칼럼", href: "/wellness/fatigue/" },
      { label: "어깨·목 관리", href: "/wellness/neck-shoulder/" },
      { label: "허리 피로 관리", href: "/wellness/back-care/" },
      { label: "마사지 전후 주의사항", href: "/wellness/before-after/" },
      { label: "직장인 케어 가이드", href: "/wellness/office-worker/" },
      { label: "자주 묻는 질문", href: "/faq/" },
    ],
  },
  {
    label: "브랜드 신뢰",
    href: "/about/",
    children: [
      { label: "브랜드 소개", href: "/about/" },
      { label: "관리사 기준", href: "/therapists/" },
      { label: "작성자 소개", href: "/authors/" },
      { label: "편집 정책", href: "/editorial-policy/" },
      { label: "개인정보처리방침", href: "/privacy/" },
      { label: "이용약관", href: "/terms/" },
      { label: "문의하기", href: "/contact/" },
    ],
  },
];
