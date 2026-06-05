import { site } from "@/lib/site";

// 모바일 전용 플로팅 전화 버튼(FAB). 터치 시 전화 연결.
// 전 페이지 공통 노출(layout에 배치). 데스크톱은 헤더 CTA가 있어 숨김.
export default function FloatingCall() {
  return (
    <a href={site.phoneHref} className="fab-call" aria-label="전화로 예약 문의">
      <span className="fab-ring" aria-hidden="true" />
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
      </svg>
      <span className="fab-label">전화 예약</span>
    </a>
  );
}
