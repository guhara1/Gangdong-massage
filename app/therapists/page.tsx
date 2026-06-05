import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "관리사 기준｜경력·교육·검증·안전 수칙",
  description: "방문 케어 관리사의 경력·교육, 검증 절차, 위생·안전 수칙, 응대 기준을 안내합니다.",
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

      <article className="prose section">
        <p>
          방문 케어는 이용자의 공간에서 직접 대면해 진행되는 서비스인 만큼, 케어를 맡는 관리사의 기준이 무엇보다
          중요합니다. 이 페이지는 관리사를 어떻게 운영하고 점검하는지, 어떤 수칙을 지키는지를 정리한 안내입니다.
          아래 기준은 이용자와 관리사 모두의 안전과 편안함을 위한 공통 원칙입니다.
        </p>

        <h2>경력·교육</h2>
        <p>
          한국인 관리사가 방문하며, 케어 관리사는 관련 경력과 교육 이수 기준을 충족하도록 운영합니다. 케어 유형(아로마·스포츠·림프 등)에 따라
          진행 방식과 압 조절이 달라지므로, 이용자가 요청한 목적에 맞춰 적절한 강도로 케어를 진행할 수 있도록 준비
          과정을 둡니다. 의료 행위가 아닌 웰니스 케어의 범위 안에서, 무리한 동작이나 통증을 유발하는 압을 사용하지
          않도록 안내합니다.
        </p>

        <h2>검증 절차</h2>
        <p>
          단순히 기술만이 아니라 응대 태도와 안전 수칙 준수 여부를 함께 점검합니다. 예약·방문 과정에서의 약속 시간
          준수, 이용자 요청에 대한 적절한 응대, 케어 중 불편 사항에 대한 즉각적인 대응 등을 주기적으로 확인합니다.
          기준에 맞지 않는 경우 재교육 또는 배정 제외 등의 조치를 취합니다.
        </p>

        <h2>위생·안전 수칙</h2>
        <ul>
          <li>케어에 사용하는 도구와 물품은 청결하게 관리합니다.</li>
          <li>이용자의 피부 상태·민감성·알레르기 정보를 사전에 확인하고, 상처나 질환 부위는 케어하지 않습니다.</li>
          <li>케어 중에는 이용자의 컨디션을 살피며, 불편이 있으면 즉시 멈추고 조절합니다.</li>
          <li>방문 일정과 동선은 안전을 고려해 운영합니다.</li>
        </ul>

        <h2>이용자 보호와 상호 존중</h2>
        <p>
          관리사 기준은 이용자를 위한 것이면서 동시에 관리사를 보호하기 위한 것이기도 합니다. 불법·선정적 요청은
          어떤 경우에도 응하지 않으며, 그러한 요구가 확인되면 현장에서 즉시 이용이 중단됩니다. 관리사에 대한 폭언·
          위협·부적절한 언행 역시 금지되며, 상황에 따라 관련 기관에 신고될 수 있습니다. 이러한 기준은{" "}
          <Link href="/guide/safety/">안전 이용 정책</Link>과 함께 적용됩니다.
        </p>

        <p className="notice">
          ※ 본 페이지의 기준은 운영 원칙을 설명하기 위한 예시 문구를 포함합니다. 실제 경력·자격·인증 정보가 있다면
          구체적으로 교체해 신뢰도를 높이세요.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
