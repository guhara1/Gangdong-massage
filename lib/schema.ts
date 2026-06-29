// JSON-LD 구조화 데이터 헬퍼.
import { site } from "./site";
import type { FaqItem } from "./faq";
import { reviews, ratingSummary, USE_REVIEW_SCHEMA } from "./reviews";

// 선호 썸네일 절대 URL
const ogImageUrl = `${site.url.replace(/\/$/, "")}${site.ogImage}`;

// AggregateRating 노드(평점 요약). 실제 후기 기반 값으로 교체해 사용.
export function aggregateRatingNode() {
  return {
    "@type": "AggregateRating",
    ratingValue: ratingSummary.ratingValue,
    reviewCount: ratingSummary.reviewCount,
    bestRating: ratingSummary.bestRating,
    worstRating: ratingSummary.worstRating,
  };
}

// Review 노드 목록(개별 후기).
export function reviewNodes() {
  return reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
  }));
}

// 후기/평점 필드를 스키마 객체에 합쳐주는 헬퍼(스위치 OFF면 아무것도 추가하지 않음).
function withRatingFields<T extends object>(base: T, enable?: boolean): T {
  if (!enable || !USE_REVIEW_SCHEMA || reviews.length === 0) return base;
  return {
    ...base,
    aggregateRating: aggregateRatingNode(),
    review: reviewNodes(),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    logo: ogImageUrl,
    image: ogImageUrl,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: site.business.addressRegion,
      addressLocality: site.business.addressLocality,
      addressCountry: "KR",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "ko-KR",
  };
}

export function localBusinessSchema(opts?: { areaServed?: string; withReviews?: boolean }) {
  return withRatingFields(
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      description: site.description,
      image: ogImageUrl,
      telephone: site.phone,
      priceRange: "₩₩",
      openingHours: "Mo-Su 10:00-29:00",
      address: {
        "@type": "PostalAddress",
        addressRegion: site.business.addressRegion,
        addressLocality: site.business.addressLocality,
        addressCountry: "KR",
      },
      areaServed: opts?.areaServed
        ? { "@type": "Place", name: opts.areaServed }
        : { "@type": "AdministrativeArea", name: "서울특별시 강동구" },
    },
    opts?.withReviews,
  );
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  areaServed?: string;
  withReviews?: boolean;
}) {
  return withRatingFields(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: opts.name,
      description: opts.description,
      provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
      areaServed: { "@type": "AdministrativeArea", name: opts.areaServed ?? "서울특별시 강동구" },
    },
    opts?.withReviews,
  );
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(opts: { headline: string; description: string; author: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    author: { "@type": "Person", name: opts.author },
    publisher: { "@type": "Organization", name: site.name },
    datePublished: opts.datePublished,
    inLanguage: "ko-KR",
  };
}
