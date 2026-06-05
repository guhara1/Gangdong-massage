import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { wellnessPosts, getWellnessPost } from "@/lib/wellness";
import { editorialMeta } from "@/lib/authors";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return wellnessPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getWellnessPost(params.slug);
  if (!p) return {};
  return {
    title: `${p.title}｜건강·웰니스`,
    description: `${p.title}｜${p.summary}. 강동 건강·웰니스 칼럼.`,
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
          faqSchema(p.faq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader title={p.title} description={p.summary} />

      <article className="prose section">
        {p.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        <ul className="fact-list">
          {p.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        {p.sections.map((sec) => (
          <div key={sec.heading}>
            <h2>{sec.heading}</h2>
            {sec.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ))}

        <div className="notice" style={{ margin: "24px 0" }}>
          본 콘텐츠는 일반적인 정보 제공을 목적으로 하며, 질병의 진단·치료를 보장하지 않습니다. 지속적인 통증·이상
          증상이 있는 경우 의료 전문가와 상담해 주세요.
        </div>

        <Faq items={p.faq} heading={`${p.title} 자주 묻는 질문`} />

        <h2>다른 칼럼 보기</h2>
        <div className="area-chips">
          {wellnessPosts
            .filter((o) => o.slug !== p.slug)
            .map((o) => (
              <Link key={o.slug} href={`/wellness/${o.slug}/`}>
                {o.title}
              </Link>
            ))}
        </div>

        <EditorialMeta />
      </article>
    </div>
  );
}
