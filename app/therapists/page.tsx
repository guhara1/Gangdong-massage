import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "관리사 기준｜경력·교육·검증 절차",
  description: "방문 케어 관리사의 경력, 교육, 검증 절차 기준을 안내합니다.",
  alternates: { canonical: "/therapists/" },
};

export default function TherapistsPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "관리사 기준", path: "/therapists/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="관리사 기준" description="안심하고 이용할 수 있도록 관리사 운영 기준을 안내합니다." />
      <div className="prose section">
        <h2>경력·교육</h2>
        <p>케어 관리사는 관련 경력과 교육 이수 기준을 충족하도록 운영합니다.</p>
        <h2>검증 절차</h2>
        <p>응대 태도, 안전 수칙 준수 여부를 주기적으로 점검합니다.</p>
        <h2>이용자 보호</h2>
        <p>이용자와 관리사 모두의 안전을 위해 불법·선정적 요청은 일절 응하지 않습니다.</p>
        <p className="notice">
          ※ 본 페이지의 기준은 예시이며, 실제 운영 기준·인증 정보로 교체해 사용하세요.
        </p>
      </div>
    </div>
  );
}
