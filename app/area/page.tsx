import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { areas } from "@/lib/areas";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "강동구 지역 안내｜방문 가능 지역 9곳",
  description:
    "강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동 등 강동구 방문 케어 가능 지역과 지역별 특징을 안내합니다.",
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

      <article className="prose section">
        <p>
          강동구는 한강과 인접한 주거 중심 자치구로, 신축 대단지부터 오피스텔, 오래된 주택가까지 다양한 주거 형태가
          공존합니다. 지역마다 건물 형태와 방문 동선, 주차·출입 방식이 달라 예약 전 확인할 점도 조금씩 다릅니다. 이
          페이지는 강동구에서 방문 케어가 가능한 9개 지역을 한곳에 모아, 내 지역을 빠르게 찾고 해당 지역 안내로
          이동할 수 있도록 구성한 허브 페이지입니다.
        </p>

        <h2>방문 가능 지역</h2>
        <div className="grid grid-3" style={{ margin: "16px 0" }}>
          <Link href="/area/gangdong/" className="card">
            <h3>강동구 전체</h3>
            <p>전체 서비스 가능 지역·교통·예약 개요</p>
          </Link>
          {areas.map((a) => (
            <Link key={a.slug} href={`/area/${a.slug}/`} className="card">
              <h3>{a.name}</h3>
              <p>{a.dongs.join(", ")}</p>
            </Link>
          ))}
        </div>

        <h2>왜 9개 통합 지역으로 운영하나요</h2>
        <p>
          강동구 행정동에는 고덕1·2동, 둔촌1·2동, 성내1·2·3동, 암사1·2·3동, 천호1·2·3동처럼 숫자로 나뉜 동이
          있습니다. 본 안내는 이러한 1·2·3동을 생활권 단위로 통합해 강일동·고덕동·길동·둔촌동·명일동·상일동·성내동·암사동·천호동
          9개 지역으로 운영합니다. 동을 잘게 쪼개 거의 같은 페이지를 여러 개 만드는 방식은 이용자에게 도움이 되지
          않고 콘텐츠도 얇아지기 때문에, 각 지역마다 실제 이용 정보를 충분히 담은 통합 페이지로 안내하는 것이 더
          정확하고 유용합니다.
        </p>

        <h2>지역별 특징 요약</h2>
        <p>
          <strong>천호동·성내동</strong>은 오피스텔·주상복합이 밀집한 상권 중심지로 야간 예약과 공동현관·주차 확인이
          중요하고, <strong>고덕동·둔촌동·강일동</strong>은 신축 대단지가 많아 방문 차량 등록과 출입 게이트 확인이
          필요합니다. <strong>명일동·암사동</strong>은 가족 거주 비율이 높아 가정 방문이 많고, <strong>상일동</strong>은
          고덕비즈밸리 업무지구가 가까워 퇴근 후 야간 수요가 큽니다. <strong>길동</strong>은 주거와 상권이 섞여 건물
          형태가 다양합니다. 자세한 내용은 각 지역 페이지의 ‘현장 팁’에서 확인하실 수 있습니다.
        </p>

        <h2>예약과 방문 동선</h2>
        <p>
          예약은 전화 또는 카카오톡으로 희망 지역·날짜·시간과 서비스 유형을 알려주시면 가능 여부를 확인해 드립니다.
          방문지의 정확한 주소와 건물 형태, 공동현관 출입 방법, 주차 가능 여부를 함께 알려주시면 도착 후 지체 없이
          케어를 시작할 수 있습니다. 지역·거리에 따라 출장비가 적용될 수 있으며, 모든 비용은 예약 확정 전에 투명하게
          안내합니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
