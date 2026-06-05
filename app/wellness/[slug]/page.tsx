import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { wellnessPosts, getWellnessPost } from "@/lib/wellness";
import { editorialMeta } from "@/lib/authors";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return wellnessPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getWellnessPost(params.slug);
  if (!p) return {};
  return {
    title: `${p.title}｜건강·웰니스`,
    description: p.summary,
    alternates: { canonical: `/wellness/${p.slug}/` },
    keywords: p.keywords,
  };
}

export default function WellnessPostPage({ params }: { params: { slug: string } }) {
  const p = getWellnessPost(params.slug);
  if (!p) notFound();

  const crumbs = [
    { name: "홈", path: "/" },
    { name: "건강·웰니스", path: "/wellness/" },
    { name: p.title, path: `/wellness/${p.slug}/` },
  ];

  return (
    <div className="container">
      <JsonLd
        data={[
          articleSchema({
            headline: p.title,
            description: p.summary,
            author: editorialMeta.author,
            datePublished: editorialMeta.lastUpdated,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={p.title} description={p.summary} />

      <div className="prose section">
        {p.sections.map((sec) => (
          <div key={sec.heading}>
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
          </div>
        ))}

        <div className="notice" style={{ margin: "24px 0" }}>
          본 콘텐츠는 일반적인 정보 제공을 목적으로 하며, 질병의 진단·치료를 보장하지 않습니다. 지속적인 통증·이상
          증상이 있는 경우 의료 전문가와 상담해 주세요.
        </div>

        <EditorialMeta />
      </div>
    </div>
  );
}
