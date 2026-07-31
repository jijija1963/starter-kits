# Next.js 모던 웹 스타터킷

이 프로젝트는 빠르게 웹 개발을 시작하기 위해 설정된 최신 기술스택 기반의 스타터킷입니다.

## 🛠 기술스택

- **Next.js 16** - React 풀 스택 프레임워크 (App Router)
- **TypeScript** - 정적 타입 지정
- **Tailwind CSS 4** - 유틸리티 중심 CSS (CSS Variables 기반 테마)
- **shadcn/ui** - 접근성 높은 UI 컴포넌트 라이브러리
- **lucide-react** - 아이콘 라이브러리
- **Zustand** - 간단하고 가벼운 전역 상태 관리
- **React Hook Form** - 유연하고 성능 좋은 폼 관리
- **Zod** - TypeScript 우선의 스키마 검증 라이브러리
- **Sonner** - Toast 알림 라이브러리 (다크모드 대응)
- **next-themes** - 다크모드/라이트모드 상태 관리

## 📁 프로젝트 구조

```
src/
├── app/                           # Next.js App Router
│   ├── globals.css               # 전역 스타일 (Tailwind + CSS Variables, 라이트/다크 테마)
│   ├── layout.tsx                # 루트 레이아웃 (Header, Main, Footer, ThemeProvider)
│   └── page.tsx                  # 홈페이지 (Hero + 기술스택 + 예시 컴포넌트)
│
├── components/
│   ├── ui/                        # Layer 1: Primitives (shadcn/ui - Base UI 기반)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── navigation-menu.tsx   # 데스크톱 네비게이션
│   │   ├── sheet.tsx             # 모바일 메뉴
│   │   ├── separator.tsx         # 구분선
│   │   └── sonner.tsx            # 토스트 알림
│   │
│   ├── layout/                    # Layer 2: 구조 컴포넌트 (모든 페이지에 반복됨)
│   │   ├── header.tsx            # 헤더/네비게이션
│   │   ├── footer.tsx            # 푸터
│   │   ├── mobile-nav.tsx        # 모바일 메뉴 (Sheet 기반)
│   │   ├── mode-toggle.tsx       # 다크모드 토글 (Light/Dark/System)
│   │   ├── container.tsx         # 최대 너비 래퍼
│   │   └── nav-links.ts          # 네비게이션 링크 데이터 (공유)
│   │
│   ├── theme-provider.tsx        # next-themes ThemeProvider 래퍼
│   ├── counter.tsx               # 카운터 컴포넌트 (Zustand 데모)
│   └── example-form.tsx          # 예시 폼 컴포넌트 (React Hook Form + Zod 데모)
│
├── lib/
│   ├── utils.ts                  # 유틸리티 함수 (cn() 클래스명 병합)
│   └── validations/
│       └── example-form.schema.ts # Zod 검증 스키마
│
└── store/
    └── use-counter-store.ts      # Zustand 상태 관리 스토어
```

## 💻 주요 기능별 참고 파일

### 다크모드 / 테마 전환
- **ThemeProvider**: `src/components/theme-provider.tsx` (next-themes 래퍼)
- **토글 버튼**: `src/components/layout/mode-toggle.tsx`
- **테마 변수**: `src/app/globals.css` (oklch 색상 시스템, `.dark` 클래스 기반)
- **마운트 위치**: `src/app/layout.tsx`의 `<body>` 내부

### 레이아웃 / 구조 컴포넌트
- **헤더**: `src/components/layout/header.tsx` (데스크톱 메뉴 + ModeToggle + 모바일 트리거)
- **모바일 메뉴**: `src/components/layout/mobile-nav.tsx` (Sheet 기반, md 브레이크포인트에서 숨김)
- **푸터**: `src/components/layout/footer.tsx`
- **Container**: `src/components/layout/container.tsx` (최대 너비 래퍼, max-w-6xl)
- **네비게이션 데이터**: `src/components/layout/nav-links.ts` (헤더/모바일/푸터가 공유)

### 상태 관리 (Zustand)
- **파일**: `src/store/use-counter-store.ts`
- **사용 예**: `src/components/counter.tsx`

### 폼 처리 (React Hook Form + Zod)
- **스키마**: `src/lib/validations/example-form.schema.ts`
- **컴포넌트**: `src/components/example-form.tsx`
- **패턴**: Zod 유효성 검사 + 에러 메시지 표시

### UI 컴포넌트 (shadcn/ui)
- **위치**: `src/components/ui/`
- **스타일**: `base-nova` (Radix UI 대신 Base UI 기반)
- **설치**: `npx shadcn@latest add [component-name]`
- **자주 사용하는 컴포넌트** (이번 단계에서 보류, 필요시 즉시 추가 가능):
  - Avatar (사용자 프로필)
  - Badge (상태/태그)
  - Breadcrumb (위치 표시)
  - Alert (경고/정보 메시지)
  - Tabs (탭 네비게이션)
  - Pagination (페이지네이션)

## 🎨 코드 스타일 규칙

- **들여쓰기**: 스페이스 2칸
- **세미콜론**: 사용하지 않음
- **따옴표**: 작은따옴표('')
- **JSDoc**: 함수에 상세한 한국어 주석 포함
- **타입**: `any` 타입 금지 (명시적 타입 지정 필수)
- **네이밍**: camelCase (변수, 함수), PascalCase (컴포넌트)

자동 포맷팅은 `.prettierrc` 설정을 따릅니다.

## 🚀 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm build

# 프로덕션 서버 시작
npm start

# 린트 검사
npm run lint
```

개발 서버는 http://localhost:3000에서 실행됩니다.

## 📖 자주 하는 작업

### 새 shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
```
예: `npx shadcn@latest add select checkbox`

### 새 페이지 추가
1. `src/app/` 하위에 폴더 생성
2. `page.tsx` 파일 작성
3. Next.js App Router가 자동으로 라우팅 설정

### 새 Zustand 스토어 추가
1. `src/store/` 하위에 `use-[feature]-store.ts` 파일 생성
2. `create()` 훅으로 스토어 정의
3. 컴포넌트에서 `use[Feature]Store()` 훅 사용

### 새 Zod 스키마 추가
1. `src/lib/validations/` 하위에 `[feature].schema.ts` 파일 생성
2. `z.object()` 로 스키마 정의
3. `z.infer<typeof schema>` 로 TypeScript 타입 추출

## 🔗 유용한 링크

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트 목록](https://ui.shadcn.com/)
- [Zustand 공식 문서](https://github.com/pmndrs/zustand)
- [React Hook Form 문서](https://react-hook-form.com/)
- [Zod 문서](https://zod.dev/)

## 📝 라이센스

이 스타터킷은 자유롭게 사용할 수 있습니다.
