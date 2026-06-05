"use client";

// 상단 헤더 + 반응형 메뉴.
// 데스크톱: hover 드롭다운. 모바일: 햄버거 토글 + 그룹별 아코디언.
// 모든 링크는 초기 HTML에 렌더링되어 JS 없이도 크롤링 가능합니다.
import Link from "next/link";
import { useState } from "react";
import { navGroups } from "@/lib/nav";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={close}>
          {site.name}
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
          <span className={open ? "x" : ""} />
        </button>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="주요 메뉴">
          <ul className="nav-list">
            {navGroups.map((group) => (
              <li key={group.label} className={`nav-item${openGroup === group.label ? " expanded" : ""}`}>
                <div className="nav-row">
                  <Link href={group.href} className="nav-top" onClick={close}>
                    {group.label}
                  </Link>
                  <button
                    type="button"
                    className="nav-caret"
                    aria-label={`${group.label} 하위 메뉴`}
                    aria-expanded={openGroup === group.label}
                    onClick={() => setOpenGroup((g) => (g === group.label ? null : group.label))}
                  >
                    ▾
                  </button>
                </div>
                <div className="dropdown">
                  <ul>
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} onClick={close}>
                          {child.label}
                        </Link>
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
