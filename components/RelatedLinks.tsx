// 롱테일 주제 내부링크 섹션. 메인·지역·서비스 페이지에서 재사용.
import Link from "next/link";
import type { TopicLink } from "@/lib/internalLinks";

export default function RelatedLinks({
  heading,
  kicker,
  eyebrow,
  links,
}: {
  heading: string;
  kicker?: string;
  eyebrow?: string;
  links: TopicLink[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="topic-block" aria-label={heading}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="head">{heading}</h2>
      {kicker && <p className="ed-kicker">{kicker}</p>}
      <ul className="topic-grid">
        {links.map((l) => (
          <li key={`${l.label}-${l.href}`}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
