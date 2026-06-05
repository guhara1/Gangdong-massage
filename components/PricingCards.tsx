import { courses, priceNotes, site } from "@/lib/site";

// 코스별 기본 요금 3카드 (추천 카드 강조). 다크+그린 테마.
export default function PricingCards() {
  return (
    <div>
      <div className="price-cards">
        {courses.map((c) => (
          <div key={c.name} className={`price-card${c.recommended ? " is-recommended" : ""}`}>
            {c.recommended ? <span className="price-badge">추천</span> : null}
            <h3>{c.name}</h3>
            <p className="price-amount">
              {c.price}
              <span className="won">원</span>
            </p>
            <p className="price-time">{c.time}</p>
            <p className="price-desc">{c.desc}</p>
            <a href={site.phoneHref} className={`btn ${c.recommended ? "btn-primary" : "btn-outline"} price-cta`}>
              예약 문의
            </a>
          </div>
        ))}
      </div>
      <p className="price-foot">
        {priceNotes.join(" · ")} — 지역·예약 시간대·이동 거리에 따라 상담 시 최종 확정됩니다.
      </p>
    </div>
  );
}
