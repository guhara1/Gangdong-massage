import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { trustNotice } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "이용약관",
  description: "서비스 범위, 예약·취소, 금지 행위 등 이용약관을 안내합니다.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "이용약관", path: "/terms/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="이용약관" />
      <div className="prose section">
        <p className="notice">※ 아래는 기본 골격 예시입니다. 실제 서비스 운영 기준에 맞게 법적 검토 후 작성하세요.</p>
        <h2>제1조 (서비스 범위)</h2>
        <p>본 서비스는 휴식과 컨디션 관리를 위한 웰니스 목적의 방문 케어를 제공합니다.</p>
        <h2>제2조 (예약 및 취소)</h2>
        <p>예약·변경·취소는 안내된 절차와 취소·환불 규정을 따릅니다.</p>
        <h2>제3조 (금지 행위)</h2>
        <p>불법·선정적 서비스 요청, 관리사에 대한 부적절한 언행은 금지되며 즉시 이용이 중단될 수 있습니다.</p>
        <h2>제4조 (책임의 한계)</h2>
        <p>{trustNotice}</p>
      </div>
    </div>
  );
}
