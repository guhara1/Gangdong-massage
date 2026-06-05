import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { services, getService } from "@/lib/services";
import { trustNotice } from "@/lib/site";
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

        <h2>요금·시간 안내</h2>
        <p>{s.body.pricing}</p>
        <p>
          코스별 요금 기준은 <Link href="/guide/pricing/">요금 안내</Link>, 예약 절차는{" "}
          <Link href="/guide/reservation/">예약 방법</Link>에서 확인하세요.
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
