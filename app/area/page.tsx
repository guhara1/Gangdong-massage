import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강동구 지역 안내｜방문 가능 지역 목록",
  description: "강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동 등 강동구 방문 케어 가능 지역을 안내합니다.",
  alternates: { canonical: "/area/" },
};

export default function AreaIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "강동구 지역", path: "/area/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="강동구 지역 안내"
        description="강동구 전 지역 방문 케어가 가능합니다. 1·2·3동은 통합해 안내하며, 지역별 예약 팁을 확인하세요."
      />
      <section className="section">
        <div className="grid grid-3">
          <Link href="/area/gangdong/" className="card">
            <h3>강동구 전체</h3>
            <p>전체 서비스 가능 지역·교통·예약 안내</p>
          </Link>
          {areas.map((a) => (
            <Link key={a.slug} href={`/area/${a.slug}/`} className="card">
              <h3>{a.name}</h3>
              <p>{a.dongs.join(", ")}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
