import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { site, trustNotice } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "브랜드 소개｜운영 철학과 서비스 원칙",
  description: "강동 방문 웰니스 케어의 운영 철학과 서비스 원칙을 소개합니다.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "브랜드 소개", path: "/about/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="브랜드 소개" description={`${site.name}의 운영 철학과 서비스 원칙입니다.`} />
      <div className="prose section">
        <h2>운영 철학</h2>
        <p>
          {site.name}는 이동 부담 없이 자택·숙소에서 휴식을 취하려는 분들을 위한 방문 웰니스 케어를 안내합니다.
          과장 없는 정보 제공과 안전한 이용을 가장 중요한 원칙으로 삼습니다.
        </p>
        <h2>서비스 원칙</h2>
        <ul>
          <li>요금·출장비·추가요금을 예약 전 투명하게 안내합니다.</li>
          <li>웰니스 목적의 케어만 제공하며, 의료·치료를 표방하지 않습니다.</li>
          <li>불법·선정적 서비스 요청은 접수하지 않습니다.</li>
          <li>이용자와 관리사 모두의 안전을 위한 확인 절차를 운영합니다.</li>
        </ul>
        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>
      </div>
    </div>
  );
}
