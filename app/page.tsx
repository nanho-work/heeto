export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-black/10 p-8 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-black/60">히또 (Heeto)</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">텐동 전문점 홈페이지</h1>
              <p className="mt-3 text-base text-black/70">
                개발 환경 정상 동작 확인용 화면입니다. (Next.js + Tailwind)
              </p>
            </div>

            <div className="shrink-0 rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">
              DEV OK
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-black/5 p-5">
              <p className="text-xs font-semibold text-black/60">PAGE</p>
              <p className="mt-1 text-lg font-semibold">/</p>
              <p className="mt-2 text-sm text-black/60">현재 홈(page.tsx) 렌더링</p>
            </div>
            <div className="rounded-xl bg-black/5 p-5">
              <p className="text-xs font-semibold text-black/60">TAILWIND</p>
              <p className="mt-1 text-lg font-semibold">ON</p>
              <p className="mt-2 text-sm text-black/60">유틸 클래스 적용 확인</p>
            </div>
            <div className="rounded-xl bg-black/5 p-5">
              <p className="text-xs font-semibold text-black/60">NEXT</p>
              <p className="mt-1 text-lg font-semibold">RUNNING</p>
              <p className="mt-2 text-sm text-black/60">npm run dev 실행 중</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              메뉴 페이지로 이동 (/menu)
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-black/15 px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              소개 페이지로 이동 (/about)
            </a>
            <a
              href="/location"
              className="inline-flex items-center justify-center rounded-lg border border-black/15 px-5 py-3 text-sm font-semibold text-black hover:bg-black/5"
            >
              오시는길 페이지로 이동 (/location)
            </a>
          </div>

          <p className="mt-10 text-xs text-black/50">
            확인 방법: 저장 → 브라우저 자동 리로드 → 상단 "DEV OK" 배지가 보이면 정상.
          </p>
        </div>
      </div>
    </main>
  );
}
