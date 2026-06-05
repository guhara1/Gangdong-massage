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
import { site } from "@/lib/site";
import { localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    title: { absolute: `${area.name} 출장마사지 예약 안내｜${area.dongs.join("·")} 통합` },
    // 지역별 고유 소개문을 메타 설명으로 사용(템플릿 반복 회피)
    description: area.intro,
    alternates: { canonical: `/area/${area.slug}/` },
    keywords: [`${area.name} 출장마사지`, ...area.keywords],
  };
}

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
          faqSchema(area.faq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={`${area.name} 출장마사지 예약 안내`} description={area.intro} />

      <article className="prose section">
        {/* 핵심 안내 — 지역 고유 소개 */}
        {area.body.overview.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <ul className="fact-list">
          {area.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        {/* 방문 가능 범위 */}
        <h2>{area.name} 방문 가능 범위</h2>
        <p>
          {area.name} 페이지는 <strong>{area.dongs.join(", ")}</strong>를 통합해 안내합니다. 예약 시 정확한
          주소와 공동현관 출입 방법, 주차 가능 여부를 미리 확인하면 방문 지연을 줄일 수 있습니다.
        </p>
        <p>{area.body.landmarks}</p>
        <p>{area.body.target}</p>

        {/* 지역 수요·이용 특징 */}
        <h2>{area.name} 이용 수요와 특징</h2>
        <p>{area.body.demand}</p>

        {/* 지역 고유 현장 팁 (차별화 콘텐츠) */}
        <h2>{area.name} 예약 시 참고할 현장 팁</h2>
        <p>{area.body.local[0]}</p>
        {area.body.local.slice(1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p>운영시간은 {site.hours}이며, 예약 접수 후 {area.name} 방문까지의 소요시간을 안내드립니다.</p>

        {/* 많이 찾는 케어 — 링크(중복 설명 없이 선택지만) */}
        <h2>{area.name}에서 많이 찾는 케어</h2>
        <p>이용 목적에 따라 케어 유형을 선택할 수 있습니다. 각 케어의 진행 방식과 주의사항은 서비스 안내에서 확인하세요.</p>
        <div className="area-chips">
          {services.map((s) => (
            <Link key={s.slug} href={`/service/${s.slug}/`}>
              {s.name}
            </Link>
          ))}
        </div>

        {/* 이용 안내 — 공통 정보는 전용 페이지로 링크(반복 회피) */}
        <h2>요금·예약·준비·안전 안내</h2>
        <p>
          코스별 기본 요금은 60분 90,000원부터이며, {area.name} 방문 출장비와 야간 추가요금은 상담 시 안내합니다.
          반복되는 공통 안내는 아래 전용 페이지에서 한 번에 확인하실 수 있습니다.
        </p>
        <ul>
          <li>
            <Link href="/guide/pricing/">코스별 요금 안내</Link> — 60·90·120분 요금과 추가요금 기준
          </li>
          <li>
            <Link href="/guide/reservation/">예약 방법</Link> — 문의부터 방문까지 절차
          </li>
          <li>
            <Link href="/guide/preparation/">이용 전 준비사항</Link> — 공간·위생·주차 안내
          </li>
          <li>
            <Link href="/guide/safety/">안전 이용 정책</Link> — 불법·선정적 요청 금지 등 이용 기준
          </li>
        </ul>

        {/* 지역 고유 FAQ */}
        <Faq items={area.faq} heading={`${area.name} 자주 묻는 질문`} />

        {/* 주변 지역 내부링크 (인접 + 허브) */}
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
