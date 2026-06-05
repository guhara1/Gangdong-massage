import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { guides, getGuide } from "@/lib/guides";
import { trustNotice } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: `${g.name}｜강동 출장마사지 이용가이드`,
    description: g.summary,
    alternates: { canonical: `/guide/${g.slug}/` },
    keywords: g.keywords,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const crumbs = [
    { name: "홈", path: "/" },
    { name: "이용가이드", path: "/guide/" },
    { name: g.name, path: `/guide/${g.slug}/` },
  ];

  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={g.name} description={g.summary} />

      <div className="prose section">
        {g.sections.map((sec) => (
          <div key={sec.heading}>
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
          </div>
        ))}

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <EditorialMeta />
      </div>
    </div>
  );
}
