# Next.js v16 Starter Kit

> Next.js 16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반 프로덕션 레디 웹 개발 스타터 킷

## 기술 스택

| 기술 | 버전 | 설명 |
|------|------|------|
| **Next.js** | 16.2.4 | React 풀스택 프레임워크 (App Router) |
| **React** | 19.2.4 | UI 라이브러리 |
| **TypeScript** | 5.x | JavaScript 타입 시스템 |
| **TailwindCSS** | v4 | 유틸리티 퍼스트 CSS 프레임워크 (CSS-first) |
| **shadcn/ui** | 4.5.0 | 고품질 UI 컴포넌트 라이브러리 |
| **Turbopack** | - | Next.js 기본 번들러 (고속 개발) |
| **lucide-react** | 1.11.0 | 아이콘 라이브러리 |
| **next-themes** | 0.4.6 | 테마 관리 (다크/라이트 모드) |
| **react-hook-form** | 7.74.0 | 성능 최적화 폼 라이브러리 |
| **Zod** | 3.24.x | 타입 안전한 유효성 검사 |
| **Sonner** | 2.0.7 | Toast 알림 라이브러리 |

## 주요 기능

- ✅ **Turbopack 기반 고속 개발** - 프로덕션급 번들러로 빠른 개발 서버
- ✅ **TailwindCSS v4 (CSS-first)** - `tailwind.config` 없이 CSS 변수로 커스터마이징
- ✅ **완벽한 다크모드** - next-themes로 자동 테마 감지
- ✅ **shadcn/ui 25개 컴포넌트** - 즉시 사용 가능한 UI 컴포넌트
- ✅ **반응형 디자인** - 모바일부터 데스크탑까지 완벽 지원
- ✅ **폼 검증** - react-hook-form + zod 통합
- ✅ **Toast 알림** - sonner 기반 사용자 피드백
- ✅ **타입 안전성** - 100% TypeScript 기반
- ✅ **라우트 그룹** - URL에 영향 없는 의미적 폴더 구조

## 빠른 시작

### 1. 개발 서버 시작

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어주세요.

### 2. 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── (marketing)/        # 마케팅 페이지
│   ├── (dashboard)/        # 대시보드
│   ├── (auth)/             # 로그인/회원가입
│   ├── (demo)/             # 컴포넌트 데모
│   ├── layout.tsx          # Root 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── globals.css         # 전역 스타일
│
├── components/
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── layout/             # 레이아웃 컴포넌트
│   ├── marketing/          # 랜딩 페이지 섹션
│   ├── dashboard/          # 대시보드 컴포넌트
│   ├── auth/               # 인증 폼
│   └── common/             # 공통 컴포넌트
│
├── hooks/                  # 커스텀 훅
├── lib/                    # 유틸리티 함수
├── types/                  # TypeScript 타입
└── styles/                 # CSS 파일
```

## 주요 페이지

| 라우트 | 설명 |
|--------|------|
| `/` | 랜딩 페이지 |
| `/dashboard` | 대시보드 (통계, 활동) |
| `/login` | 로그인 |
| `/register` | 회원가입 |
| `/demo` | 컴포넌트 데모 |

## npm 스크립트

```bash
npm run dev       # 개발 서버 시작
npm run build     # 프로덕션 빌드
npm start         # 빌드된 앱 실행
npm run lint      # ESLint 실행
```

## 커스터마이징

### 색상 변경
`src/app/globals.css`에서 CSS 변수 수정

### 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
```

### 환경 변수 설정
`.env.example` → `.env.local` 복사 후 수정

## 배포

### Vercel (추천)
```bash
npx vercel deploy
```

### Docker
```bash
docker build -t nextjs-starter .
docker run -p 3000:3000 nextjs-starter
```

## 문서

- [Next.js 문서](https://nextjs.org/docs)
- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/docs)
- [react-hook-form 문서](https://react-hook-form.com/)

## 라이선스

MIT
