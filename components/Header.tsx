"use client";

// 상단 헤더 + 반응형 메뉴.
// 데스크톱: hover 드롭다운(클릭 시 닫힘 처리). 모바일: 햄버거 토글 + 그룹별 아코디언.
// 모든 링크는 초기 HTML에 렌더링되어 JS 없이도 크롤링 가능합니다.
import Link from "next/link";
import { useState } from "react";
import { navGroups } from "@/lib/nav";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false); // 모바일 메뉴 패널
  const [openGroup, setOpenGroup] = useState<string | null>(null); // 모바일 아코디언
  const [suppressed, setSuppressed] = useState<string | null>(null); // 데스크톱: 클릭 직후 닫힘

  // 링크 클릭 시: 모바일 메뉴 닫기 + 데스크톱 드롭다운 강제 닫기(포커스 해제)
  const handleNavClick = (groupLabel: string) => {
    setOpen(false);
    setOpenGroup(null);
    setSuppressed(groupLabel);
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement | null)?.blur();
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => handleNavClick("")}>
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
              <li
                key={group.label}
                className={`nav-item${openGroup === group.label ? " expanded" : ""}${
                  suppressed === group.label ? " suppressed" : ""
                }`}
                onMouseLeave={() => setSuppressed((s) => (s === group.label ? null : s))}
              >
                <div className="nav-row">
                  <Link href={group.href} className="nav-top" onClick={() => handleNavClick(group.label)}>
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
                        <Link href={child.href} onClick={() => handleNavClick(group.label)}>
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
