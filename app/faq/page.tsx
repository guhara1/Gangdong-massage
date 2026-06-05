import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import type { FaqItem } from "@/lib/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "자주 묻는 질문｜예약·요금·준비·취소·안전 안내",
  description: "강동 출장마사지 자주 묻는 질문. 예약·요금·준비·취소·안전 기준을 정리했습니다.",
  alternates: { canonical: "/faq/" },
};

const reserveFaq: FaqItem[] = [
  {
    q: "예약은 어떻게 하나요?",
    a: "전화 또는 카카오톡으로 희망 지역(강동구 내 동), 날짜와 시간, 서비스 유형을 알려주시면 가능 여부를 확인해 드립니다. 예약이 확정되면 확인 메시지와 함께 방문 전 준비사항을 안내드립니다.",
  },
  {
    q: "당일 예약도 가능한가요?",
    a: "예약 상황에 따라 당일 예약이 가능할 수 있습니다. 다만 관리사 배정과 이동 시간이 필요하므로, 당일 예약은 희망 시간보다 여유 있게 문의해 주시는 것이 좋습니다.",
  },
  {
    q: "강동구 전 지역 방문이 가능한가요?",
    a: "강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동 등 강동구 9개 지역을 안내합니다. 지역별 방문 정보는 각 지역 페이지에서 확인하실 수 있습니다.",
  },
  {
    q: "야간에도 예약이 가능한가요?",
    a: "운영시간 내 야간 예약이 가능하며, 야간 시간대는 추가요금이 적용될 수 있습니다. 건물 출입 통제가 있는 경우 출입 방법을 미리 확인합니다.",
  },
];

const useFaq: FaqItem[] = [
  {
    q: "예약 전 준비할 것이 있나요?",
    a: "편히 누울 수 있는 조용한 공간을 확보해 주세요. 가벼운 샤워와 환기를 권장하며, 수건 준비 여부와 방문자 주차·공동현관 출입 방법은 예약 시 안내드립니다.",
  },
  {
    q: "요금은 어떻게 되나요?",
    a: "코스(시간) 기준 기본 요금에 지역·거리에 따른 출장비, 야간 추가요금이 더해질 수 있습니다. 모든 비용은 예약 확정 전에 투명하게 안내하며, 예고 없는 추가요금은 발생하지 않습니다.",
  },
  {
    q: "결제는 어떻게 하나요?",
    a: "결제 방식과 예약금 적용 여부는 예약 시 안내드립니다. 자세한 내용은 요금 안내와 취소·환불 규정을 참고해 주세요.",
  },
  {
    q: "예약을 취소하면 환불되나요?",
    a: "취소 시점에 따라 기준이 다르며, 당일 취소·노쇼는 별도 기준이 적용될 수 있습니다. 불가피한 사정이 있는 경우 상황을 알려주시면 함께 조율합니다.",
  },
];

const safetyFaq: FaqItem[] = [
  {
    q: "불법·선정적 서비스도 가능한가요?",
    a: "불가능합니다. 불법·선정적 요청은 접수되지 않으며, 현장에서 그러한 요구가 있을 경우 즉시 이용이 중단됩니다.",
  },
  {
    q: "몸이 아픈데 받아도 되나요?",
    a: "본 케어는 의료 행위가 아닙니다. 고열·급성 통증·수술 직후·임신 고위험·피부 질환 등이 있다면 이용 전 의료 전문가와 상담해 주세요.",
  },
  {
    q: "술을 마셨는데 이용할 수 있나요?",
    a: "음주 상태에서는 안전을 위해 이용이 제한될 수 있습니다. 충분히 깬 뒤 이용해 주세요.",
  },
];

export default function FaqPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "자주 묻는 질문", path: "/faq/" },
  ];
  const allFaq = [...reserveFaq, ...useFaq, ...safetyFaq];
  return (
    <div className="container">
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(allFaq)]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="자주 묻는 질문" description="예약·이용·안전으로 나누어 자주 묻는 질문을 모았습니다." />

      <article className="prose section">
        <p>
          강동 출장마사지를 이용하기 전 가장 많이 물어보시는 내용을 예약, 이용·요금, 안전 세 가지로 나누어 정리했습니다.
          찾으시는 답이 없다면 <Link href="/contact/">문의하기</Link>로 연락 주시면 안내해 드립니다.
        </p>

        <h2>예약·방문 지역</h2>
        <Faq items={reserveFaq} heading="" />

        <h2>이용·요금·취소</h2>
        <Faq items={useFaq} heading="" />

        <h2>안전·건강</h2>
        <Faq items={safetyFaq} heading="" />

        <p>
          더 자세한 기준은 <Link href="/guide/reservation/">예약 방법</Link>, <Link href="/guide/pricing/">요금 안내</Link>,{" "}
          <Link href="/guide/refund/">취소·환불 규정</Link>, <Link href="/guide/safety/">안전 이용 정책</Link>에서 확인하실 수
          있습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
