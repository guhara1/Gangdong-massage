import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "이용가이드｜예약·준비·요금·안전 안내",
  description: "강동 방문 케어 예약 방법, 이용 전 준비사항, 요금, 첫 이용자 안내, 안전 정책, 취소·환불 규정을 안내합니다.",
  alternates: { canonical: "/guide/" },
};

export default function GuideIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "이용가이드", path: "/guide/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="이용가이드" description="예약부터 준비, 요금, 안전 기준까지 이용에 필요한 정보를 정리했습니다." />
      <section className="section">
        <div className="grid grid-3">
          {guides.map((g) => (
            <Link key={g.slug} href={`/guide/${g.slug}/`} className="card">
              <h3>{g.name}</h3>
              <p>{g.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
