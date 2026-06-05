import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "이용가이드｜예약·준비·요금·안전 안내",
  description:
    "강동 방문 케어 예약 방법, 이용 전 준비사항, 요금, 첫 이용자 안내, 안전 정책, 취소·환불 규정을 한곳에서 안내합니다.",
  alternates: { canonical: "/guide/" },
};

export default function GuideIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "이용가이드", path: "/guide/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="이용가이드" description="예약부터 준비, 요금, 안전 기준까지 이용에 필요한 정보를 정리했습니다." />

      <article className="prose section">
        <p>
          방문 케어를 처음 이용하실 때 드는 대부분의 궁금증은 예약 방법, 준비할 것, 요금, 안전 기준에 관한 것입니다.
          이 페이지는 강동 출장마사지 이용에 필요한 안내를 한곳에 모아, 예약 전후로 확인해야 할 내용을 순서대로 찾아볼
          수 있도록 구성했습니다. 각 항목을 미리 읽어 두면 예약과 방문이 한층 수월합니다.
        </p>

        <h2>가이드 항목</h2>
        <div className="grid grid-3" style={{ margin: "16px 0" }}>
          {guides.map((g) => (
            <Link key={g.slug} href={`/guide/${g.slug}/`} className="card">
              <h3>{g.name}</h3>
              <p>{g.summary}</p>
            </Link>
          ))}
        </div>

        <h2>예약부터 마무리까지 한눈에</h2>
        <p>
          이용은 보통 다음 순서로 진행됩니다. 먼저 전화나 카카오톡으로 희망 지역·시간·서비스 유형을 알려주시면 가능
          여부를 확인해 드립니다. 예약이 확정되면 확인 메시지와 함께 방문 전 준비사항을 안내드립니다. 방문 후에는 간단한
          상담으로 컨디션과 선호 압 강도를 확인하고 케어를 진행하며, 끝난 뒤에는 수분 섭취·휴식 등 사후 안내를 드립니다.
          처음이라면 <Link href="/guide/first-time/">첫 이용자 안내</Link>를 먼저 읽어 보시길 권합니다.
        </p>

        <h2>요금과 취소 기준</h2>
        <p>
          요금은 케어 시간(코스)을 기준으로 책정되며, 지역·거리에 따라 출장비가, 야간 시간대에는 추가요금이 적용될 수
          있습니다. 모든 비용은 예약 확정 전에 투명하게 안내하며, 예고 없는 추가요금은 발생하지 않습니다. 일정 변경·취소는
          가능한 한 빨리 연락해 주실수록 원활하며, 당일 취소·노쇼는 별도 기준이 적용될 수 있습니다. 자세한 내용은{" "}
          <Link href="/guide/pricing/">요금 안내</Link>와 <Link href="/guide/refund/">취소·환불 규정</Link>을 참고해 주세요.
        </p>

        <h2>안전하게 이용하기</h2>
        <p>
          방문 케어는 이용자와 관리사가 직접 대면하는 서비스인 만큼 안전 기준이 분명해야 모두가 안심할 수 있습니다.
          예약자·방문지 확인 절차가 진행될 수 있으며, 불법·선정적 요청은 접수되지 않습니다. 음주 상태나 미성년자 단독
          이용은 제한되며, 본 케어는 의료 행위가 아니므로 건강 상태가 있는 경우 이용 전 의료 전문가와 상담해 주세요.
          이용 기준의 자세한 내용은 <Link href="/guide/safety/">안전 이용 정책</Link>에 정리되어 있습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
