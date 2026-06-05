import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "예약 정보의 수집 항목·이용 목적·보관 기간·제3자 제공·이용자 권리 등 개인정보처리방침을 안내합니다.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "개인정보처리방침", path: "/privacy/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="개인정보처리방침" />

      <article className="prose section">
        <p className="notice">
          ※ 아래는 일반적인 골격 예시입니다. 실제 수집 항목·보관 기간·처리 위탁 현황·책임자 정보에 맞게 법적 검토 후
          작성해 사용하세요.
        </p>
        <p>
          본 방침은 이용자의 개인정보가 어떤 목적으로 수집·이용되고 어떻게 보호되는지를 설명합니다. 예약과 상담에
          필요한 최소한의 정보만을 수집하며, 이용 목적이 달성되면 관계 법령에 따른 보관 기간을 제외하고 지체 없이
          파기하는 것을 원칙으로 합니다.
        </p>

        <h2>1. 수집하는 개인정보 항목</h2>
        <p>
          예약·상담 과정에서 연락처(전화번호 또는 카카오톡 식별 정보), 방문 희망 지역과 주소, 희망 일시, 서비스 유형
          등 서비스 제공에 필요한 정보를 수집할 수 있습니다. 건강상 주의가 필요한 사항(알레르기·민감성 등)은 안전한
          케어를 위해 이용자가 자발적으로 알려주시는 범위에서만 활용합니다.
        </p>

        <h2>2. 수집·이용 목적</h2>
        <p>
          수집한 정보는 예약 접수와 일정 조율, 방문 안내, 고객 문의 대응, 안전한 케어 제공을 위한 확인 목적으로만
          이용합니다. 이용자의 동의 없이 위 목적을 벗어나 사용하지 않습니다.
        </p>

        <h2>3. 보유 및 이용 기간</h2>
        <p>
          개인정보는 수집·이용 목적이 달성되면 파기합니다. 다만 관계 법령에서 일정 기간 보관을 정하고 있는 경우에는
          해당 기간 동안 보관한 뒤 파기합니다.
        </p>

        <h2>4. 제3자 제공 및 처리 위탁</h2>
        <p>
          이용자의 개인정보는 원칙적으로 외부에 제공하지 않습니다. 서비스 운영을 위해 처리 위탁이 필요한 경우에는
          위탁 대상과 범위를 사전에 고지하고 관련 법령에 따라 관리합니다.
        </p>

        <h2>5. 이용자의 권리</h2>
        <p>
          이용자는 자신의 개인정보에 대해 열람·정정·삭제·처리정지를 요청할 수 있으며, 요청 시 관련 법령에 따라 지체
          없이 조치합니다.
        </p>

        <h2>6. 안전성 확보 조치</h2>
        <p>
          개인정보가 분실·도난·유출·변조되지 않도록 접근 제한과 관리적 보호 조치를 시행합니다.
        </p>

        <h2>7. 문의</h2>
        <p>
          개인정보 관련 문의는 <Link href="/contact/">문의하기</Link> 페이지의 연락처로 접수해 주세요. 본 방침은
          관련 법령이나 운영 정책에 따라 변경될 수 있으며, 변경 시 페이지를 통해 안내합니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
