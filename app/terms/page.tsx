import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { trustNotice } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "이용약관",
  description: "서비스 범위, 예약·취소, 금지 행위, 책임의 한계 등 강동 방문 케어 이용약관을 안내합니다.",
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

      <article className="prose section">
        <p className="notice">
          ※ 아래는 일반적인 골격 예시입니다. 실제 서비스 운영 기준에 맞게 법적 검토 후 작성해 사용하세요.
        </p>
        <p>
          본 약관은 강동 방문 웰니스 케어 서비스의 이용 조건과 절차, 이용자와 운영자의 권리·의무를 정하는 것을
          목적으로 합니다. 서비스를 예약·이용하는 경우 본 약관에 동의한 것으로 봅니다.
        </p>

        <h2>제1조 (서비스 범위)</h2>
        <p>
          본 서비스는 피로 완화와 휴식을 위한 웰니스 목적의 방문 케어를 제공합니다. 질병의 진단·치료·처방 등 의료
          행위를 제공하지 않으며, 어떠한 의학적 효과도 보장하지 않습니다.
        </p>

        <h2>제2조 (예약 및 변경·취소)</h2>
        <p>
          예약은 전화 또는 카카오톡 등 안내된 방법으로 접수합니다. 예약 변경·취소는 가능한 한 빨리 연락해 주셔야
          하며, 당일 취소·노쇼는 출장 준비가 진행된 점을 고려해 별도 기준이 적용될 수 있습니다. 자세한 내용은{" "}
          <Link href="/guide/refund/">취소·환불 규정</Link>을 따릅니다.
        </p>

        <h2>제3조 (요금)</h2>
        <p>
          요금은 케어 시간(코스)을 기준으로 하며, 지역·거리에 따른 출장비와 야간 추가요금이 적용될 수 있습니다. 모든
          비용은 예약 확정 전에 안내하며, 예고 없는 추가요금은 청구하지 않습니다.
        </p>

        <h2>제4조 (금지 행위)</h2>
        <p>
          불법·선정적 서비스 요청, 관리사에 대한 폭언·위협·부적절한 언행은 금지됩니다. 이러한 행위가 확인될 경우
          예약 또는 현장 이용이 즉시 중단될 수 있으며, 상황에 따라 관련 기관에 신고될 수 있습니다.
        </p>

        <h2>제5조 (이용 제한)</h2>
        <p>
          음주 상태에서의 이용은 안전을 위해 제한될 수 있으며, 미성년자의 단독 이용은 불가합니다. 발열·급성 통증·
          상처·피부 질환 등이 있는 경우 케어 대상에서 제외될 수 있습니다.
        </p>

        <h2>제6조 (책임의 한계)</h2>
        <p>{trustNotice}</p>

        <h2>제7조 (약관의 변경)</h2>
        <p>
          본 약관은 관련 법령과 운영 정책에 따라 변경될 수 있으며, 변경 시 페이지를 통해 안내합니다. 문의는{" "}
          <Link href="/contact/">문의하기</Link>로 받습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
