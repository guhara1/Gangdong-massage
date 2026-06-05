import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "편집 정책｜콘텐츠 작성·검수 기준",
  description: "콘텐츠 작성·검수 방식, AI 사용 여부, 수정 기준 등 편집 정책을 안내합니다.",
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "편집 정책", path: "/editorial-policy/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="편집 정책" description="콘텐츠의 정확성과 신뢰성을 위한 작성·검수 기준입니다." />
      <div className="prose section">
        <h2>작성 원칙</h2>
        <p>모든 콘텐츠는 이용자에게 도움이 되는 정확한 정보 제공을 목표로 작성합니다. 검색 순위만을 위한 과장·반복 표현을 지양합니다.</p>
        <h2>검수 방식</h2>
        <p>작성된 콘텐츠는 안전·금기 사항과 표현의 적정성을 검수하며, 의료·치료를 보장하는 표현이 사용되지 않도록 점검합니다.</p>
        <h2>AI 사용 여부</h2>
        <p>초안 작성에 보조 도구를 활용할 수 있으나, 사실 확인과 최종 검수는 담당자가 책임집니다.</p>
        <h2>수정 기준</h2>
        <p>요금·운영시간·정책 변경 시 해당 페이지를 갱신하고 최종 수정일을 표시합니다.</p>
      </div>
    </div>
  );
}
