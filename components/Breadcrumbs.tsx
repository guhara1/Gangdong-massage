// 시각적 브레드크럼 (BreadcrumbList 스키마는 각 페이지에서 별도 출력).
import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="현재 위치">
      <ol>
        {items.map((item, i) => (
          <li key={item.path}>
            {i < items.length - 1 ? (
              <Link href={item.path}>{item.name}</Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
