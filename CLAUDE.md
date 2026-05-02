# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**Next.js 16 기반 풀스택 스타터 킷** - 최신 기술 스택(React 19, TypeScript, TailwindCSS v4, shadcn/ui)을 사용한 프로덕션 레디 웹 애플리케이션입니다.

### ⚠️ 중요: Next.js 16은 breaking changes를 포함합니다
- `node_modules/next/dist/docs/`의 가이드를 반드시 확인하세요
- 이전 버전의 습관으로 코드를 작성하지 마세요
- 사용 중단된(deprecated) API를 사용하지 않도록 주의

## 기술 스택

| 기술 | 버전 | 특징 |
|------|------|------|
| **Next.js** | 16.2.4 | App Router 기반 풀스택 프레임워크 |
| **React** | 19.2.4 | 최신 React 버전 |
| **TypeScript** | 5.x | 완벽한 타입 안전성 |
| **TailwindCSS** | v4 | **CSS-first** (tailwind.config 파일 없음, CSS 변수 사용) |
| **shadcn/ui** | - | 25개+ 프리빌드 컴포넌트 포함 |
| **next-themes** | 0.4.6 | 다크/라이트 모드 테마 지원 |
| **react-hook-form** | 7.74.0 | 성능 최적화 폼 라이브러리 |
| **Zod** | 4.3.6 | 타입 안전한 유효성 검사 |
| **Sonner** | 2.0.7 | Toast 알림 |

## 자주 사용하는 명령어

```bash
npm run dev       # 개발 서버 시작 (localhost:3000)
npm run build     # 프로덕션 빌드
npm start         # 빌드된 프로덕션 앱 실행
npm run lint      # ESLint 실행 (통과 필수)
```

## 프로젝트 구조

```
src/
├── app/                      # App Router 페이지들 (라우트 그룹 사용)
│   ├── layout.tsx           # Root 레이아웃 (메타데이터, 프로바이더)
│   ├── page.tsx             # 홈 페이지 (/)
│   ├── globals.css          # 전역 스타일 (CSS 변수 정의)
│   │
│   ├── (marketing)/         # 마케팅 페이지들
│   │   └── layout.tsx
│   ├── (auth)/              # 인증 페이지들
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (dashboard)/         # 대시보드
│   │   └── dashboard/page.tsx
│   └── (demo)/              # 컴포넌트 데모
│       └── demo/page.tsx
│
├── components/
│   ├── ui/                  # shadcn/ui 컴포넌트들 (25개+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   └── ... (기타 UI 컴포넌트)
│   ├── layout/              # 레이아웃 컴포넌트
│   │   ├── header.tsx       # 헤더 / 네비게이션
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   ├── mobile-nav.tsx
│   │   └── theme-toggle.tsx # 테마 전환 버튼
│   ├── auth/                # 인증 폼 컴포넌트
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── dashboard/           # 대시보드 컴포넌트
│   │   ├── stats-card.tsx
│   │   └── recent-activity.tsx
│   ├── marketing/           # 랜딩 페이지 섹션
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   └── cta-section.tsx
│   └── common/              # 전역 컴포넌트
│       └── providers.tsx    # next-themes ThemeProvider
│
├── lib/
│   ├── utils.ts            # 핵심 유틸리티 (cn(), formatDate() 등)
│   ├── constants.ts        # 전역 상수 (SITE_CONFIG)
│   └── validations.ts      # Zod 스키마 정의
│
├── types/
│   ├── nav.ts              # 네비게이션 타입
│   └── api.ts              # API 타입
│
└── hooks/
    └── use-mobile.tsx      # 모바일 반응형 훅
```

## 핵심 구성 요소

### 1. 경로 별칭 (Path Alias)
- `@/*` → `src/*` (tsconfig.json에 정의)
- 예: `import { Button } from '@/components/ui/button'`

### 2. 라우트 그룹 (Route Groups)
- `(marketing)`, `(auth)`, `(dashboard)`, `(demo)` 폴더들은 URL 경로에 영향을 주지 않음
- 의미적으로 관련 페이지를 그룹화하기 위한 폴더
- 예: `/login`은 `(auth)/login/page.tsx` 파일에 위치

### 3. Root 레이아웃 구조
```tsx
// src/app/layout.tsx
- 메타데이터 설정 (title, description, og:tags)
- Geist 폰트 (Google Fonts)
- Providers 컴포넌트 (next-themes)
- Sonner Toaster (Toast 알림)
```

### 4. TailwindCSS v4 커스터마이징
- `src/app/globals.css`에서 CSS 변수로 색상 등을 정의
- `tailwind.config.ts` 파일이 없음 (CSS-first 방식)
- `postcss.config.mjs`에만 `@tailwindcss/postcss` 플러그인 설정

### 5. 테마 시스템
- `next-themes` + `ThemeProvider` 사용
- `src/components/layout/theme-toggle.tsx`에서 테마 전환 버튼 구현
- `className="dark"` 클래스로 다크모드 토글

### 6. 폼 검증
- `react-hook-form` + `Zod` 조합 사용
- `src/lib/validations.ts`에 Zod 스키마 정의
- `src/components/ui/form.tsx`로 폼 컴포넌트 구성

## 개발 시 주의사항

### ESLint 규칙
- `eslint.config.mjs`에 정의됨
- `eslint-config-next`의 Core Web Vitals + TypeScript 규칙 적용
- **커밋 전 반드시 린트 통과 필수** (프로젝트 규칙)

### 컴포넌트 추가
shadcn/ui에서 새로운 컴포넌트가 필요하면:
```bash
npx shadcn@latest add [component-name]
```

### 폼 작성 예시
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// 스키마 정의 (src/lib/validations.ts)
const FormSchema = z.object({
  username: z.string().min(2),
})

// 컴포넌트
export function MyForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* react-hook-form + shadcn/ui Form 사용 */}
    </form>
  )
}
```

### 유틸리티 함수
- `cn()` - Tailwind 클래스 병합 (shadcn/ui 핵심)
- `formatDate()` - 한국어 날짜 포맷
- `formatNumber()` - 한국어 숫자 포맷
- `slugify()` - URL 슬러그 생성

## 주요 페이지

| 라우트 | 파일 | 설명 |
|--------|------|------|
| `/` | `app/page.tsx` | 홈 페이지 |
| `/login` | `(auth)/login/page.tsx` | 로그인 |
| `/register` | `(auth)/register/page.tsx` | 회원가입 |
| `/dashboard` | `(dashboard)/dashboard/page.tsx` | 대시보드 |
| `/demo` | `(demo)/demo/page.tsx` | 컴포넌트 데모 |

## 배포 전 체크리스트

- [ ] `npm run lint` 통과
- [ ] `npm run build` 성공
- [ ] 로컬 환경에서 테스트 (`npm run dev` 후 기능 확인)
- [ ] 환경 변수 설정 (`.env.local` 필요시)

## 문서 참고

- [Next.js 16 공식 문서](https://nextjs.org/docs)
- [TailwindCSS v4 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/docs)
- [next-themes 문서](https://github.com/pacocoursey/next-themes)
- [react-hook-form 문서](https://react-hook-form.com/)

## 사용자 커스터마이징 규칙

프로젝트별 코드 스타일:
- **들여쓰기**: 2칸 스페이스
- **함수명**: 동사로 시작 (예: `getData`, `handleClick`)
- **코드 주석**: 한글로 상세히 작성
- **커밋 메시지**: 한글로 작성 (feature/기능명, fix/버그명 브랜치 형식)
