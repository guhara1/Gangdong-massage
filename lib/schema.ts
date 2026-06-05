// JSON-LD 구조화 데이터 헬퍼.
import { site } from "./site";
import type { FaqItem } from "./faq";

// 선호 썸네일 절대 URL
const ogImageUrl = `${site.url.replace(/\/$/, "")}${site.ogImage}`;

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

export function localBusinessSchema(opts?: { areaServed?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    description: site.description,
    image: ogImageUrl,
    telephone: site.phone,
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
  };
}

export function serviceSchema(opts: { name: string; description: string; areaServed?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
    areaServed: { "@type": "AdministrativeArea", name: opts.areaServed ?? "서울특별시 강동구" },
  };
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
