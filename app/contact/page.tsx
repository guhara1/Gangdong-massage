import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { site } from "@/lib/site";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "문의하기｜전화·카카오·운영시간·사업자 정보",
  description: "강동 방문 케어 예약·문의 연락처와 운영시간, 방문 가능 지역, 상담 시 준비 정보, 사업자 정보를 안내합니다.",
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

      <article className="prose section">
        <p>
          예약과 상담은 전화 또는 카카오톡으로 받습니다. 희망 지역(강동구 내 동), 날짜와 시간, 원하는 서비스 유형을
          알려주시면 가능 여부를 확인해 안내해 드립니다. 아래 정보를 참고해 편한 방법으로 연락 주세요.
        </p>

        <h2>연락처</h2>
        <ul>
          <li>
            전화: <a href={site.phoneHref}>{site.phone}</a> — 통화가 편하신 경우
          </li>
          <li>
            카카오톡: <a href={site.kakaoUrl}>카카오톡 채널 문의</a> — 기록을 남기고 싶거나 야간 문의 시
          </li>
          <li>운영시간: {site.hours}</li>
        </ul>

        <h2>방문 가능 지역</h2>
        <p>
          강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동 등 강동구 9개 지역으로 방문합니다. 지역·거리에
          따라 출장비가 적용될 수 있으며, 자세한 내용은 <Link href="/area/">강동구 지역 안내</Link>에서 확인하실 수
          있습니다.
        </p>

        <h2>상담 시 알려주시면 좋은 정보</h2>
        <p>
          원활한 예약을 위해 방문지 주소와 건물 형태(아파트·오피스텔·주택), 공동현관 출입 방법, 방문자 주차 가능
          여부, 원하는 케어 유형과 압 강도, 알레르기·민감성 여부를 함께 알려주시면 좋습니다. 미리 정리해 두시면 상담이
          빠르고 방문도 매끄럽습니다. 준비사항은 <Link href="/guide/preparation/">이용 전 준비사항</Link>을 참고해 주세요.
        </p>

        <h2>예약부터 방문까지</h2>
        <p>
          문의를 주시면 희망 시간대의 예약 가능 여부를 확인해 안내드리고, 예약이 확정되면 확인 메시지와 함께 방문 전
          준비사항을 다시 안내드립니다. 방문 시간이 가까워지면 출입 방법과 도착 예정 시간을 안내하므로, 연락이 닿는
          번호로 문의해 주시면 진행이 매끄럽습니다. 자세한 절차는 <Link href="/guide/reservation/">예약 방법</Link>에서
          확인하실 수 있습니다.
        </p>

        <h2>야간·당일 문의</h2>
        <p>
          야간 시간대나 당일 예약은 관리사 배정과 이동 시간에 따라 가능 여부가 달라집니다. 가급적 희망 시간보다 여유
          있게 문의해 주시면 안내가 수월합니다. 야간 추가요금이 적용되는 경우 예약 확정 전에 미리 고지합니다.
        </p>

        <h2>응대 안내</h2>
        <p>
          상담 시 요금·출장비·추가요금을 예약 확정 전에 투명하게 안내합니다. 본 서비스는 웰니스 목적의 방문 케어로,
          불법·선정적 서비스 요청은 접수되지 않습니다. 건강 상태가 있는 경우 이용 전 의료 전문가와 상담을 권합니다.
        </p>

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

        <p className="notice">※ 연락처·사업자 정보는 예시입니다. 실제 운영 정보로 교체해 사용하세요.</p>

        <EditorialMeta />
      </article>
    </div>
  );
}
