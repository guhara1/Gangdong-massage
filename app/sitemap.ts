import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { wellnessPosts } from "@/lib/wellness";
import { editorialMeta } from "@/lib/authors";

export const dynamic = "force-static";

// 색인 우선순위·갱신빈도 정책.
// 빌드마다 lastmod가 바뀌면 "전체 변경" 신호가 되어 크롤링 효율이 떨어지므로
// 콘텐츠 최종 수정일(editorialMeta.lastUpdated)을 기준으로 고정합니다.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date(editorialMeta.lastUpdated);

  type Entry = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  };

  const entries: Entry[] = [
    // 최상위 — 가장 높은 우선순위
    { path: "/", priority: 1.0, changeFrequency: "daily" },

    // 핵심 전환 페이지 — 지역·서비스
    { path: "/area/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/area/gangdong/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/service/", priority: 0.9, changeFrequency: "weekly" },
    ...areas.map((a) => ({
      path: `/area/${a.slug}/`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),
    ...services.map((s) => ({
      path: `/service/${s.slug}/`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),

    // 가이드·웰니스 콘텐츠
    { path: "/guide/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/wellness/", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq/", priority: 0.7, changeFrequency: "monthly" },
    ...guides.map((g) => ({
      path: `/guide/${g.slug}/`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...wellnessPosts.map((p) => ({
      path: `/wellness/${p.slug}/`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),

    // 신뢰·정책 페이지 — 낮은 우선순위
    { path: "/about/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/therapists/", priority: 0.5, changeFrequency: "monthly" },
    { path: "/authors/", priority: 0.4, changeFrequency: "monthly" },
    { path: "/editorial-policy/", priority: 0.4, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.4, changeFrequency: "monthly" },
    { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms/", priority: 0.3, changeFrequency: "yearly" },
  ];

  return entries.map((e) => ({
    url: `${base}${e.path}`,
    lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
