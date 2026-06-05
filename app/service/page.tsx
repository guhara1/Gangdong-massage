import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { services } from "@/lib/services";
import { trustNotice } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강동 출장마사지 서비스 안내｜케어 유형·이용 안내",
  description: "아로마·스포츠·림프·산전산후·커플가족·야간 등 강동 방문 케어 서비스 유형과 이용 방식을 안내합니다.",
  alternates: { canonical: "/service/" },
};

export default function ServiceIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "서비스 안내", path: "/service/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="강동 출장마사지 서비스 안내"
        description="목적에 맞는 웰니스 케어 유형을 선택하세요. 모든 케어는 휴식과 컨디션 관리를 위한 방문 서비스입니다."
      />
      <section className="section">
        <div className="grid grid-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/service/${s.slug}/`} className="card">
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>
        <div className="notice" style={{ marginTop: 24 }}>
          {trustNotice}
        </div>
        <EditorialMeta />
      </section>
    </div>
  );
}
