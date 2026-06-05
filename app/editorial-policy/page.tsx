import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "편집 정책｜콘텐츠 작성·검수 기준",
  description: "콘텐츠 작성 원칙, 검수 방식, AI 사용 여부, 출처와 수정 기준 등 편집 정책을 안내합니다.",
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

      <article className="prose section">
        <p>
          편집 정책은 이 사이트의 모든 안내 콘텐츠가 어떤 기준으로 작성되고 검수되는지를 설명합니다. 마사지·건강과
          맞닿은 주제인 만큼, 이용자가 정확한 정보를 바탕으로 판단할 수 있도록 일관된 원칙을 두고 운영합니다.
        </p>

        <h2>작성 원칙</h2>
        <p>
          모든 콘텐츠는 검색 순위 조작이 아니라 이용자에게 도움이 되는 정보 제공을 목표로 작성합니다. 동일한 문구를
          반복해 넣는 키워드 스터핑이나, 지역명만 바꾼 유사 문서, 근거 없는 효능 주장은 사용하지 않습니다. 마사지는
          건강·안전과 연결될 수 있어, 웰니스 목적의 휴식과 컨디션 관리라는 범위 안에서 과장 없이 설명합니다.
        </p>

        <h2>검수 방식</h2>
        <p>
          작성된 콘텐츠는 게시 전 안전·금기 사항과 표현의 적정성을 검수합니다. 특히 질병의 진단·치료·완치를 보장하는
          것으로 오인될 수 있는 표현이 없는지, 불법·선정적 내용으로 해석될 여지가 없는지를 확인합니다. 요금·정책처럼
          사실관계가 중요한 항목은 실제 운영 기준과 일치하는지 점검합니다.
        </p>

        <h2>AI 사용 여부</h2>
        <p>
          초안 작성 단계에서 보조 도구(AI 포함)를 활용할 수 있습니다. 다만 도구 사용 여부와 관계없이, 사실 확인과
          최종 검수의 책임은 사람 담당자에게 있습니다. 결과물의 가치를 우선하며, 검수 없이 대량으로 페이지를 찍어내는
          방식은 사용하지 않습니다.
        </p>

        <h2>출처와 정확성</h2>
        <p>
          지역 정보(역·랜드마크·주거 형태 등)는 일반적으로 알려진 정보를 기준으로 작성하며, 운영 정보(요금·운영시간·
          연락처)는 실제 운영 기준과 맞추는 것을 원칙으로 합니다. 변경 가능성이 있는 정보는 예약 시 최종 확인하도록
          안내합니다.
        </p>

        <h2>수정 기준</h2>
        <p>
          요금·운영시간·정책 등에 변경이 생기면 해당 페이지를 갱신하고 최종 수정일을 표기합니다. 작성자와 검수자
          정보는 <Link href="/authors/">작성자 소개</Link>에 공개되어 있으며, 문의는 <Link href="/contact/">문의하기</Link>로
          받습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
