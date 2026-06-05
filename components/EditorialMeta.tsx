// 작성자·검수자·최종 수정일 표시 (E-E-A-T).
import Link from "next/link";
import { editorialMeta } from "@/lib/authors";

export default function EditorialMeta() {
  return (
    <aside className="editorial-meta">
      <p>
        작성: {editorialMeta.author} · 검수: {editorialMeta.reviewer} · 최종 수정일{" "}
        {editorialMeta.lastUpdated}
      </p>
      <p>
        콘텐츠 작성·검수 기준은 <Link href="/editorial-policy/">편집 정책</Link>을 따릅니다.
      </p>
    </aside>
  );
}
