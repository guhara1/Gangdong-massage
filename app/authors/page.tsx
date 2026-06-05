import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { authors } from "@/lib/authors";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "작성자 소개｜콘텐츠 작성·검수자",
  description: "콘텐츠를 작성하고 검수하는 담당자 정보를 소개합니다. (E-E-A-T)",
  alternates: { canonical: "/authors/" },
};

export default function AuthorsPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "작성자 소개", path: "/authors/" },
  ];
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: authors.map((a) => ({
      "@type": "Person",
      name: a.name,
      jobTitle: a.role,
      description: a.bio,
      worksFor: { "@type": "Organization", name: site.name },
    })),
  };
  return (
    <div className="container">
      <JsonLd data={[breadcrumbSchema(crumbs), profileSchema]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="작성자 소개" description="콘텐츠 작성·검수 담당자를 소개합니다." />
      <div className="prose section">
        {authors.map((a) => (
          <div key={a.slug} className="card" style={{ marginBottom: 16 }}>
            <h3>
              {a.name} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {a.role}</span>
            </h3>
            <p>{a.bio}</p>
          </div>
        ))}
        <p className="notice">※ 실제 작성자·검수자 정보로 교체해 신뢰도를 높이세요.</p>
      </div>
    </div>
  );
}
