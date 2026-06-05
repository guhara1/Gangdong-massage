import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "문의하기｜전화·카카오·운영시간",
  description: "강동 방문 케어 예약·문의 연락처와 운영시간, 사업자 정보를 안내합니다.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "문의하기", path: "/contact/" },
  ];
  return (
    <div className="container">
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="문의하기" description="예약·상담은 아래 연락처로 문의해 주세요." />
      <div className="prose section">
        <ul>
          <li>
            전화: <a href={site.phoneHref}>{site.phone}</a>
          </li>
          <li>
            카카오톡: <a href={site.kakaoUrl}>카카오톡 채널 문의</a>
          </li>
          <li>운영시간: {site.hours}</li>
        </ul>
        <h2>사업자 정보</h2>
        <p>
          {site.business.legalName}
          <br />
          사업자등록번호 {site.business.registrationNo}
          <br />
          대표 {site.business.representative}
          <br />
          {site.business.address}
        </p>
        <p className="notice">※ 연락처·사업자 정보는 실제 값으로 교체해 사용하세요.</p>
      </div>
    </div>
  );
}
