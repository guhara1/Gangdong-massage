import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { areas, getArea, areaAdjacency } from "@/lib/areas";
import { services } from "@/lib/services";
import { site, pricing } from "@/lib/site";
import type { FaqItem } from "@/lib/faq";
import { localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    // Title 공식: [지역명] 출장마사지 예약 안내｜요금·방문 가능 지역·준비사항
    title: { absolute: `${area.name} 출장마사지 예약 안내｜요금·방문 가능 지역·준비사항` },
    description: `${area.name} 출장마사지 예약 전 확인할 방문 가능 범위, 요금, 준비사항, 안전 이용 기준을 안내합니다. ${area.dongs.join("·")} 통합 안내 페이지입니다.`,
    alternates: { canonical: `/area/${area.slug}/` },
    keywords: [`${area.name} 출장마사지`, ...area.keywords],
  };
}

const stepList = [
  "지역 선택",
  "희망 시간 확인",
  "서비스 유형 상담",
  "방문 전 준비사항 안내",
  "관리사 방문 및 케어 진행",
];

// 인접 지역 앵커 텍스트를 자연스럽게 분산
const anchorSuffix = ["예약 안내", "방문 가능 지역", "출장비 확인"];

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug);
  if (!area) notFound();

  const crumbs = [
    { name: "홈", path: "/" },
    { name: "강동구 지역", path: "/area/" },
    { name: area.name, path: `/area/${area.slug}/` },
  ];

  // FAQ 5개: 지역 특화 2개 + 공통 3개
  const commonFaq: FaqItem[] = [
    {
      q: `${area.name} 당일 예약도 가능한가요?`,
      a: "가능 여부는 예약 시간, 관리사 배정, 방문 위치에 따라 달라집니다. 당일 예약은 희망 시간보다 여유 있게 문의해 주세요.",
    },
    {
      q: `${area.name} 출장비가 추가되나요?`,
      a: "기본 방문 가능 지역 내에서는 출장비가 없거나 최소화될 수 있으나, 야간 시간대나 특정 위치는 추가요금이 발생할 수 있습니다. 모든 비용은 예약 확정 전에 고지합니다.",
    },
    {
      q: "불법·선정적 서비스도 가능한가요?",
      a: "불법·선정적 요청은 접수되지 않으며, 현장에서도 즉시 이용이 중단될 수 있습니다.",
    },
  ];
  const pageFaq = [...area.faq.slice(0, 2), ...commonFaq];

  // 인접 지역 + 허브 내부링크
  const neighbors = (areaAdjacency[area.slug] ?? [])
    .map((slug) => getArea(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="container">
      <JsonLd
        data={[
          localBusinessSchema({ areaServed: `서울특별시 강동구 ${area.name}` }),
          serviceSchema({
            name: `${area.name} 출장마사지`,
            description: area.intro,
            areaServed: `서울특별시 강동구 ${area.name}`,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(pageFaq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={`${area.name} 출장마사지 예약 안내`} description={area.intro} />

      <article className="prose section">
        {/* 1. 핵심 안내 */}
        <p>
          {area.name} 출장마사지는 강동구 내에서 방문 케어를 원하는 분들이 예약 전 확인해야 할 지역, 요금,
          준비사항, 안전 기준을 안내하는 페이지입니다. 본 서비스는 피로 완화와 휴식을 위한 웰니스 목적의 방문
          케어이며, 의료 행위나 치료를 대신하지 않습니다.
        </p>
        {area.body.overview.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {/* 2. 방문 가능 범위 */}
        <h2>{area.name} 방문 가능 범위</h2>
        <p>
          {area.name} 페이지는 <strong>{area.dongs.join(", ")}</strong>를 통합해 안내합니다. 예약 시 정확한 주소와
          공동현관 여부, 주차 가능 여부를 미리 확인하면 방문 지연을 줄일 수 있습니다.
        </p>
        <p>{area.body.target}</p>

        {/* 3. 많이 찾는 서비스 유형 */}
        <h2>{area.name}에서 많이 찾는 케어</h2>
        <p>
          아로마 케어, 스포츠 케어, 림프 순환 케어, 야간 예약 등 이용 목적에 따라 선택할 수 있습니다. 단, 질환
          치료나 통증 개선을 보장하는 서비스가 아니며, 건강 상태가 좋지 않은 경우 의료 전문가와 먼저 상담하는
          것이 좋습니다.
        </p>
        <div className="area-chips">
          {services.map((s) => (
            <Link key={s.slug} href={`/service/${s.slug}/`}>
              {s.name}
            </Link>
          ))}
        </div>

        {/* 4. 예약 가능 시간과 소요 시간 */}
        <h2>예약 가능 시간과 소요 시간</h2>
        <p>운영시간은 {site.hours}입니다. {area.body.process}</p>
        <p>{area.body.local[0]}</p>

        {/* 5. 요금 안내 */}
        <h2>{area.name} 출장마사지 요금 안내</h2>
        <p>{area.body.pricing}</p>
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
          ※ 금액은 예시이며 실제 요금은 예약 시간·서비스 유형·방문 위치에 따라 확정됩니다. 취소 기준은{" "}
          <Link href="/guide/refund/">취소·환불 규정</Link>을 확인하세요.
        </p>

        {/* 6. 예약 절차 */}
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

        {/* 7. 방문 전 준비사항 */}
        <h2>방문 전 준비사항</h2>
        <p>
          편히 누울 수 있는 조용한 공간을 확보하고, 가벼운 샤워와 환기를 준비해 주세요. 수건 준비 여부, 방문자
          주차·공동현관 출입 방법은 예약 시 함께 안내드립니다. 자세한 내용은{" "}
          <Link href="/guide/preparation/">이용 전 준비사항</Link>을 참고하세요.
        </p>

        {/* 8. 안전 이용 정책 */}
        <h2>안전 이용 정책</h2>
        <p>
          불법·선정적 서비스 요청은 접수되지 않습니다. 음주, 폭언, 위협, 부적절한 요청이 확인될 경우 예약 또는
          현장 이용이 즉시 중단될 수 있습니다.
        </p>
        <p>{area.body.safety}</p>

        {/* 9. 지역 특화 현장 팁 (차별화 콘텐츠) */}
        <h2>{area.name} 예약 시 참고할 현장 팁</h2>
        {area.body.local.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {/* 10. FAQ */}
        <Faq items={pageFaq} heading={`${area.name} 자주 묻는 질문`} />

        {/* 11. 주변 지역 내부링크 (인접 + 허브) */}
        <h2>주변 지역·전체 안내</h2>
        <div className="area-chips">
          {neighbors.map((n, i) => (
            <Link key={n.slug} href={`/area/${n.slug}/`}>
              {n.name} {anchorSuffix[i % anchorSuffix.length]}
            </Link>
          ))}
          <Link href="/area/gangdong/">강동구 전체 안내</Link>
        </div>

        <EditorialMeta />
      </article>
    </div>
  );
}
