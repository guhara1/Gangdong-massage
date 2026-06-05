# 강동 출장마사지 사이트

강동구 방문 웰니스 케어 안내 사이트. Next.js(App Router) 기반 정적 사이트(SSG)로,
지역·서비스·가이드·웰니스 페이지와 SEO 메타데이터·JSON-LD 구조화 데이터를 포함합니다.

## 기술 스택

- Next.js 14 (App Router) + React 18 + TypeScript
- 정적 빌드(`output: "export"`) — `out/` 폴더를 어디서나 호스팅 가능
- 외부 UI 라이브러리 없이 순수 CSS (`app/globals.css`)

## 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 정적 빌드 → out/ 생성
```

## 디렉터리 구조

```
app/                  라우트(페이지)
  page.tsx            메인 허브
  area/               강동구 지역 (인덱스 + [slug] 9개 + gangdong 전체)
  service/            서비스 안내 (인덱스 + [slug])
  guide/              이용가이드 (인덱스 + [slug])
  wellness/           건강·웰니스 칼럼 (인덱스 + [slug])
  faq/ about/ therapists/ authors/ editorial-policy/ contact/ privacy/ terms/
  sitemap.ts robots.ts not-found.tsx
components/            Header(드롭다운)·Footer·JsonLd·Breadcrumbs 등
lib/                   데이터·설정(site, areas, services, guides, wellness, nav, schema, faq, authors)
```

## 콘텐츠 수정 위치

- 사이트 이름·연락처·운영시간·사업자정보·신뢰 문구: `lib/site.ts`
- 지역 9개 데이터(지역별 고유 콘텐츠): `lib/areas.ts`
- 서비스/가이드/웰니스 데이터: `lib/services.ts`, `lib/guides.ts`, `lib/wellness.ts`
- 메뉴(드롭다운) 구성: `lib/nav.ts`
- 작성자·검수자·최종 수정일: `lib/authors.ts`

## SEO 메모

- 메뉴 드롭다운은 실제 `<a>` 링크 → JS 없이 크롤링 가능 (CSS hover/focus-within로 펼침)
- 페이지별 canonical·title·description, 지역/서비스 페이지는 보조 키워드 지정
- JSON-LD: Organization·WebSite(전역), LocalBusiness·Service·BreadcrumbList·FAQPage·Article 등
- `sitemap.xml`, `robots.txt` 자동 생성 — 배포 전 `lib/site.ts`의 `url`을 실제 도메인으로 교체
- 지역 페이지는 1·2·3동 통합 운영 + 지역별 고유 정보로 도어웨이 페이지 위험 완화

> 본 사이트의 모든 안내 문구·요금·사업자 정보·작성자 정보는 예시이며,
> 실제 운영 정보로 교체하고 개인정보처리방침·이용약관은 법적 검토 후 사용하세요.
