import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import AreaSelect from "@/components/AreaSelect";
import { site, pricing, trustNotice } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { homeFaq } from "@/lib/faq";
import { editorialMeta } from "@/lib/authors";
import { localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  // 레이아웃 title 템플릿을 거치지 않도록 absolute 사용
  title: { absolute: "강동 출장마사지 예약 안내｜지역·요금·안전 기준 확인" },
  description:
    "강동구 전 지역 출장마사지 예약 안내. 강일동·고덕동·천호동 등 방문 가능 지역, 요금, 준비사항, 안전 이용 기준을 확인하세요.",
  alternates: { canonical: "/" },
  keywords: ["강동 출장마사지", "강동구 출장마사지", "강동 마사지 예약", "강동 방문 마사지"],
};

const steps = [
  { n: 1, t: "지역 선택", d: "강동구 내 방문 가능 지역을 확인합니다." },
  { n: 2, t: "희망 시간 확인", d: "원하는 날짜·시간의 예약 가능 여부를 상담합니다." },
  { n: 3, t: "서비스 유형 상담", d: "목적에 맞는 케어 유형과 압 강도를 정합니다." },
  { n: 4, t: "방문 전 준비사항 안내", d: "공간·출입 방법·준비물을 안내드립니다." },
  { n: 5, t: "관리사 방문 및 케어 진행", d: "방문 후 케어를 진행하고 사후 안내를 드립니다." },
];

