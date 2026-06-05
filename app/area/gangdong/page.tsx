import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { areas } from "@/lib/areas";
import { generalFaq } from "@/lib/faq";
import { trustNotice } from "@/lib/site";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강동구 출장마사지 안내｜전 지역 방문 케어",
  description: "강동구 전 지역 출장마사지 안내. 9개 지역 방문 범위·요금·준비·안전 기준을 확인하세요.",
  alternates: { canonical: "/area/gangdong/" },
};

export default function GangdongPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "강동구 지역", path: "/area/" },
    { name: "강동구 전체", path: "/area/gangdong/" },
  ];
  return (
    <div className="container">
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
          faqSchema(generalFaq),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="강동구 출장마사지 안내"
        description="강동구 전 지역 방문 웰니스 케어 안내입니다. 지역을 선택해 예약 가능 범위와 팁을 확인하세요."
      />

      <div className="prose section">
        <p>
          강동구는 한강과 인접한 주거 중심 자치구로, 신축 대단지부터 오피스텔·주택가까지 다양한 주거 형태가
          모여 있습니다. 본 페이지는 강동구 전 지역의 방문 케어 가능 범위와 예약 시 확인할 점을 안내하는 허브
          페이지입니다.
        </p>

        <h2>지역별 안내</h2>
        <div className="area-chips">
          {areas.map((a) => (
            <Link key={a.slug} href={`/area/${a.slug}/`}>
              {a.name}
            </Link>
          ))}
        </div>

        <h2>교통·예약 소요</h2>
        <p>
          예약 접수 후 방문지와 시간대에 따라 방문 소요시간을 안내드립니다. 지역·거리에 따라 출장비가 적용될 수
          있으며, 모든 비용은 예약 전 투명하게 안내합니다.
        </p>

        <div className="notice" style={{ margin: "24px 0" }}>
          {trustNotice}
        </div>

        <Faq items={generalFaq} />
        <EditorialMeta />
      </div>
    </div>
  );
}
