import { site } from "@/lib/site";
import { wellnessPosts } from "@/lib/wellness";
import { editorialMeta } from "@/lib/authors";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 콘텐츠(건강·웰니스 칼럼) RSS 피드. 글 추가 시 자동 반영.
export function GET() {
  const base = site.url.replace(/\/$/, "");
  const pubDate = new Date(editorialMeta.lastUpdated).toUTCString();

  const items = wellnessPosts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${base}/wellness/${p.slug}/</link>
      <guid isPermaLink="true">${base}/wellness/${p.slug}/</guid>
      <description>${esc(p.summary)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} 건강·웰니스</title>
    <link>${base}/</link>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${esc(site.description)}</description>
    <language>ko</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
