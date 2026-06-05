import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "브랜드 소개｜운영 철학과 서비스 원칙",
  description: "강동 방문 웰니스 케어의 운영 철학, 서비스 원칙, 지역 기반과 신뢰 기준을 소개합니다.",
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

      <article className="prose section">
        <p>
          {site.name}는 이동 부담 없이 자택·숙소에서 휴식을 취하려는 분들을 위한 강동구 방문 웰니스 케어를
          안내합니다. 마사지 업소를 직접 찾아가는 대신, 관리사가 약속된 시간에 방문해 익숙한 공간에서 편안하게
          케어를 받을 수 있도록 돕는 것이 기본 방향입니다. 화려한 광고 문구보다, 이용자가 예약 전에 필요한 정보를
          분명히 확인하고 안심하고 이용할 수 있는 환경을 만드는 데 집중합니다.
        </p>

        <h2>운영 철학</h2>
        <p>
          저희가 가장 중요하게 생각하는 것은 ‘과장하지 않는 것’입니다. 마사지는 건강·안전과 맞닿아 있어, 효능을
          부풀리거나 치료를 약속하는 표현은 오히려 이용자에게 혼란과 위험을 줄 수 있습니다. 그래서 모든 안내는 웰니스
          목적의 휴식과 컨디션 관리라는 범위 안에서, 사실에 기반해 작성합니다. 요금과 이용 기준을 투명하게 공개하고,
          지킬 수 없는 약속을 하지 않는 것이 신뢰의 출발점이라고 믿습니다.
        </p>

        <h2>서비스 원칙</h2>
        <ul>
          <li>요금·출장비·추가요금을 예약 전에 투명하게 안내하고, 예고 없는 추가요금을 받지 않습니다.</li>
          <li>웰니스 목적의 케어만 제공하며, 질병의 진단·치료·처방을 표방하지 않습니다.</li>
          <li>불법·선정적 서비스 요청은 접수하지 않으며, 현장에서도 즉시 이용을 중단합니다.</li>
          <li>이용자와 관리사 모두의 안전을 위한 확인 절차를 운영합니다.</li>
          <li>콘텐츠는 작성자와 검수자를 명시하고, 최종 수정일을 표기합니다.</li>
        </ul>

        <h2>강동구 지역 기반</h2>
        <p>
          강동구는 신축 대단지부터 오피스텔, 오래된 주택가까지 주거 형태가 다양해 지역마다 방문 동선과 확인할 점이
          다릅니다. 저희는 강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동 9개 생활권의 특성을 반영해
          지역별 안내를 따로 정리했습니다. 단순히 지역명만 바꾼 페이지가 아니라, 그 동에서 실제 예약하려는 분에게
          도움이 되는 정보를 담는 것을 목표로 합니다. 자세한 내용은{" "}
          <Link href="/area/">강동구 지역 안내</Link>에서 확인하실 수 있습니다.
        </p>

        <h2>신뢰를 위한 약속</h2>
        <p>
          서비스의 범위와 한계를 분명히 하는 것도 신뢰의 일부라고 생각합니다. 본 서비스는 피로 완화와 휴식을 위한
          웰니스 목적의 방문 케어로, 통증·질환·임신·수술 후 회복 등 건강 상태가 있는 경우 이용 전 의료 전문가와 상담을
          권합니다. 운영 주체와 연락처, 작성·검수 기준은 <Link href="/contact/">문의하기</Link>·
          <Link href="/editorial-policy/">편집 정책</Link> 페이지에 공개되어 있으며, 관리사 운영 기준은{" "}
          <Link href="/therapists/">관리사 기준</Link>에서 확인하실 수 있습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
