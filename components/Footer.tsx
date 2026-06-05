// 푸터: 신뢰 문구, 정책 링크, 사업자 정보.
import Link from "next/link";
import { site, trustNotice } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="trust-notice">{trustNotice}</p>

        <nav className="footer-nav" aria-label="정책 메뉴">
          <Link href="/about/">브랜드 소개</Link>
          <Link href="/therapists/">관리사 기준</Link>
          <Link href="/editorial-policy/">편집 정책</Link>
          <Link href="/privacy/">개인정보처리방침</Link>
          <Link href="/terms/">이용약관</Link>
          <Link href="/contact/">문의하기</Link>
        </nav>

        <div className="biz-info">
          <p>{site.business.legalName}</p>
          <p>
            사업자등록번호 {site.business.registrationNo} · 대표 {site.business.representative}
          </p>
          <p>{site.business.address}</p>
          <p>운영시간 {site.hours}</p>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
