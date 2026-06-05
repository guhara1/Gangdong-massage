// FAQ 목록 렌더링 (시맨틱 details/summary).
import type { FaqItem } from "@/lib/faq";

export default function Faq({ items, heading = "자주 묻는 질문" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section className="faq">
      {heading ? <h2>{heading}</h2> : null}
      {items.map((item, i) => (
        <details key={i}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