// 내부링크 앵커를 지역마다 자연스럽게 분산 (동일 문구 반복 회피)
const areaCardLabel: Record<string, string> = {
  gangil: "강일동 방문 가능 시간과 예약 안내",
  godeok: "고덕1·2동 통합 출장마사지 안내",
  gil: "길동 주거·상권 방문 예약 안내",
  dunchon: "둔촌1·2동 통합 방문 케어 안내",
  myeongil: "명일1·2동 방문 예약 안내",
  sangil: "상일1·2동 방문 가능 지역 안내",
  seongnae: "성내1·2·3동 통합 예약 안내",
  amsa: "암사1·2·3동 방문 케어 안내",
  cheonho: "천호1·2·3동 출장마사지 안내",
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          serviceSchema({
            name: "강동 출장마사지",
            description:
              "강동구 전 지역 방문 웰니스 케어. 아로마·스포츠·림프·커플가족·야간 케어를 안내합니다.",
          }),
          breadcrumbSchema([{ name: "홈", path: "/" }]),
          faqSchema(homeFaq),
        ]}
      />

      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            강동 <span className="accent">출장마사지</span> 예약 안내
          </h1>
          <p>
            강동구 전 지역 방문 케어 가능 여부, 요금, 예약 절차, 준비사항, 안전 이용 기준을 한 번에 확인하세요.
          </p>

          {/* 2. 빠른 예약 CTA */}
          <div className="hero-cta">
            <a href={site.phoneHref} className="btn btn-primary">
              전화 예약
            </a>
            <a href={site.kakaoUrl} className="btn btn-outline">
              카카오톡 상담
            </a>
            <Link href="/guide/reservation/" className="btn btn-outline">
              예약 방법 보기
            </Link>
          </div>

          {/* 지역 선택 드롭다운 */}
          <AreaSelect />

          <div className="hero-meta">
            <span className="badge-live">오늘 예약 가능 여부 실시간 상담</span>
            <span>운영시간 {site.hours}</span>
          </div>
          <p className="hero-warn">
            ※ 본 서비스는 웰니스 목적의 방문 케어입니다. 불법·선정적 서비스 요청은 접수되지 않습니다.
          </p>
        </div>
      </section>

      {/* 3. 강동구 방문 가능 지역 선택 */}
      <section className="section">
        <div className="container">
          <h2>강동구 방문 가능 지역 선택</h2>
          <p className="page-lead">
            방문 가능한 강동구 9개 지역입니다. 지역을 선택하면 방문 가능 시간과 예약 팁을 확인할 수 있습니다.
          </p>
          <div className="area-chips">
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`}>
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 서비스 유형 카드 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <h2>강동 출장마사지 서비스 유형</h2>
          <p className="page-lead">목적에 맞는 웰니스 케어를 선택하세요. 모두 휴식·피로 관리를 위한 방문 케어입니다.</p>
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

      {/* 5. 예약 절차 */}
      <section className="section">
        <div className="container">
          <h2>강동 출장마사지 예약은 이렇게 진행됩니다</h2>
          <ol className="step-list" style={{ marginTop: 16 }}>
            {steps.map((s) => (
              <li key={s.n}>
                <span className="step-no">{s.n}</span>
                <div>
                  <strong>{s.t}</strong>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. 요금 안내 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <h2>강동 출장마사지 요금 안내</h2>
          <p className="page-lead">
            모든 비용은 예약 확정 전에 투명하게 안내합니다. 예고 없는 추가요금은 발생하지 않습니다.
          </p>
          <div className="table-wrap">
            <table className="price-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>시간</th>
                  <th>요금</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.time}</td>
                    <td>{row.price}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 12, color: "var(--muted)", fontSize: "0.9rem" }}>
            ※ 위 금액은 예시이며 실제 금액은 상담 시 확정됩니다. 취소·환불 기준은{" "}
            <Link href="/guide/refund/">취소·환불 규정</Link>에서 확인하세요.
          </p>
        </div>
      </section>

      {/* 7. 안전 이용 정책 */}
      <section className="section">
        <div className="container">
          <h2>안전하고 건전한 출장마사지 이용 기준</h2>
          <div className="notice" style={{ marginTop: 16 }}>
            본 서비스는 피로 완화와 휴식을 위한 웰니스 목적의 방문 케어입니다. 질병의 진단·치료·처방을 대신하지
            않으며, 불법·선정적 서비스 요청은 접수되지 않습니다. 음주 상태, 폭언·위협, 부적절한 요청이 확인될 경우
            예약 또는 현장 이용이 즉시 중단될 수 있습니다.
          </div>
          <p style={{ marginTop: 12 }}>
            이용 기준과 금지 행위, 안전 확인 절차는 <Link href="/guide/safety/">안전 이용 정책</Link>에 자세히
            정리되어 있습니다.
          </p>
        </div>
      </section>

      {/* 8. 처음 이용자 준비사항 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <h2>처음 이용하는 분을 위한 준비사항</h2>
          <div className="grid grid-2" style={{ marginTop: 16 }}>
            <div className="card">
              <h3>공간·위생</h3>
              <p>편히 누울 자리를 확보하고, 가벼운 샤워로 청결한 상태를 준비해 주세요.</p>
            </div>
            <div className="card">
              <h3>출입·주차</h3>
              <p>공동현관 출입 방법과 방문자 주차 가능 여부를 예약 시 함께 알려주세요.</p>
            </div>
            <div className="card">
              <h3>컨디션</h3>
              <p>과식·음주 직후는 피해 주세요. 음주 상태에서는 이용이 제한될 수 있습니다.</p>
            </div>
            <div className="card">
              <h3>케어 선택</h3>
              <p>원하는 목적(휴식·근육 피로·가벼운 강도)을 알려주시면 적합한 유형을 함께 정합니다.</p>
            </div>
          </div>
          <p style={{ marginTop: 12 }}>
            더 자세한 내용은 <Link href="/guide/first-time/">첫 이용자 안내</Link>와{" "}
            <Link href="/guide/preparation/">이용 전 준비사항</Link>을 참고하세요.
          </p>
        </div>
      </section>

      {/* 9. 강동구 지역별 내부링크 (앵커 분산) */}
      <section className="section">
        <div className="container">
          <h2>강동구 지역별 출장마사지 안내</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`} className="card">
                <h3>{areaCardLabel[a.slug]}</h3>
                <p>{a.dongs.join(", ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 실제 경험 기반 방문 팁 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <article className="prose">
            <h2>실제 예약 전 확인하면 좋은 강동구 방문 팁</h2>
            <p>
              방문 케어는 건물 형태와 동선에 따라 진행이 매끄럽기도, 지연되기도 합니다. 강동구에서 실제 예약을 준비할
              때 미리 확인하면 좋은 점을 생활권별로 정리했습니다.
            </p>
            <h3>아파트 방문</h3>
            <p>
              대단지는 공동현관 호출·비밀번호, 방문 차량 등록, 경비실 안내 여부를 미리 확인해 두면 도착 후 곧바로
              케어를 시작할 수 있습니다. 고덕동·둔촌동·강일동 등 신축 단지는 동별 출입 게이트가 나뉘는 경우가 많아
              동·호수와 가까운 게이트를 함께 알려주시면 좋습니다.
            </p>
            <h3>오피스텔 방문</h3>
            <p>
              천호동·성내동·길동의 오피스텔은 1층 공동현관 호출이나 엘리베이터 카드 출입이 필요한 곳이 많습니다.
              방문자 주차가 유료이거나 제한되는 건물도 있어, 주차 등록 방법을 예약 단계에서 확인해 두면 편리합니다.
            </p>
            <h3>야간 예약</h3>
            <p>
              야간에는 소음·조명에 유의해 조용히 진행하며, 건물 출입 통제가 있는 경우 출입 방법을 사전에 확인합니다.
              상일동 고덕비즈밸리 인근 업무 건물은 야간 출입이 제한될 수 있어 특히 미리 점검이 필요합니다.
            </p>
            <h3>천호역 인근</h3>
            <p>
              천호역 상권은 시간대에 따라 교통이 혼잡해 방문 소요시간이 달라질 수 있습니다. 예약 시 여유 있게 시간을
              잡으면 일정이 안정적입니다.
            </p>
            <h3>1인 가구 이용</h3>
            <p>
              1인 가구 방문 시에도 이용자와 관리사 모두의 안전을 위해 예약자·방문지 확인 절차가 진행될 수 있습니다.
              이는 안전한 방문을 위한 기준이며, 상담 기록과 함께 안내드립니다.
            </p>
          </article>
        </div>
      </section>

      {/* 11. 콘텐츠 작성 및 검수 기준 (E-E-A-T) */}
      <section className="section">
        <div className="container">
          <h2>콘텐츠 작성 및 검수 기준</h2>
          <div className="table-wrap" style={{ marginTop: 16 }}>
            <table className="info-table">
              <tbody>
                <tr>
                  <th>작성자</th>
                  <td>{editorialMeta.author}</td>
                </tr>
                <tr>
                  <th>검수자</th>
                  <td>{editorialMeta.reviewer}</td>
                </tr>
                <tr>
                  <th>최종 수정일</th>
                  <td>{editorialMeta.lastUpdated}</td>
                </tr>
                <tr>
                  <th>작성 기준</th>
                  <td>실제 예약 상담, 강동구 방문 가능 지역, 요금 정책, 안전 기준을 바탕으로 작성</td>
                </tr>
                <tr>
                  <th>AI 사용 여부</th>
                  <td>초안 작성에 보조 도구를 활용할 수 있으며, 사실 확인과 최종 검수는 담당자가 책임집니다.</td>
                </tr>
                <tr>
                  <th>책임 주체</th>
                  <td>
                    {site.business.legalName} · {site.phone} · {site.hours}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 12 }}>
            작성·검수 원칙은 <Link href="/editorial-policy/">편집 정책</Link>, 운영 주체는{" "}
            <Link href="/about/">브랜드 소개</Link>에서 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <Faq items={homeFaq} heading="강동 출장마사지 자주 묻는 질문" />
          <EditorialMeta />
        </div>
      </section>
    </>
  );
}
