# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 주요 명령어

```bash
npm run dev      # Turbopack 개발 서버 (localhost:3000)
npm run build    # Turbopack 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

테스트 설정 없음.

## 아키텍처 개요

Next.js 16 App Router 기반 스타터킷. `src/` 디렉토리 없이 루트에서 직접 관리.

### 라우팅 구조

```
app/
├── layout.tsx          # 루트 레이아웃: 폰트, ThemeProvider, QueryProvider, Toaster
├── page.tsx            # 홈 쇼케이스
├── dashboard/          # 대시보드 (/dashboard)
├── docs/               # 문서 (/docs)
└── examples/           # 패턴 예제 (/examples/*)
    ├── components/     # UI 컴포넌트 쇼케이스
    ├── data-fetching/  # TanStack Query 패턴 4종
    ├── form/           # react-hook-form + zod 예제
    ├── hooks/          # usehooks-ts 예제
    ├── layout/         # 레이아웃 패턴
    └── config/         # 설정 예제
```

### 컴포넌트 레이어

- `components/ui/` — ShadcnUI 프리미티브 (Radix 기반, cva + cn 패턴)
- `components/layout/` — Header(공개), Footer, Sidebar(대시보드), DashboardHeader
- `components/providers/` — QueryProvider (staleTime 1분, gcTime 5분)
- `components/theme/` — ThemeProvider, ThemeToggle
- `components/forms/` — ContactForm (react-hook-form + zod + sonner)

### 핵심 패턴

**스타일링:** Tailwind CSS v4 (`tailwind.config.js` 없음 — `app/globals.css`의 `@theme` 블록에서 CSS 변수로 정의). 색상은 `oklch` 색상 공간 사용.

**클래스 병합:** `lib/utils.ts`의 `cn()` (clsx + tailwind-merge 조합) — 모든 컴포넌트에서 사용.

**서버 상태:** TanStack Query v5. API 호출은 클라이언트 컴포넌트에서 `useQuery`/`useMutation` 사용.

**폼:** `react-hook-form` + `zod` 스키마 유효성 검사. 성공/실패 피드백은 `sonner` 토스트.

**타입:** 공통 인터페이스는 `types/index.ts`에 정의 (`NavItem`, `ApiResponse<T>`, `User`, `StatCard` 등).

**Path alias:** `@/*` → 프로젝트 루트 (예: `@/components/ui/button`, `@/lib/utils`).

### 주요 의존성 버전 참고

Next.js 16과 Tailwind CSS v4, ShadcnUI v4는 훈련 데이터와 다른 breaking change가 있습니다.
코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 먼저 확인하세요.
