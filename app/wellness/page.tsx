import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { wellnessPosts } from "@/lib/wellness";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "건강·웰니스 칼럼｜피로·자세·생활 관리 정보",
  description: "피로·어깨·목·허리 관리, 마사지 전후 주의 등 강동 건강·웰니스 일반 정보를 제공합니다.",
  alternates: { canonical: "/wellness/", types: { "application/rss+xml": "/rss.xml" } },
};

export default function WellnessIndex() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "건강·웰니스", path: "/wellness/" },
  ];
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageHeader
        title="건강·웰니스 칼럼"
        description="일상 속 피로와 컨디션 관리에 도움이 되는 일반 정보를 정리했습니다. 의료·치료를 대체하지 않습니다."
      />

      <article className="prose section">
        <p>
          건강·웰니스 칼럼은 방문 케어와 함께 일상에서 컨디션을 관리하는 데 도움이 되는 일반 정보를 제공하는 공간입니다.
          하루의 피로가 쌓이는 방식, 오래 앉아 일하는 사람에게 자주 나타나는 어깨·목·허리 부담, 케어 전후로 알아두면
          좋은 점 등을 정리했습니다. 본 콘텐츠는 일반적인 정보 제공을 목적으로 하며, 질병의 진단·치료를 보장하지
          않습니다. 지속적인 통증이나 이상 증상이 있는 경우에는 글의 내용에 의존하기보다 의료 전문가와 상담하시길
          권합니다.
        </p>

        <h2>칼럼 목록</h2>
        <div className="grid grid-3" style={{ margin: "16px 0" }}>
          {wellnessPosts.map((p) => (
            <Link key={p.slug} href={`/wellness/${p.slug}/`} className="card">
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
            </Link>
          ))}
          <Link href="/faq/" className="card">
            <h3>자주 묻는 질문</h3>
            <p>예약·요금·준비·취소 등 실제 질문 모음</p>
          </Link>
        </div>

        <h2>어떤 글을 먼저 읽으면 좋을까요</h2>
        <p>
          하루 종일 책상 앞에서 일하고 퇴근 후에도 피로가 풀리지 않는다면 <Link href="/wellness/fatigue/">피로 관리</Link>와{" "}
          <Link href="/wellness/office-worker/">직장인 케어 가이드</Link>가 도움이 됩니다. 모니터를 오래 보며 어깨와 목이
          뻐근하다면 <Link href="/wellness/neck-shoulder/">어깨·목 관리</Link>, 오래 앉아 허리가 무겁다면{" "}
          <Link href="/wellness/back-care/">허리 피로 관리</Link>를 참고하세요. 케어를 앞두고 있다면{" "}
          <Link href="/wellness/before-after/">마사지 전후 주의사항</Link>을 미리 읽어 두면 더 편안하게 이용할 수 있습니다.
        </p>

        <h2>웰니스 정보를 읽을 때</h2>
        <p>
          웰니스 정보는 생활 습관을 점검하고 컨디션을 관리하는 데 참고하는 용도입니다. 같은 증상이라도 원인은 사람마다
          다를 수 있어, 글에서 권하는 스트레칭이나 습관이 모두에게 맞는 것은 아닙니다. 통증이 느껴지면 무리하지 말고
          멈추고, 저림·마비감·지속되는 통증처럼 주의가 필요한 신호가 있을 때는 자가 관리에 의존하지 말고 의료기관을
          방문하세요. 방문 케어 역시 휴식과 컨디션 관리를 위한 웰니스 목적의 서비스로, 치료를 대신하지 않습니다.
        </p>

        <EditorialMeta />
      </article>
    </div>
  );
}
