#!/usr/bin/env node
/**
 * IndexNow 제출 스크립트.
 * 배포된 sitemap.xml의 모든 URL을 IndexNow API로 통보합니다.
 * IndexNow 참여 검색엔진: Microsoft Bing, Naver, Yandex, Seznam 등.
 * (Google은 IndexNow 미참여 — 구글은 sitemap + Search Console로 색인)
 *
 * 사용: node scripts/indexnow.mjs   (배포 완료 후 실행)
 */
const HOST = "gangdong-massage.netlify.app";
const KEY = "8f1343ef268f2ebedc5473aa245963a5"; // public/<KEY>.txt 와 동일
const ORIGIN = `https://${HOST}`;

const sitemapRes = await fetch(`${ORIGIN}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error("sitemap.xml 가져오기 실패:", sitemapRes.status);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error("sitemap에서 URL을 찾지 못했습니다.");
  process.exit(1);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

console.log(`IndexNow 제출: HTTP ${res.status} ${res.statusText} | URL ${urlList.length}건`);
// 200/202 = 정상 접수. 그 외 응답 본문 출력.
if (![200, 202].includes(res.status)) {
  console.log(await res.text());
  process.exit(1);
}
