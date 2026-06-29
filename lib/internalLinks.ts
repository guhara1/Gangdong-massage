// 롱테일 주제 기반 내부링크 데이터.
// 메인 → 지역 → 서비스/가이드/웰니스로 이어지는 자연스러운 앵커 텍스트를 생성합니다.
// (지역명·서비스명을 조합해 검색 수요가 있는 롱테일 키워드를 앵커로 사용)
import type { Area } from "./areas";
import { areas } from "./areas";

export interface TopicLink {
  label: string; // 앵커 텍스트(롱테일)
  href: string; // 대상 URL
}

// 지역 상세 페이지용: 해당 지역 × 서비스/가이드 롱테일 링크.
export function areaTopicLinks(area: Area): TopicLink[] {
  const a = area.name;
  return [
    { label: `${a} 아로마 출장마사지 예약`, href: "/service/aroma/" },
    { label: `${a} 스포츠 마사지 근육 피로 관리`, href: "/service/sports/" },
    { label: `${a} 림프 순환·붓기 케어`, href: "/service/lymph/" },
    { label: `${a} 커플·가족 마사지`, href: "/service/couple-family/" },
    { label: `${a} 야간 출장마사지 예약`, href: "/service/night/" },
    { label: `${a} 출장마사지 요금·정찰제 안내`, href: "/guide/pricing/" },
    { label: `${a} 첫 이용자 예약 방법`, href: "/guide/first-time/" },
    { label: `${a} 방문 전 준비사항`, href: "/guide/preparation/" },
  ];
}

// 서비스 상세 페이지용: 해당 서비스 × 강동구 9개 지역 롱테일 링크.
export function serviceAreaLinks(serviceName: string): TopicLink[] {
  return areas.map((a) => ({
    label: `${a.name} ${serviceName} 방문 예약`,
    href: `/area/${a.slug}/`,
  }));
}

// 강동구 허브 페이지용: 지역별 대표 롱테일 주제.
const areaHubTopic: Record<string, string> = {
  gangil: "강일동 고덕강일 신축단지 방문 예약",
  godeok: "고덕동 신축 아파트 방문 마사지",
  gil: "길동 오피스텔·빌라 출장마사지",
  dunchon: "둔촌동 올림픽파크 단지 방문 케어",
  myeongil: "명일동 가정 방문 케어",
  sangil: "상일동 고덕비즈밸리 야간 방문",
  seongnae: "성내동 강동구청 인근 오피스텔 방문",
  amsa: "암사동 한강 생활권 가정 방문",
  cheonho: "천호동 야간 출장마사지 예약",
};

export function hubTopicLinks(): TopicLink[] {
  return areas.map((a) => ({
    label: areaHubTopic[a.slug] ?? `${a.name} 출장마사지 예약`,
    href: `/area/${a.slug}/`,
  }));
}

// 메인페이지용: 지역·서비스·가이드를 가로지르는 인기 롱테일 주제.
export const homeTopicLinks: TopicLink[] = [
  { label: "천호동 야간 출장마사지 예약", href: "/area/cheonho/" },
  { label: "고덕동 신축 아파트 방문 마사지", href: "/area/godeok/" },
  { label: "둔촌동 올림픽파크 단지 방문 케어", href: "/area/dunchon/" },
  { label: "성내동 오피스텔 출장마사지", href: "/area/seongnae/" },
  { label: "명일동 가정 방문 케어 상담", href: "/area/myeongil/" },
  { label: "강일동 고덕강일 단지 방문 예약", href: "/area/gangil/" },
  { label: "상일동 퇴근 후 야간 방문 예약", href: "/area/sangil/" },
  { label: "암사동 한강 생활권 가정 방문", href: "/area/amsa/" },
  { label: "길동 오피스텔 방문 마사지", href: "/area/gil/" },
  { label: "강동 아로마 오일 이완 케어", href: "/service/aroma/" },
  { label: "강동 스포츠 마사지 근육 피로", href: "/service/sports/" },
  { label: "강동 림프 순환 붓기 관리", href: "/service/lymph/" },
  { label: "강동 커플·가족 마사지 예약", href: "/service/couple-family/" },
  { label: "직장인 어깨·목 피로 관리 가이드", href: "/wellness/neck-shoulder/" },
  { label: "마사지 전후 주의사항", href: "/wellness/before-after/" },
  { label: "강동 출장마사지 요금·정찰제 안내", href: "/guide/pricing/" },
];
