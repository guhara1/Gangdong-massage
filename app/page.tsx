import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { generalFaq } from "@/lib/faq";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const steps = ["지역 선택", "시간 선택", "상담 확인", "방문 준비", "케어 진행", "사후 안내"];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([{ name: "홈", path: "/" }]),
          faqSchema(generalFaq),
        ]}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>강동 출장마사지 예약 안내</h1>
          <p>강동구 전 지역 방문 케어, 예약 전 요금·지역·안전 기준을 먼저 확인하세요.</p>
          <div className="hero-cta">
            <a href={site.phoneHref} className="btn btn-primary">
              전화 예약
            </a>
            <a href={site.kakaoUrl} className="btn btn-outline">
              카카오톡 문의
            </a>
            <Link href="/guide/pricing/" className="btn btn-outline">
              요금 안내
            </Link>
          </div>
          <p style={{ marginTop: 14, fontSize: "0.9rem" }}>운영시간 {site.hours}</p>
        </div>
      </section>

      {/* 지역 선택 */}
      <section className="section">
        <div className="container">
          <h2>강동구 지역 선택</h2>
          <p className="page-lead">방문 가능한 강동구 9개 지역입니다. 지역별 예약 팁을 확인하세요.</p>
          <div className="area-chips">
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`}>
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 카드 */}
      <section className="section" style={{ background: "var(--accent)" }}>
        <div className="container">
          <h2>서비스 유형</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/service/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 절차 */}
      <section className="section">
        <div className="container">
          <h2>이용 절차</h2>
          <ol className="steps" style={{ marginTop: 16 }}>
            {steps.map((step, i) => (
              <li key={i}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 요금 요약 */}
      <section className="section" style={{ background: "var(--accent)" }}>
        <div className="container grid grid-2">
          <div>
            <h2>요금 안내 요약</h2>
            <p className="page-lead">
              시간(코스)별 기본 요금과 출장비, 야간 추가요금, 취소 규정을 예약 전 투명하게 안내합니다.
            </p>
            <Link href="/guide/pricing/" className="btn btn-outline">
              자세한 요금 보기
            </Link>
          </div>
          <div>
            <h2>안전 정책</h2>
            <p className="page-lead">
              불법·선정적 요청은 접수되지 않으며, 신원 확인 절차와 이용 제한 상황을 안내합니다.
            </p>
            <Link href="/guide/safety/" className="btn btn-outline">
              안전 이용 정책
            </Link>
          </div>
        </div>
      </section>

      {/* 지역별 안내 목록 (내부링크) */}
      <section className="section">
        <div className="container">
          <h2>강동구 지역별 안내</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`} className="card">
                <h3>{a.name} 출장마사지</h3>
                <p>{a.dongs.join(", ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--accent)" }}>
        <div className="container">
          <Faq items={generalFaq} />
          <EditorialMeta />
        </div>
      </section>
    </>
  );
}
