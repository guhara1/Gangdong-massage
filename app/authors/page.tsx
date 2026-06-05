import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import EditorialMeta from "@/components/EditorialMeta";
import { authors } from "@/lib/authors";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "작성자 소개｜콘텐츠 작성·검수자",
  description: "강동 출장마사지 안내 콘텐츠를 작성·검수하는 담당자와 작성 원칙을 소개합니다.",
  alternates: { canonical: "/authors/" },
};

export default function AuthorsPage() {
  const crumbs = [
    { name: "홈", path: "/" },
    { name: "작성자 소개", path: "/authors/" },
  ];
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: authors.map((a) => ({
      "@type": "Person",
      name: a.name,
      jobTitle: a.role,
      description: a.bio,
      worksFor: { "@type": "Organization", name: site.name },
    })),
  };
  return (
    <div className="container">
      <JsonLd data={[breadcrumbSchema(crumbs), profileSchema]} />
      <Breadcrumbs items={crumbs} />
      <PageHeader title="작성자 소개" description="콘텐츠를 작성하고 검수하는 담당자를 소개합니다." />

      <article className="prose section">
        <p>
          누가, 어떻게, 왜 만든 콘텐츠인지를 밝히는 것은 신뢰의 기본이라고 생각합니다. 이 페이지는 강동 출장마사지
          안내 콘텐츠를 작성하고 검수하는 담당자, 그리고 작성 과정을 소개합니다. 모든 안내는 실제 예약 상담에서 자주
          나오는 질문과 강동구 방문 가능 지역, 요금·안전 기준을 바탕으로 작성됩니다.
        </p>

        <h2>작성·검수 담당</h2>
        {authors.map((a) => (
          <div key={a.slug} className="card" style={{ marginBottom: 16 }}>
            <h3>
              {a.name} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {a.role}</span>
            </h3>
            <p>{a.bio}</p>
          </div>
        ))}

        <h2>작성 원칙</h2>
        <p>
          콘텐츠는 검색 순위만을 위한 과장이나 키워드 반복이 아니라, 이용자가 실제 예약을 판단하는 데 도움이 되도록
          작성합니다. 마사지는 건강·안전과 연결될 수 있는 주제이므로, 효능을 보장하거나 질병 치료를 약속하는 표현은
          사용하지 않습니다. 지역 정보는 그 동에서 예약하려는 분에게 도움이 되는 실제 이용 정보를 담는 것을 목표로
          하며, 지역명만 바꾼 동일한 글은 만들지 않습니다.
        </p>

        <h2>검수와 수정</h2>
        <p>
          작성된 콘텐츠는 안전·금기 사항과 표현의 적정성을 검수합니다. 초안 작성 단계에서 보조 도구를 활용할 수
          있으나, 사실 확인과 최종 검수는 담당자가 책임집니다. 요금·운영시간·정책 등 변경 사항이 생기면 해당 페이지를
          갱신하고 최종 수정일을 표기합니다. 작성·검수의 자세한 기준은 <Link href="/editorial-policy/">편집 정책</Link>에
          정리되어 있으며, 운영 주체와 연락처는 <Link href="/contact/">문의하기</Link>에서 확인하실 수 있습니다.
        </p>

        <p className="notice">※ 작성자·검수자 정보는 예시입니다. 실제 담당자 정보로 교체해 신뢰도를 높이세요.</p>

        <EditorialMeta />
      </article>
    </div>
  );
}
