import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { areas, getArea } from "@/lib/areas";
import { generalFaq } from "@/lib/faq";
import { trustNotice } from "@/lib/site";
import { localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug);
  if (!area) return {};
  return {
    title: `${area.name} 출장마사지 안내｜예약 가능 지역·요금·준비사항`,
    description: `${area.dongs.join("·")} 통합 방문 케어 안내. ${area.name} 예약 전 운영시간, 출장비, 준비사항, 안전 정책을 확인하세요.`,
    alternates: { canonical: `/area/${area.slug}/` },
    keywords: [`${area.name} 출장마사지`, ...area.keywords],
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug);
  if (!area) notFound();

  const crumbs = [
    { name: "홈", path: "/" },
    { name: "강동구 지역", path: "/area/" },
    { name: area.name, path: `/area/${area.slug}/` },
  ];

  // 지역 특화 FAQ + 공통 FAQ 일부를 함께 구조화 데이터로 노출
  const pageFaq = [...area.faq, ...generalFaq.slice(0, 2)];

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
      <PageHeader title={`${area.name} 출장마사지 안내`} description={area.intro} />

      <article className="prose section">
        <p>
          이 페이지는 <strong>{area.dongs.join(", ")}</strong>를 포함한 {area.name} 방문 웰니스 케어 안내입니다.
        </p>
        {area.body.overview.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>이용 대상</h2>
        <p>{area.body.target}</p>

        <h2>서비스 진행 방식</h2>
        <p>{area.body.process}</p>
        <p>
          처음 이용하시는 경우 <Link href="/guide/first-time/">첫 이용자 안내</Link>와{" "}
          <Link href="/guide/preparation/">이용 전 준비사항</Link>을 먼저 확인하시면 도움이 됩니다.
        </p>

        <h2>{area.name} 지역 정보</h2>
        {area.body.local.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <h2>요금·시간 안내</h2>
        <p>{area.body.pricing}</p>
        <p>
          자세한 코스별 요금과 출장비 기준은 <Link href="/guide/pricing/">요금 안내</Link>에서 확인하세요.
        </p>

        <h2>안전·금지사항</h2>
        <p>{area.body.safety}</p>
        <p>
          이용 기준과 금지 행위는 <Link href="/guide/safety/">안전 이용 정책</Link>에 자세히 정리되어 있습니다.
        </p>

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <Faq items={pageFaq} heading={`${area.name} 자주 묻는 질문`} />

        <h2>다른 지역 보기</h2>
        <div className="area-chips">
          {areas
            .filter((a) => a.slug !== area.slug)
            .map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`}>
                {a.name}
              </Link>
            ))}
        </div>

        <EditorialMeta />
      </article>
    </div>
  );
}
