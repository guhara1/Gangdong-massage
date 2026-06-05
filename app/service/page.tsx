import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { services } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강동 출장마사지 서비스 안내｜케어 유형·선택 기준",
  description: "강동 출장마사지 서비스 유형과 선택 기준 안내. 아로마·스포츠·림프·커플·야간 케어.",
  alternates: { canonical: "/service/" },
};

export default function ServiceIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "서비스 안내", path: "/service/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="강동 출장마사지 서비스 안내"
        description="목적에 맞는 웰니스 케어 유형을 선택하세요. 모든 케어는 휴식과 컨디션 관리를 위한 방문 서비스입니다."
      />

      <article className="prose section">
        <p>
          강동 출장마사지는 마사지 업소를 직접 찾아가는 대신, 관리사가 강동구 내 자택·숙소로 방문해 케어를 진행하는
          방문 웰니스 서비스입니다. 같은 방문 케어라도 이용 목적에 따라 적합한 유형이 다릅니다. 부드러운 휴식이
          필요한 날과 운동 후 뻐근함을 정리하고 싶은 날, 몸이 무겁게 가라앉은 날의 선택이 모두 다를 수 있습니다. 이
          페이지는 강동에서 제공하는 케어 유형을 한눈에 비교하고, 처음 이용하는 분도 기준을 갖고 고를 수 있도록
          정리한 안내입니다.
        </p>

        <h2>서비스 유형 한눈에 보기</h2>
        <div className="grid grid-3" style={{ margin: "16px 0" }}>
          {services.map((s) => (
            <Link key={s.slug} href={`/service/${s.slug}/`} className="card">
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>

        <h2>유형별 차이와 선택 기준</h2>
        <p>
          <strong>아로마 케어</strong>는 식물성 오일을 사용해 부드러운 동작으로 긴장을 가라앉히는 이완 중심 케어로,
          은은한 향과 함께 휴식하고 싶거나 잠들기 전 컨디션을 정리하고 싶을 때 적합합니다. <strong>스포츠 케어</strong>는
          운동·활동 후 누적된 근육 피로를 풀어주는 데 초점을 두며, 다소 단단한 압을 선호하는 분에게 맞습니다.{" "}
          <strong>림프 순환 케어</strong>는 가벼운 압의 부드러운 동작으로, 오래 앉아 있어 몸이 무겁게 느껴지는 날
          전신을 정리하고 싶을 때 좋은 선택입니다.
        </p>
        <p>
          이 외에도 두 분 이상이 함께 받는 <strong>커플·가족 케어</strong>, 늦은 시간대 이용을 위한{" "}
          <strong>야간 예약</strong>, 안전을 최우선으로 사전 상담과 전문가 검수를 거치는{" "}
          <strong>산전·산후 케어</strong> 안내가 있습니다. 어떤 유형이 맞을지 고민된다면, 예약 시 “휴식·근육 피로·가벼운
          강도” 중 원하는 목적을 알려주시면 적합한 케어를 함께 정해 드립니다.
        </p>

        <h2>공통 진행 방식</h2>
        <p>
          모든 서비스는 예약 접수 → 시간·유형 상담 → 방문 전 준비사항 안내 → 방문 및 케어 진행 → 사후 안내의 흐름으로
          진행됩니다. 방문 후 간단한 상담으로 컨디션과 선호 압 강도를 확인하고, 진행 중에도 강도를 조절할 수 있습니다.
          케어 후에는 충분한 수분 섭취와 휴식을 권합니다. 예약 절차와 준비물은{" "}
          <Link href="/guide/reservation/">예약 방법</Link>과 <Link href="/guide/preparation/">이용 전 준비사항</Link>에서,
          코스별 요금은 <Link href="/guide/pricing/">요금 안내</Link>에서 확인하실 수 있습니다.
        </p>

        <h2>이용 전 꼭 알아두실 점</h2>
        <p>
          본 서비스는 휴식과 컨디션 관리를 위한 웰니스 목적의 방문 케어로, 질병의 진단·치료·처방을 대신하지 않습니다.
          통증·질환·임신·수술 후 회복 등 건강 상태가 있는 경우 이용 전 의료 전문가와 상담해 주세요. 또한 불법·선정적
          서비스 요청은 접수되지 않으며, 음주 상태나 미성년자 단독 이용은 제한될 수 있습니다. 자세한 이용 기준은{" "}
          <Link href="/guide/safety/">안전 이용 정책</Link>을 참고해 주세요.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
