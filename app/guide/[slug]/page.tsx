import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { guides, getGuide } from "@/lib/guides";
import { trustNotice } from "@/lib/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  return {
    title: `${g.name}｜강동 출장마사지 이용가이드`,
    description: `${g.summary}. ${g.intro[0]}`,
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
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(g.faq)]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={g.name} description={g.summary} />

      <article className="prose section">
        {g.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {g.sections.map((sec) => (
          <div key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <Faq items={g.faq} heading={`${g.name} 자주 묻는 질문`} />

        <h2>다른 가이드 보기</h2>
        <div className="area-chips">
          {guides
            .filter((o) => o.slug !== g.slug)
            .map((o) => (
              <Link key={o.slug} href={`/guide/${o.slug}/`}>
                {o.name}
              </Link>
            ))}
        </div>

        <EditorialMeta />
      </article>
    </div>
  );
}
