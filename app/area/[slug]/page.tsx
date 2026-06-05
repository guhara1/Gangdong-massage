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

  // 지역 특화 FAQ (도어웨이 방지를 위해 지역 정보 반영)
  const areaFaq = [
    {
      q: `${area.name} 예약 시 무엇을 먼저 확인하나요?`,
      a: area.reserveTip,
    },
    {
      q: `${area.name}는 어떤 건물 형태가 많나요?`,
      a: area.housing,
    },
    ...generalFaq.slice(0, 3),
  ];

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
          faqSchema(areaFaq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={`${area.name} 출장마사지 안내`} description={area.intro} />

      <div className="prose section">
        <p>
          이 페이지는 <strong>{area.dongs.join(", ")}</strong>를 포함한 {area.name} 방문 케어 안내입니다.
          {area.name}의 생활권과 주거 형태에 맞춰 예약 시 확인할 점을 정리했습니다.
        </p>

        <h2>이용 대상</h2>
        <p>
          퇴근 후 휴식을 원하는 직장인, 재택근무로 어깨·허리 피로가 누적된 분, 활동 후 컨디션 관리를 원하는 분
          등 {area.name} 생활권 이용자에게 적합한 방문 웰니스 케어입니다.
        </p>

        <h2>서비스 진행 방식</h2>
        <p>
          예약 접수 → 시간·서비스 유형 상담 → 방문 준비 안내 → 방문 및 케어 진행 → 사후 안내 순으로 진행됩니다.
          처음 이용하시는 경우 <Link href="/guide/first-time/">첫 이용자 안내</Link>를 먼저 확인해 주세요.
        </p>

        <h2>{area.name} 지역 정보</h2>
        <p>{area.housing}</p>
        <p>{area.access}</p>
        <p>
          <strong>예약 팁 ·</strong> {area.reserveTip}
        </p>

        <h2>요금·시간 안내</h2>
        <p>
          시간(코스)별 기본 요금과 {area.name} 방문 출장비, 야간 추가요금을 예약 전 투명하게 안내합니다.
          자세한 기준은 <Link href="/guide/pricing/">요금 안내</Link>에서 확인하세요.
        </p>

        <h2>안전·금지사항</h2>
        <p>
          본 케어는 웰니스 목적의 방문 서비스입니다. 불법·선정적 요청은 접수되지 않으며, 음주 상태에서는 이용이
          제한될 수 있습니다. 자세한 기준은 <Link href="/guide/safety/">안전 이용 정책</Link>을 확인하세요.
        </p>

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <Faq items={areaFaq} heading={`${area.name} 자주 묻는 질문`} />

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
      </div>
    </div>
  );
}
