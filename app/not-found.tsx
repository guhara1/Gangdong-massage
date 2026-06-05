import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section" style={{ textAlign: "center", padding: "80px 0" }}>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p className="page-lead" style={{ margin: "12px auto 24px" }}>
        주소가 변경되었거나 삭제된 페이지일 수 있습니다.
      </p>
      <Link href="/" className="btn btn-primary">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
