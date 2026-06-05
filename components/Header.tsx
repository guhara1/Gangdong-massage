// 상단 헤더 + 드롭다운 메뉴.
// 드롭다운 항목은 실제 <a> 링크라 JS 없이도 크롤링/탐색이 가능합니다.
// (CSS hover/focus-within로 펼쳐지며, 모바일에서는 펼쳐진 목록을 그대로 노출)
import Link from "next/link";
import { navGroups } from "@/lib/nav";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          {site.name}
        </Link>

        <nav className="main-nav" aria-label="주요 메뉴">
          <ul className="nav-list">
            {navGroups.map((group) => (
              <li key={group.label} className="nav-item">
                <Link href={group.href} className="nav-top">
                  {group.label}
                </Link>
                <div className="dropdown">
                  <ul>
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a href={site.phoneHref} className="btn btn-primary">
            전화 예약
          </a>
        </div>
      </div>
    </header>
  );
}
