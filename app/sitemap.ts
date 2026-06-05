import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { guides } from "@/lib/guides";
import { wellnessPosts } from "@/lib/wellness";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPaths = [
    "/",
    "/service/",
    "/area/",
    "/area/gangdong/",
    "/guide/",
    "/wellness/",
    "/faq/",
    "/about/",
    "/therapists/",
    "/authors/",
    "/editorial-policy/",
    "/contact/",
    "/privacy/",
    "/terms/",
  ];

  const dynamicPaths = [
    ...areas.map((a) => `/area/${a.slug}/`),
    ...services.map((s) => `/service/${s.slug}/`),
    ...guides.map((g) => `/guide/${g.slug}/`),
    ...wellnessPosts.map((p) => `/wellness/${p.slug}/`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
