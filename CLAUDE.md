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
- **Sonner** - Toast 알림 라이브러리

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일 (Tailwind + CSS Variables)
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지 (스타터킷 데모)
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트들
│   ├── counter.tsx        # 카운터 컴포넌트 (Zustand 데모)
│   └── example-form.tsx   # 예시 폼 컴포넌트 (React Hook Form + Zod 데모)
├── lib/
│   ├── utils.ts           # 유틸리티 함수 (cn() 클래스명 병합)
│   └── validations/
│       └── example-form.schema.ts  # Zod 검증 스키마
└── store/
    └── use-counter-store.ts  # Zustand 상태 관리 스토어
```

## 💻 주요 기능별 참고 파일

### 상태 관리 (Zustand)
- **파일**: `src/store/use-counter-store.ts`
- **사용 예**: `src/components/counter.tsx`

### 폼 처리 (React Hook Form + Zod)
- **스키마**: `src/lib/validations/example-form.schema.ts`
- **컴포넌트**: `src/components/example-form.tsx`
- **패턴**: Form 필드 자동 유효성 검사, 타입 안전성 보장

### UI 컴포넌트 (shadcn/ui)
- **위치**: `src/components/ui/`
- **확장**: `npx shadcn@latest add [component-name]`으로 새 컴포넌트 추가 가능

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
