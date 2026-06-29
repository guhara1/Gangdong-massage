import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

// 검색 색인 정책. 주요 검색엔진 봇을 명시적으로 허용해 크롤링·색인을 촉진합니다.
// (Yeti=네이버, Googlebot=구글, bingbot=빙, Daum=다음)
export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Yeti", allow: "/" }, // 네이버
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "bingbot", allow: "/" },
      { userAgent: "Daumoa", allow: "/" }, // 다음
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
