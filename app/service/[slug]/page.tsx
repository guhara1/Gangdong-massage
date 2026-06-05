import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { services, getService } from "@/lib/services";
import { trustNotice } from "@/lib/site";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `강동 ${s.name} 안내｜이용 전 확인사항`,
    description: `${s.name} 진행 방식, 이용 대상, 예약 전 준비사항과 이용 제한 상황을 안내합니다.`,
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
          serviceSchema({ name: `강동 ${s.name}`, description: s.intro }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={`강동 ${s.name}`} description={s.summary} />

      <div className="prose section">
        <p>{s.intro}</p>

        <h2>이용 대상</h2>
        <p>{s.forWhom}</p>

        <h2>진행 방식</h2>
        <p>{s.process}</p>

        <h2>주의·금기 사항</h2>
        <p>{s.cautions}</p>

        <h2>예약 안내</h2>
        <p>
          예약 절차와 준비사항은 <Link href="/guide/reservation/">예약 방법</Link> ·{" "}
          <Link href="/guide/preparation/">이용 전 준비사항</Link>에서 확인하세요. 요금은{" "}
          <Link href="/guide/pricing/">요금 안내</Link>를 참고해 주세요.
        </p>

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <EditorialMeta />
      </div>
    </div>
  );
}
