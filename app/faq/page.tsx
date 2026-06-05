import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { generalFaq } from "@/lib/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "자주 묻는 질문｜예약·요금·준비·취소 안내",
  description: "예약 방법, 당일 예약, 준비물, 요금, 방문 지역, 이용 제한 등 강동 출장마사지 자주 묻는 질문을 정리했습니다.",
  alternates: { canonical: "/faq/" },
};

export default function FaqPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "자주 묻는 질문", path: "/faq/" },
  ];
  return (
    <div className="container">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(generalFaq)]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="자주 묻는 질문" description="이용 전 자주 묻는 질문을 모았습니다." />
      <div className="prose section">
        <Faq items={generalFaq} />
        <EditorialMeta />
      </div>
    </div>
  );
}
