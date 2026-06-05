import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { wellnessPosts } from "@/lib/wellness";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "건강·웰니스 칼럼｜피로·자세·생활 관리 정보",
  description: "피로 관리, 어깨·목·허리 관리, 마사지 전후 주의사항 등 일반 웰니스 정보를 제공합니다. 치료를 보장하지 않는 일반 정보입니다.",
  alternates: { canonical: "/wellness/" },
};

export default function WellnessIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "건강·웰니스", path: "/wellness/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="건강·웰니스 칼럼"
        description="일상 속 피로와 컨디션 관리에 도움이 되는 일반 정보를 정리했습니다. 의료·치료를 대체하지 않습니다."
      />
      <section className="section">
        <div className="grid grid-3">
          {wellnessPosts.map((p) => (
            <Link key={p.slug} href={`/wellness/${p.slug}/`} className="card">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
            </Link>
          ))}
          <Link href="/faq/" className="card">
            <h3>자주 묻는 질문</h3>
            <p>실제 고객 질문 중심 FAQ</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
