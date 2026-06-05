import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { services, getService } from "@/lib/services";
import { trustNotice, pricing } from "@/lib/site";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const stepList = [
  "지역 선택",
  "희망 시간 확인",
  "서비스 유형 상담",
  "방문 전 준비사항 안내",
  "관리사 방문 및 케어 진행",
];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `강동 ${s.name} 안내｜이용 전 확인사항`,
    description: `${s.name} 진행 방식, 이용 대상, 예약 전 준비사항과 이용 제한 상황을 안내합니다. ${s.summary}.`,
    alternates: { canonical: `/service/${s.slug}/` },
    keywords: s.keywords,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const crumbs = [
    { name: "홈", path: "/" },
    { name: "서비스 안내", path: "/service/" },
    { name: s.name, path: `/service/${s.slug}/` },
  ];

  return (
    <div className="container">
      <JsonLd
        data={[
          serviceSchema({ name: `강동 ${s.name}`, description: s.body.overview[0] }),
          breadcrumbSchema(crumbs),
          faqSchema(s.faq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={`강동 ${s.name}`} description={s.summary} />

      <article className="prose section">
        {s.body.overview.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>이용 대상</h2>
        <p>{s.body.forWhom}</p>

        <h2>진행 방식</h2>
        <p>{s.body.process}</p>

        <h2>케어 구성·특징</h2>
        {s.body.detail.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>요금·시간 안내</h2>
        <p>{s.body.pricing}</p>
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
        <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          ※ 금액은 예시이며 실제 요금은 예약 시간·방문 위치에 따라 확정됩니다. 코스별 기준은{" "}
          <Link href="/guide/pricing/">요금 안내</Link>를 참고하세요.
        </p>

        <h2>예약 절차</h2>
        <ol className="step-list">
          {stepList.map((t, i) => (
            <li key={i}>
              <span className="step-no">{i + 1}</span>
              <div>
                <strong>{t}</strong>
              </div>
            </li>
          ))}
        </ol>
        <p>
          예약 방법은 <Link href="/guide/reservation/">예약 방법</Link>, 준비물은{" "}
          <Link href="/guide/preparation/">이용 전 준비사항</Link>에서 확인하세요.
        </p>

        <h2>주의·금기 사항</h2>
        <p>{s.body.cautions}</p>
        <p>
          이용 기준과 금지 행위는 <Link href="/guide/safety/">안전 이용 정책</Link>을 참고해 주세요.
        </p>

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <Faq items={s.faq} heading={`${s.name} 자주 묻는 질문`} />

        <h2>다른 서비스 보기</h2>
        <div className="area-chips">
          {services
            .filter((o) => o.slug !== s.slug)
            .map((o) => (
              <Link key={o.slug} href={`/service/${o.slug}/`}>
                {o.name}
              </Link>
            ))}
        </div>

        <EditorialMeta />
      </article>
    </div>
  );
}
