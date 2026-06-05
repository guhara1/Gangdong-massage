"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { areas } from "@/lib/areas";

// Hero용 지역 선택 드롭다운. 선택 후 버튼으로 해당 지역 안내 페이지로 이동.
// (크롤링 가능한 지역 링크는 아래 "지역 선택" 섹션의 실제 <a>로 별도 제공)
export default function AreaSelect() {
  const router = useRouter();
  const [slug, setSlug] = useState("");

  const go = () => {
    router.push(slug ? `/area/${slug}/` : "/area/");
  };

  return (
    <div className="area-select">
      <label htmlFor="hero-area" className="sr-only">
        강동구 지역 선택
      </label>
      <select
        id="hero-area"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        aria-label="강동구 지역 선택"
      >
        <option value="">강동구 지역 선택</option>
        {areas.map((a) => (
          <option key={a.slug} value={a.slug}>
            {a.name}
          </option>
        ))}
      </select>
      <button type="button" className="btn btn-outline" onClick={go}>
        내 지역 예약 가능 여부 확인하기
      </button>
    </div>
  );
}
