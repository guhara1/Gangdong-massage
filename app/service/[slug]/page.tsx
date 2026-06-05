import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { services, getService } from "@/lib/services";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

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

        <h2>주의·금기 사항</h2>
        <p>{s.body.cautions}</p>

        {/* 공통 정보(요금·예약·준비·안전)는 전용 페이지로 링크 — 페이지 간 반복 회피 */}
        <h2>요금·예약 안내</h2>
        <p>
          코스별 기본 요금은 60분 90,000원부터이며, 출장비·야간 추가요금은 상담 시 안내합니다. 요금·예약 절차·준비물·이용
          기준은 아래 전용 페이지에서 확인하세요.
        </p>
        <ul>
          <li>
            <Link href="/guide/pricing/">코스별 요금 안내</Link>
          </li>
          <li>
            <Link href="/guide/reservation/">예약 방법</Link>
          </li>
          <li>
            <Link href="/guide/preparation/">이용 전 준비사항</Link>
          </li>
          <li>
            <Link href="/guide/safety/">안전 이용 정책</Link>
          </li>
        </ul>

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
