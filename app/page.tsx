import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import EditorialMeta from "@/components/EditorialMeta";
import { site } from "@/lib/site";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { generalFaq } from "@/lib/faq";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const steps = ["지역 선택", "시간 선택", "상담 확인", "방문 준비", "케어 진행", "사후 안내"];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([{ name: "홈", path: "/" }]),
          faqSchema(generalFaq),
        ]}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>
            강동 <span className="accent">출장마사지</span> 예약 안내
          </h1>
          <p>강동구 전 지역 방문 케어, 예약 전 요금·지역·안전 기준을 먼저 확인하세요.</p>
          <div className="hero-cta">
            <a href={site.phoneHref} className="btn btn-primary">
              전화 예약
            </a>
            <a href={site.kakaoUrl} className="btn btn-outline">
              카카오톡 문의
            </a>
            <Link href="/guide/pricing/" className="btn btn-outline">
              요금 안내
            </Link>
          </div>
          <p style={{ marginTop: 14, fontSize: "0.9rem" }}>운영시간 {site.hours}</p>
        </div>
      </section>

      {/* 지역 선택 */}
      <section className="section">
        <div className="container">
          <h2>강동구 지역 선택</h2>
          <p className="page-lead">방문 가능한 강동구 9개 지역입니다. 지역별 예약 팁을 확인하세요.</p>
          <div className="area-chips">
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`}>
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 카드 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <h2>서비스 유형</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/service/${s.slug}/`} className="card">
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 절차 */}
      <section className="section">
        <div className="container">
          <h2>이용 절차</h2>
          <ol className="steps" style={{ marginTop: 16 }}>
            {steps.map((step, i) => (
              <li key={i}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 요금 요약 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container grid grid-2">
          <div>
            <h2>요금 안내 요약</h2>
            <p className="page-lead">
              시간(코스)별 기본 요금과 출장비, 야간 추가요금, 취소 규정을 예약 전 투명하게 안내합니다.
            </p>
            <Link href="/guide/pricing/" className="btn btn-outline">
              자세한 요금 보기
            </Link>
          </div>
          <div>
            <h2>안전 정책</h2>
            <p className="page-lead">
              불법·선정적 요청은 접수되지 않으며, 신원 확인 절차와 이용 제한 상황을 안내합니다.
            </p>
            <Link href="/guide/safety/" className="btn btn-outline">
              안전 이용 정책
            </Link>
          </div>
        </div>
      </section>

      {/* 지역별 안내 목록 (내부링크) */}
      <section className="section">
        <div className="container">
          <h2>강동구 지역별 안내</h2>
          <div className="grid grid-3" style={{ marginTop: 16 }}>
            {areas.map((a) => (
              <Link key={a.slug} href={`/area/${a.slug}/`} className="card">
                <h3>{a.name} 출장마사지</h3>
                <p>{a.dongs.join(", ")}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 원본 안내 콘텐츠 (E-E-A-T·정보 이득 강화) */}
      <section className="section">
        <div className="container">
          <article className="prose">
            <h2>강동 출장마사지, 예약 전에 알아두면 좋은 것</h2>
            <p>
              강동 출장마사지는 마사지 업소를 직접 찾아가는 대신, 관리사가 강동구 내 자택·숙소로 방문해 케어를
              진행하는 방문 웰니스 서비스입니다. 이동 시간과 대기 없이 익숙한 공간에서 휴식할 수 있다는 점이 가장
              큰 장점이지만, 그만큼 예약 전에 지역·요금·안전 기준을 분명히 확인하는 것이 중요합니다. 이 페이지는
              강동구 9개 지역과 6가지 케어 유형을 한눈에 비교하고, 처음 이용하는 분도 기준을 갖고 선택할 수 있도록
              돕는 허브 페이지로 구성했습니다.
            </p>

            <h2>강동구 생활권별 방문 케어 특징</h2>
            <p>
              같은 강동구라도 지역마다 주거 형태와 방문 동선이 다릅니다. 천호동·성내동은 오피스텔과 주상복합이
              밀집해 1인 가구·직장인의 야간 예약 문의가 많고, 공동현관·엘리베이터 카드 출입 확인이 중요한 편입니다.
              고덕동·둔촌동·강일동은 대규모 신축 단지가 많아 방문 차량 등록과 동·출입 게이트 위치를 미리 확인하면
              방문이 빨라집니다. 명일동·암사동은 가족 거주 비율이 높아 가정 방문과 산후 케어 문의가 많고, 상일동은
              고덕비즈밸리 업무지구가 가까워 퇴근 후 야간 이용 수요가 높습니다. 각 지역 페이지에는 이러한 생활권
              특성에 맞춘 실제 예약 팁을 따로 정리해 두었습니다.
            </p>

            <h2>케어 유형은 목적에 맞게</h2>
            <p>
              부드러운 향과 이완 중심의 휴식을 원한다면 아로마 케어, 운동·활동 후 근육 피로를 정리하고 싶다면
              스포츠 케어, 강한 압이 부담스러워 가벼운 강도를 원한다면 림프 순환 케어가 적합합니다. 가족·연인이
              함께 받으려면 커플·가족 케어로 동시 예약을, 늦은 시간 이용은 야간 예약 안내를 참고하세요. 산전·산후
              케어는 안전이 최우선이라 사전 상담과 전문가 검수를 거쳐 진행 가능 여부를 판단합니다.
            </p>

            <h2>예약 전 체크리스트</h2>
            <p>
              방문지 주소와 건물 형태(아파트·오피스텔·주택), 공동현관 출입 방법, 방문자 주차 가능 여부, 원하는 케어
              유형과 압 강도, 알레르기·민감성 여부를 미리 정리해 두면 예약과 방문이 한결 수월합니다. 요금은 케어
              시간(코스)을 기준으로 출장비·야간 추가요금이 더해지며, 모든 비용은 예약 확정 전에 투명하게 안내합니다.
              예고 없는 추가요금은 발생하지 않습니다.
            </p>

            <h2>안전하게 이용하기</h2>
            <p>
              본 서비스는 휴식과 컨디션 관리를 위한 웰니스 목적의 방문 케어로, 질병의 진단·치료를 대신하지 않습니다.
              불법·선정적 요청은 접수되지 않으며 현장에서 즉시 이용이 중단됩니다. 음주 상태나 미성년자 단독 이용은
              제한되며, 안전을 위해 예약자·방문지 확인 절차가 진행될 수 있습니다. 이러한 기준은 이용자와 관리사
              모두를 보호하기 위한 공통 원칙입니다.
            </p>

            <p>
              모든 안내 콘텐츠는 작성자와 검수자를 명시하고 최종 수정일을 표기하며, 작성·검수 기준은{" "}
              <Link href="/editorial-policy/">편집 정책</Link>에 공개되어 있습니다. 브랜드와 관리사 기준은{" "}
              <Link href="/about/">브랜드 소개</Link>·<Link href="/therapists/">관리사 기준</Link>에서 확인하실 수
              있습니다.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <Faq items={generalFaq} />
          <EditorialMeta />
        </div>
      </section>
    </>
  );
}
