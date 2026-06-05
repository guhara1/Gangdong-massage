import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "예약 정보 수집·이용·보관 기준 등 개인정보처리방침을 안내합니다.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "개인정보처리방침", path: "/privacy/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="개인정보처리방침" />
      <div className="prose section">
        <p className="notice">
          ※ 아래는 기본 골격 예시입니다. 실제 수집 항목·보관 기간·위탁 현황에 맞게 법적 검토 후 작성하세요.
        </p>
        <h2>1. 수집하는 개인정보 항목</h2>
        <p>예약·상담을 위한 연락처, 방문지 정보 등 서비스 제공에 필요한 최소한의 정보를 수집합니다.</p>
        <h2>2. 수집·이용 목적</h2>
        <p>예약 접수, 방문 안내, 고객 문의 대응 목적으로만 이용합니다.</p>
        <h2>3. 보유 및 이용 기간</h2>
        <p>이용 목적 달성 후 관계 법령에 따른 보관 기간을 제외하고 지체 없이 파기합니다.</p>
        <h2>4. 이용자의 권리</h2>
        <p>이용자는 본인의 개인정보 열람·정정·삭제를 요청할 수 있습니다.</p>
        <h2>5. 문의</h2>
        <p>개인정보 관련 문의는 문의하기 페이지의 연락처로 접수해 주세요.</p>
      </div>
    </div>
  );
}
