# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# Next.js 모던 웹 스타터킷

이 프로젝트는 빠르게 웹 개발을 시작하기 위해 설정된 최신 기술스택 기반의 스타터킷입니다.

**스타터킷이란?** 새 프로젝트를 시작할 때 필요한 기본 설정(폴더 구조, 라이브러리, 설정 파일 등)이 미리 준비되어 있는 템플릿입니다. 이를 사용하면 개발자는 처음부터 설정하는 번거로움 없이 바로 기능 개발에 집중할 수 있습니다.

## 🛠 기술스택

### 핵심 프레임워크
- **Next.js 16** - React 풀 스택 프레임워크 (App Router)
  - 무엇인가? React 기반의 웹 애플리케이션을 빠르게 만들 수 있는 프레임워크
  - App Router란? Next.js 프로젝트에서 폴더 구조를 기반으로 페이지의 경로(URL)를 자동으로 설정하는 방식
  - 예: `src/app/about/page.tsx` 파일 생성 → `/about` URL로 자동 접속 가능

- **React 19.2.4** - UI 구성 라이브러리
  - 무엇인가? 버튼, 카드, 입력창 등 화면 요소(컴포넌트)를 만들고 관리하는 라이브러리

- **TypeScript** - JavaScript + 타입 검사
  - 무엇인가? 변수, 함수, 객체 등에 "타입"을 명시해서 버그를 미리 찾는 도구
  - 예시:
    ```typescript
    // TypeScript (타입 명시)
    const name: string = 'John'
    const age: number = 30
    age = 'thirty' // ❌ 에러 발생 (number 타입에 문자 할당 불가)
    
    // JavaScript (타입 없음)
    const name = 'John'
    const age = 30
    age = 'thirty' // ✅ 실행되지만 버그 가능성
    ```

### 스타일링
- **Tailwind CSS 4** - 유틸리티 중심 CSS (CSS Variables 기반 테마)
  - 무엇인가? 미리 정의된 클래스를 조합해서 스타일을 빠르게 적용하는 CSS 프레임워크
  - CSS Variables란? 색상, 크기 등을 변수에 저장해 다크모드처럼 한 번에 바꿀 수 있는 기능
  - 예시:
    ```jsx
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      클릭
    </button>
    // 위 클래스들:
    // bg-blue-500 = 배경 파란색
    // text-white = 글자색 흰색
    // px-4 = 좌우 패딩
    // py-2 = 상하 패딩
    // rounded = 모서리 둥글게
    ```

### UI 컴포넌트
- **shadcn/ui** - 접근성 높은 UI 컴포넌트 라이브러리
  - 무엇인가? 버튼, 카드, 대화 상자 등 자주 사용하는 UI 요소가 미리 만들어져 있는 라이브러리
  - 접근성이란? 시각 장애인 등 장애가 있는 사용자도 웹사이트를 쉽게 사용할 수 있도록 만든 것
  - Base UI 기반이란? React 생태계에서 가장 기본적인 UI 라이브러리를 바탕으로 만들었다는 뜻

- **lucide-react** - 아이콘 라이브러리
  - 무엇인가? 검색 아이콘, 메뉴 아이콘, 별 아이콘 등을 쉽게 사용할 수 있는 라이브러리
  - 사용 예: `<Search />`, `<Menu />`, `<Star />`

### 상태 관리 및 폼 처리
- **Zustand** - 간단하고 가벼운 전역 상태 관리
  - 무엇인가? 앱 전체에서 필요한 데이터(사용자 정보, 테마, 알림 등)를 한 곳에서 관리하는 도구
  - 전역이란? 모든 컴포넌트에서 접근 가능하다는 뜻
  - 예: 사용자가 로그인하면 모든 페이지에서 사용자 정보에 접근할 수 있음

- **React Hook Form** - 유연하고 성능 좋은 폼 관리
  - 무엇인가? 로그인 폼, 회원가입 폼 등 사용자 입력을 효율적으로 처리하는 라이브러리
  - 폼이란? 사용자로부터 이름, 이메일, 비밀번호 등을 입력받는 화면 요소

- **Zod** - TypeScript 우선의 스키마 검증 라이브러리
  - 무엇인가? 사용자가 입력한 데이터가 올바른 형식인지 확인하는 도구
  - 예시:
    ```typescript
    const schema = z.object({
      email: z.string().email('올바른 이메일을 입력하세요'),
      age: z.number().min(18, '18세 이상이어야 합니다')
    })
    // email이 이메일 형식이 아니면 ❌ 에러
    // age가 18 미만이면 ❌ 에러
    ```

### 알림 및 테마
- **Sonner** - Toast 알림 라이브러리 (다크모드 대응)
  - 무엇인가? 화면 우측 하단에 뜨는 성공/에러 알림 메시지 표시
  - Toast란? 빵이 구워질 때 튀어나오는 모습처럼, 화면에 잠깐 나타났다 사라지는 알림
  - 예: "저장 완료" 알림, "네트워크 오류" 알림

- **next-themes** - 다크모드/라이트모드 상태 관리
  - 무엇인가? 사용자가 선택한 테마(밝은 모드/어두운 모드)를 저장하고 적용하는 도구
  - 예: 사용자가 "어두운 모드" 버튼을 클릭하면, 모든 페이지가 어두운 색으로 변함

## 📁 프로젝트 구조

프로젝트의 폴더 구조는 **기능과 레이어(계층)** 별로 정리되어 있습니다. 이렇게 정리하면 코드를 찾기 쉽고, 각 파일의 역할이 명확해집니다.

```
src/
├── app/                           # Next.js의 페이지와 레이아웃
│   ├── globals.css               # 전체 사이트에 적용되는 기본 스타일
│   │                             # (Tailwind CSS + CSS Variables로 테마 관리)
│   ├── layout.tsx                # 모든 페이지의 기본 구조
│   │                             # (헤더, 본문, 푸터, 테마 제공자 포함)
│   └── page.tsx                  # 홈페이지 (http://localhost:3000/)
│                                 # (Hero 섹션 + 기술스택 소개 + 데모 컴포넌트)
│
├── components/                   # UI 컴포넌트들 (재사용 가능한 조각들)
│   │
│   ├── ui/                       # Layer 1: 기본 UI 요소 (shadcn/ui 컴포넌트)
│   │ └─ 무엇인가? 버튼, 카드 같은 가장 기본적인 UI 요소들
│   │ └─ 특징: 다른 컴포넌트에 포함되어 사용됨 (독립적으로 사용 X)
│   │   ├── button.tsx            # 버튼 컴포넌트
│   │   ├── card.tsx              # 카드 컴포넌트 (내용을 담는 상자)
│   │   ├── dialog.tsx            # 모달 대화 상자
│   │   ├── dropdown-menu.tsx    # 드롭다운 메뉴 (선택 옵션)
│   │   ├── input.tsx             # 텍스트 입력 필드
│   │   ├── label.tsx             # 입력 필드의 라벨 (예: "이름:")
│   │   ├── navigation-menu.tsx   # 데스크톱 네비게이션 메뉴
│   │   ├── sheet.tsx             # 모바일 슬라이드 메뉴
│   │   ├── separator.tsx         # 구분선 (요소들 사이에 사용)
│   │   └── sonner.tsx            # 토스트 알림 (성공/에러 메시지)
│   │
│   ├── layout/                   # Layer 2: 페이지 구조 컴포넌트
│   │ └─ 무엇인가? 모든 페이지에 반복되는 구조 (헤더, 푸터 등)
│   │ └─ 특징: UI 컴포넌트들을 조합해서 만들어짐
│   │   ├── header.tsx            # 헤더 (로고 + 네비게이션 + 다크모드 토글)
│   │   ├── footer.tsx            # 푸터 (페이지 하단의 정보)
│   │   ├── mobile-nav.tsx        # 모바일 화면용 메뉴 (Sheet 기반)
│   │   │                         # Sheet란? 모바일에서 옆에서 밀려나오는 메뉴
│   │   ├── mode-toggle.tsx       # 다크모드 토글 버튼 (Light/Dark/System)
│   │   ├── container.tsx         # 최대 너비 래퍼
│   │   │                         # 래퍼란? 내용을 감싸서 너비를 제한하는 것
│   │   │                         # 예: 데스크톱에서 너무 넓어지지 않도록 조절
│   │   └── nav-links.ts          # 네비게이션 링크 데이터 (공유)
│   │                             # (헤더, 모바일 메뉴, 푸터에서 모두 사용)
│   │
│   ├── theme-provider.tsx        # next-themes의 테마 제공자 래퍼
│   │                             # 제공자란? 자식 컴포넌트들에게 테마 정보를 전달하는 역할
│   │
│   ├── counter.tsx               # 카운터 컴포넌트 (Zustand 상태 관리 데모)
│   │                             # 무엇인가? +, - 버튼으로 숫자를 증가/감소시키는 예제
│   │
│   └── example-form.tsx          # 예시 폼 컴포넌트
│                                 # (React Hook Form + Zod 검증 데모)
│
├── lib/                          # 유틸리티 함수와 공통 코드
│   │                             # (컴포넌트가 아닌 순수 로직들)
│   ├── utils.ts                  # 유틸리티 함수
│   │                             # cn() 함수: 클래스명을 조건부로 병합
│   │                             # 예: cn('text-lg', isBig && 'text-xl')
│   │
│   └── validations/              # 데이터 검증 스키마들
│       └── example-form.schema.ts # Zod 검증 스키마
│                                 # (폼 입력이 올바른 형식인지 확인)
│
└── store/                        # 전역 상태 관리 (Zustand)
    │                             # 무엇인가? 앱 전체에서 필요한 데이터를 한 곳에서 관리
    │                             # 예: 사용자 정보, 테마, 로그인 상태 등
    └── use-counter-store.ts      # 카운터 상태 저장소 (예제)
                                  # 호출: const { count, increment } = useCounterStore()
```

### 폴더 구조의 계층 이해

```
UI 계층: button.tsx (가장 기본)
   ↓
Layout 계층: header.tsx (button 포함)
   ↓
Page 계층: page.tsx (header 포함)
```

예시: 버튼을 클릭했을 때의 흐름
1. `button.tsx` - 버튼 컴포넌트 (클릭 가능)
2. `header.tsx` - 헤더에 버튼 포함
3. `page.tsx` - 페이지에 헤더 포함
4. `layout.tsx` - 모든 페이지에 레이아웃 적용

## 💻 주요 기능별 참고 파일

### 다크모드 / 테마 전환
프로젝트는 **다크모드**와 **라이트모드**를 지원합니다. 사용자가 토글 버튼으로 테마를 선택하면, 전체 사이트의 색상이 바뀝니다.

**작동 원리:**
1. `src/app/globals.css` - CSS 변수로 색상 정의 (밝은 색, 어두운 색 모두)
2. `src/components/theme-provider.tsx` - next-themes를 사용해 테마 상태 관리
3. `src/components/layout/mode-toggle.tsx` - 사용자가 테마를 선택하는 버튼
4. `src/app/layout.tsx` - `<body>` 내부에서 테마 제공자 실행

**CSS Variables란?** 색상, 크기 등을 변수에 저장해 놨다가 한 번에 바꿀 수 있는 기능
```css
/* 라이트모드 (밝은 배경) */
:root {
  --background: #ffffff; /* 흰색 배경 */
  --foreground: #000000; /* 검은색 글자 */
}

/* 다크모드 (어두운 배경) */
.dark {
  --background: #000000; /* 검은색 배경 */
  --foreground: #ffffff; /* 흰색 글자 */
}

/* 사용할 때 */
body {
  background-color: var(--background); /* 클래스에 따라 색이 자동 변경 */
}
```

**oklch 색상 시스템이란?** 인간의 눈으로 인지하는 색상 변화를 더 정확히 표현하는 색상 모델입니다.

### 레이아웃 / 구조 컴포넌트
모든 페이지에 동일하게 나타나는 구조입니다.

- **헤더** (`src/components/layout/header.tsx`)
  - 무엇을 포함? 로고 + 네비게이션 메뉴 + 다크모드 토글 버튼
  - 데스크톱: 가로로 펼쳐진 메뉴 (navigation-menu.tsx)
  - 모바일: 햄버거 버튼 (mobile-nav.tsx)

- **모바일 메뉴** (`src/components/layout/mobile-nav.tsx`)
  - 언제 나타남? 화면 너비가 md(중간) 이하일 때만
  - md 브레이크포인트란? Tailwind CSS에서 정의한 화면 크기 기준 (768px)
  - 어떻게 작동? Sheet 컴포넌트 사용 (옆에서 밀려나오는 메뉴)

- **푸터** (`src/components/layout/footer.tsx`)
  - 페이지 하단에 고정되어 있는 정보 영역

- **Container** (`src/components/layout/container.tsx`)
  - 무엇인가? 내용의 최대 너비를 조절하는 래퍼
  - 왜 필요? 초대형 모니터에서 텍스트가 너무 넓어지지 않도록 제한 (max-w-6xl = 최대 너비 1536px)
  - 예시:
    ```jsx
    <Container>
      {/* 이 안의 내용은 최대 너비 1536px로 제한됨 */}
    </Container>
    ```

- **네비게이션 데이터** (`src/components/layout/nav-links.ts`)
  - 무엇인가? 메뉴에 표시되는 링크들이 저장된 파일 (배열 형태)
  - 왜 분리? 헤더, 모바일 메뉴, 푸터에서 모두 동일한 메뉴를 사용하기 때문
  - 한 곳에서만 수정하면 모든 곳에 반영됨 (효율성 증대)
  - 예시:
    ```typescript
    export const navLinks = [
      { label: '홈', href: '/' },
      { label: '소개', href: '/about' }
    ]
    // header.tsx, mobile-nav.tsx, footer.tsx에서 모두 사용
    ```

### 상태 관리 (Zustand)
**상태란?** 앱의 데이터 중 시간이 지나면서 변하는 정보 (사용자 정보, 장바구니, 로그인 상태 등)

**왜 전역 상태 관리가 필요?** 
- Props drilling 문제 해결
- Props drilling란? 깊게 중첩된 컴포넌트들에서 데이터를 계속 전달하는 번거로움

```
// Props drilling 없이 (Zustand 사용)
App
├── Header: useCounterStore() → count 직접 접근 ✅
├── Main: useCounterStore() → count 직접 접근 ✅
└── Footer: useCounterStore() → count 직접 접근 ✅

// Props drilling이 있을 때 (Zustand 미사용)
App → Header (count props 전달) → Menu (count props 전달)
→ MenuItem (count props 전달) → Counter (count 사용)
// 번거로움 ❌
```

- **파일**: `src/store/use-counter-store.ts`
- **사용 예**: `src/components/counter.tsx`
- **사용 방법**:
  ```typescript
  const store = useCounterStore()
  // store.count - 현재 값
  // store.increment() - 증가 함수
  // store.decrement() - 감소 함수
  ```

### 폼 처리 (React Hook Form + Zod)
사용자로부터 정보를 입력받아야 할 때 사용합니다 (로그인, 회원가입, 검색 등).

**두 라이브러리의 역할:**
- **React Hook Form**: 입력 필드의 값을 효율적으로 관리 (입력/변경/제출 처리)
- **Zod**: 입력된 데이터가 올바른 형식인지 검증 (이메일 형식, 비밀번호 길이 등)

- **스키마**: `src/lib/validations/example-form.schema.ts`
  - 스키마란? 데이터가 어떤 형태여야 하는지 정의한 규칙
  - 예시:
    ```typescript
    const schema = z.object({
      email: z.string().email('이메일 형식이 아닙니다'),
      password: z.string().min(8, '8자 이상이어야 합니다')
    })
    ```

- **컴포넌트**: `src/components/example-form.tsx`
- **패턴**: Zod 검증 후 에러 메시지 표시
  ```typescript
  // 사용자가 제출 → Zod 검증 → 통과하면 저장, 실패하면 에러 메시지 표시
  ```

### UI 컴포넌트 (shadcn/ui)

**shadcn/ui란?** 
- 버튼, 카드, 입력창 등 자주 사용하는 UI 요소를 이미 완성된 상태로 제공
- Base UI 기반: 가장 기본적인 React UI 라이브러리를 바탕으로 만듦
- 접근성 포함: 시각 장애인, 키보드 사용자 등도 쉽게 사용할 수 있도록 설계

**위치**: `src/components/ui/`

**새 컴포넌트 추가하기**:
```bash
# Avatar 컴포넌트 추가
npx shadcn@latest add avatar

# 여러 개 한 번에 추가
npx shadcn@latest add select checkbox badge
```

**자주 사용하는 컴포넌트** (필요시 즉시 추가 가능):
- **Avatar** - 사용자 프로필 사진을 원형으로 표시
- **Badge** - 상태나 태그를 표시 (예: "NEW", "HOT")
- **Breadcrumb** - 현재 위치 표시 (예: 홈 > 제품 > 상세)
- **Alert** - 경고나 정보 메시지 표시
- **Tabs** - 여러 탭으로 내용 구분 (예: 상품 설명, 리뷰, Q&A)
- **Pagination** - 페이지 번호 표시 (게시글 목록 등)

## 🎨 코드 스타일 규칙

이 프로젝트의 모든 코드는 일관된 스타일을 유지합니다. 아래 규칙을 따르세요.

### 포맷팅
- **들여쓰기**: 스페이스 2칸 (탭 사용 금지)
  - `.prettierrc` 파일에서 자동으로 적용됨
  - IDE에서 저장 시 자동 포맷팅됨

- **세미콜론**: 사용하지 않음
  - ❌ `const name = 'John';`
  - ✅ `const name = 'John'`

- **따옴표**: 작은따옴표('') 사용
  - ❌ `const message = "Hello"`
  - ✅ `const message = 'Hello'`

### 주석과 문서화
- **JSDoc**: 함수에는 반드시 상세한 한국어 주석 포함
  - JSDoc이란? 함수의 목적, 입력값, 출력값, 사용 예시를 표준 형식으로 작성
  - 예시:
    ```typescript
    /**
     * 두 숫자를 더하는 함수
     * @param {number} a - 첫 번째 숫자
     * @param {number} b - 두 번째 숫자
     * @returns {number} 두 숫자의 합
     * @example
     * add(2, 3) // 5
     */
    function add(a: number, b: number): number {
      return a + b
    }
    ```

- **인라인 주석**: 복잡한 로직에는 한 줄 주석 추가
  - 예시:
    ```typescript
    // 사용자 정보가 없으면 기본값으로 초기화
    if (!user) {
      setUser(defaultUser)
    }
    ```

### 타입 안전성
- **`any` 타입 금지** - 명시적 타입 지정 필수
  - `any` 타입을 사용하면 TypeScript의 타입 검사 기능이 무의미해짐
  - ❌ `const data: any = fetchData()`
  - ✅ `const data: User[] = fetchData()`
  - 타입을 모르는 경우: `unknown` 사용 후 타입 가드로 검사
    ```typescript
    const data: unknown = JSON.parse(jsonString)
    if (typeof data === 'object' && data !== null) {
      console.log((data as Record<string, unknown>).name)
    }
    ```

### 네이밍 컨벤션
- **camelCase (변수, 함수)**
  - 첫 글자는 소문자, 다음 단어의 첫 글자는 대문자
  - 예: `userName`, `calculateTotal`, `isActive`
  - ❌ `user_name`, `UserName`
  - ✅ `userName`

- **PascalCase (컴포넌트, 클래스)**
  - 모든 단어의 첫 글자를 대문자
  - 예: `UserProfile`, `HeaderComponent`, `DataTable`
  - ❌ `userProfile`, `header-component`
  - ✅ `UserProfile`, `HeaderComponent`

- **CONSTANT_CASE (상수)**
  - 모든 글자를 대문자, 단어는 언더스코어로 구분
  - 예: `MAX_RETRY_COUNT`, `DEFAULT_TIMEOUT`
  - ❌ `maxRetryCount` (상수인데 camelCase)
  - ✅ `MAX_RETRY_COUNT`

### 자동 포맷팅
`.prettierrc` 파일에서 아래 설정을 사용합니다:
- `semi: false` - 세미콜론 제거
- `singleQuote: true` - 작은따옴표 사용
- `tabWidth: 2` - 들여쓰기 2칸
- `printWidth: 100` - 한 줄 최대 100자 (넘으면 줄바꿈)

**IDE 설정**: VS Code나 WebStorm에서 저장 시 자동으로 포맷팅되도록 설정

## 🚀 시작하기

### 프로젝트 설정

**1단계: 의존성 설치**
```bash
npm install
```
- 무엇을 하나? `package.json` 파일에 listed된 모든 라이브러리(Next.js, React, Tailwind CSS 등)를 다운로드
- 결과? `node_modules` 폴더가 생성되고, 프로젝트를 실행할 수 있는 준비 완료

### 개발 중에 사용하는 명령어

**2단계: 개발 서버 시작**
```bash
npm run dev
```
- 무엇을 하나? 로컬 개발 서버를 실행 (코드 변경 시 자동 새로고침)
- 어디서 보나? http://localhost:3000 을 브라우저에서 열기
- 서버 중지? 터미널에서 `Ctrl+C` 누르기

**코드 수정하고 즉시 확인하기**
- 파일 저장 → 브라우저 자동 새로고침 (자동 이루어짐)
- 예: `src/app/page.tsx` 수정 후 저장 → 즉시 브라우저에 반영

**린트 검사** (실시간으로 코드 품질 확인)
```bash
npm run lint
```
- 무엇을 하나? ESLint가 코드의 스타일 오류, 사용하지 않은 변수, 잠재적 버그 등을 찾아냄
- 언제 사용? 커밋 전에 반드시 확인 (불필요한 코드 제거 등)

### 배포 전에 사용하는 명령어

**3단계: 빌드** (배포 준비)
```bash
npm run build
```
- 무엇을 하나? 개발 코드를 프로덕션에 최적화된 형태로 변환
  - 코드 최소화 (공백 제거, 변수명 축약)
  - 불필요한 코드 제거
  - 성능 최적화
- 결과? `.next` 폴더에 빌드된 파일들이 생성됨
- 얼마나 걸림? 프로젝트 크기에 따라 다름 (보통 수십 초)

**4단계: 프로덕션 서버 시작**
```bash
npm start
```
- 무엇을 하나? 빌드된 프로젝트를 실제 운영 환경처럼 실행
- 언제 사용? 배포 전에 실제 운영 환경과 동일한 상태에서 테스트할 때
- 주의: `npm run dev`와 달리 코드 변경 시 새로고침 안 됨 (다시 빌드 필요)

### 명령어 요약

| 명령어 | 용도 | 언제 사용 |
|--------|------|---------|
| `npm install` | 라이브러리 설치 | 프로젝트 시작 시 한 번 |
| `npm run dev` | 개발 서버 시작 | 개발 중 코드 수정하며 테스트 |
| `npm run lint` | 코드 검사 | 코드 품질 확인, 커밋 전 |
| `npm run build` | 배포용 빌드 | 배포 전 성능 최적화 |
| `npm start` | 프로덕션 서버 시작 | 빌드 후 실제 환경 테스트 |

## 📖 자주 하는 작업

### 새 shadcn/ui 컴포넌트 추가

**상황**: UI 라이브러리에서 원하는 컴포넌트(예: 선택 드롭다운, 체크박스)를 프로젝트에 추가하고 싶을 때

**방법**:
```bash
# 단일 컴포넌트 추가
npx shadcn@latest add select

# 여러 개 한 번에 추가
npx shadcn@latest add select checkbox badge
```

**무엇이 일어나나?**
1. shadcn/ui 웹사이트에서 컴포넌트 코드 다운로드
2. `src/components/ui/` 폴더에 파일 생성
3. `tailwind.config.js` 자동 업데이트 (필요한 색상 추가)

**예시 - Select 컴포넌트 추가 후 사용**:
```typescript
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ProductFilter() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="카테고리 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="electronics">전자제품</SelectItem>
        <SelectItem value="fashion">패션</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### 새 페이지 추가

**상황**: 새로운 URL 경로(예: /about, /products)에 페이지를 추가하고 싶을 때

**Next.js App Router의 폴더 구조 = URL 경로**

**예시 1: 단순 페이지 추가** (`/products` URL 만들기)
```
src/app/
├── page.tsx          # http://localhost:3000/
├── layout.tsx
└── products/
    └── page.tsx      # http://localhost:3000/products ← 새 페이지
```

**Step-by-step**:
1. `src/app/products/` 폴더 생성
2. `src/app/products/page.tsx` 파일 생성
3. 컴포넌트 코드 작성:
   ```typescript
   export default function ProductsPage() {
     return (
       <div>
         <h1>상품 목록</h1>
         {/* 상품들 표시 */}
       </div>
     )
   }
   ```
4. `http://localhost:3000/products` 에서 확인

**예시 2: 동적 페이지 추가** (`/products/123` 같은 ID별 상세 페이지)
```
src/app/
└── products/
    ├── page.tsx           # 상품 목록 페이지
    └── [id]/
        └── page.tsx       # 상품 상세 페이지 (예: /products/123)
```

`[id]` 폴더의 `page.tsx`:
```typescript
/**
 * 상품 상세 페이지
 * URL 파라미터로 상품 ID를 받아서 해당 상품 정보 표시
 */
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>상품 #{params.id} 상세 정보</h1>
    </div>
  )
}
```

### 새 Zustand 스토어 추가 (전역 상태 관리)

**상황**: 앱 전체에서 공유하는 데이터(사용자 정보, 장바구니, 필터 등)를 관리하고 싶을 때

**Step-by-step**:

**1단계: 스토어 파일 생성**
`src/store/use-auth-store.ts`:
```typescript
import { create } from 'zustand'

/**
 * 사용자 인증 상태를 관리하는 Zustand 스토어
 * 
 * 상태: 로그인 여부, 사용자 정보
 * 메서드: 로그인, 로그아웃
 */
interface AuthState {
  isLoggedIn: boolean
  user: { id: string; name: string } | null
  login: (name: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  
  login: (name: string) =>
    set({
      isLoggedIn: true,
      user: { id: '1', name },
    }),
  
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
    }),
}))
```

**2단계: 컴포넌트에서 사용**
```typescript
/**
 * 사용자 정보를 표시하고 로그인/로그아웃 버튼을 제공하는 컴포넌트
 */
export function UserProfile() {
  // 스토어에서 상태와 메서드를 가져옴
  const { isLoggedIn, user, login, logout } = useAuthStore()

  if (!isLoggedIn) {
    return <button onClick={() => login('John')}>로그인</button>
  }

  return (
    <div>
      <p>안녕하세요, {user?.name}님!</p>
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}
```

**어디서나 접근 가능**:
```typescript
// Header 컴포넌트
const { isLoggedIn } = useAuthStore()

// Sidebar 컴포넌트
const { user } = useAuthStore()

// Profile 페이지
const { logout } = useAuthStore()

// 모두 같은 스토어의 데이터에 접근 ✅
```

### 새 Zod 스키마 추가 (데이터 검증)

**상황**: 사용자 입력 데이터(폼)가 올바른 형식인지 검증하고 싶을 때

**Step-by-step**:

**1단계: 검증 스키마 파일 생성**
`src/lib/validations/login.schema.ts`:
```typescript
import { z } from 'zod'

/**
 * 로그인 폼 검증 스키마
 * 
 * 규칙:
 * - email: 필수, 이메일 형식
 * - password: 필수, 8자 이상
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email('올바른 이메일을 입력하세요'),
  
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다')
    .regex(/[A-Z]/, '대문자를 포함해야 합니다')
    .regex(/[0-9]/, '숫자를 포함해야 합니다'),
})

// TypeScript 타입 자동 생성
export type LoginFormData = z.infer<typeof loginSchema>
```

**2단계: 폼 컴포넌트에서 사용**
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '@/lib/validations/login.schema'

/**
 * 로그인 폼 컴포넌트
 * 
 * React Hook Form: 입력 필드 값 관리
 * Zod: 입력 데이터 검증
 */
export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), // Zod 검증 연결
  })

  const onSubmit = (data: LoginFormData) => {
    // 여기까지 오면 검증 통과한 데이터
    console.log('로그인 시도:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        placeholder="이메일"
      />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        {...register('password')}
        type="password"
        placeholder="비밀번호"
      />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">로그인</button>
    </form>
  )
}
```

**검증 과정**:
```
사용자 입력 → React Hook Form (값 관리) → Zod (검증)
           ↓ 검증 실패
        에러 메시지 표시
           ↓ 검증 성공
        onSubmit 실행
```

## ⚠️ Next.js 16의 주의사항

**중요**: 이 프로젝트는 Next.js 16을 사용하는데, 이전 버전의 Next.js와 **큰 변화**가 있을 수 있습니다.

**변화 예시**:
- API 변경: 예전 방식으로 쓴 코드가 작동 안 할 수 있음
- 폴더 구조 변경: App Router 방식이 Pages Router와 다름
- 설정 파일 변경: `next.config.js` 등의 옵션이 달라질 수 있음

**대처 방법**:
- 공식 마이그레이션 가이드 확인: `node_modules/next/dist/docs/`
- 새로 배우는 기능이라면 공식 문서 먼저 읽기
- 에러 메시지가 나면 "deprecation notice"(폐기 예정 알림) 확인

## 🔗 공식 문서 및 리소스

### 프레임워크 및 언어
- **[Next.js 공식 문서](https://nextjs.org/docs)** - Next.js 사용법, API 참고
- **[TypeScript 핸드북](https://www.typescriptlang.org/docs/)** - TypeScript 타입 시스템 학습
- **[React 공식 문서](https://react.dev)** - React 컴포넌트, 훅 학습

### 스타일링
- **[Tailwind CSS 문서](https://tailwindcss.com/docs)** - 유틸리티 클래스 검색, 반응형 설정
- **[shadcn/ui 컴포넌트 목록](https://ui.shadcn.com/)** - 사용 가능한 UI 컴포넌트 보기

### 상태 관리 및 폼
- **[Zustand 공식 문서](https://github.com/pmndrs/zustand)** - 전역 상태 관리 방법
- **[React Hook Form 문서](https://react-hook-form.com/)** - 폼 입력 관리
- **[Zod 문서](https://zod.dev/)** - 데이터 검증 방법

### 학습 경로 (초보자용)
1. React 기본 개념 학습 (JSX, 컴포넌트, 훅)
2. TypeScript 기초 (타입 지정, 인터페이스)
3. Tailwind CSS (클래스 이름, 반응형)
4. Next.js 라우팅 (폴더 구조, 동적 라우트)
5. 상태 관리 (Zustand)
6. 폼 처리 (React Hook Form + Zod)

## 🔧 Base UI의 render prop 패턴

이 프로젝트는 **Base UI** (shadcn/ui의 기반)를 사용하며, UI 컴포넌트를 구성할 때 중요한 패턴이 있습니다.

### 문제: 중첩된 버튼 태그

Base UI의 Trigger나 Close 같은 컴포넌트는 기본적으로 `<button>` 태그를 렌더링합니다. 이 안에 다른 `<button>`을 만드는 Button 컴포넌트를 넣으면 `<button><button>...</button></button>` 구조가 생겨 **React Hydration 오류**가 발생합니다.

```tsx
// ❌ 잘못된 예 (중첩된 버튼)
<DropdownMenuTrigger>
  <Button variant="outline" size="icon">
    <Sun />
  </Button>
</DropdownMenuTrigger>

// HTML 결과: <button><button>...</button></button> ← 오류!
```

### 해결책: render prop 사용

Base UI 컴포넌트의 `render` prop에 Button을 전달하면, Trigger가 자신의 `<button>` 대신 Button이 만드는 `<button>`을 사용하므로 중첩이 해결됩니다.

```tsx
// ✅ 올바른 방법 (render prop 사용)
<DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
  <Sun />
</DropdownMenuTrigger>

// HTML 결과: <button>...</button> ← 하나의 버튼만 생성!
```

**적용 위치:**
- `DropdownMenuTrigger` (다크모드 토글 버튼) - `src/components/layout/mode-toggle.tsx`
- `SheetTrigger` (모바일 메뉴 버튼) - `src/components/layout/mobile-nav.tsx`
- `DialogPrimitive.Close` (모달 닫기 버튼) - `src/components/ui/dialog.tsx`

**핵심:**
- Trigger/Close/Button 같은 Base UI 프리미티브 안에 다른 Button을 넣어야 할 때 무조건 `render` prop 사용
- `render` prop은 "내가 전달한 컴포넌트가 만드는 DOM 엘리먼트를 직접 사용해"라는 뜻

## 🧪 Playwright MCP로 오류 수집 및 분석

개발 중 React Hydration 오류나 콘솔 에러를 빠르게 수집하고 분석할 때 **Playwright MCP**를 사용할 수 있습니다.

### 기본 사용 방법

```typescript
// 페이지 접속
await page.goto('http://localhost:3000')

// 콘솔 메시지 확인 (에러, 경고, 로그)
// Snapshot의 "Console" 섹션에서 확인 가능

// 콘솔 에러만 추출
// "Page URL: ..." 뒤의 "Console: X errors, Y warnings" 확인
```

### 오류 추적 흐름

1. **수집 단계**: 페이지 접속 → 콘솔 로그 기록
2. **분석 단계**: 에러 메시지와 스택트레이스 분석 → 원인 컴포넌트 식별
3. **해결 단계**: 코드 수정
4. **검증 단계**: 페이지 재접속 → 콘솔 에러 0건 확인

### 실제 사례: React Hydration 오류 해결

**문제**: 다크모드 토글 버튼에서 Hydration 오류 4건 발생
```
1. In HTML, <button> cannot be a descendant of <button>.
2. <button> cannot contain a nested <button>.
3. Encountered a script tag while rendering React component.
4. Error: Hydration failed because the server rendered HTML didn't match the client.
```

**분석**: 콘솔 스택트레이스에서 `ModeToggle > DropdownMenuTrigger > Button` 트리 확인
→ Button(렌더링) 안에 Button(렌더링)이 중첩되는 구조 발견

**해결**: `render` prop 패턴 적용
```tsx
<DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
  <Sun />
</DropdownMenuTrigger>
```

**결과**: 콘솔 에러 4건 → 0건 (Hydration mismatch 해결)

## 📋 Git 워크플로우 및 커밋 규칙

### 커밋 메시지 형식

이 프로젝트는 **관습적 커밋(Conventional Commits)** 형식을 사용합니다.

```
<타입>: <설명>

<본문 (선택사항)>
```

**타입:**
- `feat:` - 새로운 기능 추가
- `fix:` - 버그 수정
- `refactor:` - 기능 변경 없이 코드 구조 개선
- `style:` - 코드 스타일 수정 (포맷팅, 세미콜론 등)
- `docs:` - 문서 추가/수정
- `chore:` - 빌드 설정, 의존성 등 (사용자 보이지 않는 변경)
- `test:` - 테스트 코드 추가/수정

**예시:**
```
feat: 사용자 인증 기능 추가

- 로그인 폼 UI 구현
- JWT 토큰 생성/검증 로직
- 보호된 라우트 구현

fix: React Hydration 오류 해결 - 중첩된 button 태그 제거

원인: ModeToggle에서 DropdownMenuTrigger 안에 Button 중첩
해결: render prop 패턴 사용
```

### 브랜치 전략

- `main` - 배포 준비된 코드 (보호된 브랜치)
- `feature/기능명` - 새 기능 개발
- `fix/버그명` - 버그 수정
- `refactor/대상` - 코드 리팩토링

**예시:**
```bash
git checkout -b feature/dark-mode
git checkout -b fix/hydration-error
```

### 커밋하기 전 확인사항

1. **린트 검사**: `npm run lint` (타입/스타일 오류 없는지)
2. **빌드 테스트**: `npm run build` (배포 가능한 상태인지)
3. **로컬 테스트**: `npm run dev` (UI 동작 확인)
4. **불필요한 파일 확인**: `.env`, 로그 파일, `node_modules` 등이 포함 안 되었는지

## 🐛 개발 중 일반적인 문제 해결

### 콘솔에 Hydration 오류가 나타남

**원인:** 서버 렌더링 HTML과 클라이언트 렌더링 HTML이 다름

**확인 사항:**
- `<button>` 안에 `<button>`이 중첩되지 않았는지 (특히 Base UI Trigger)
- 클라이언트에서만 실행되는 코드 (Math.random(), Date.now())가 서버 렌더링에 포함되지 않았는지
- 동적 import나 조건부 렌더링이 올바르게 구현되었는지

**해결:**
1. Playwright MCP로 콘솔 메시지 확인
2. 스택트레이스에서 문제 컴포넌트 식별
3. `render` prop 패턴 또는 `suppressHydrationWarning` 적용

### 개발 서버가 자동 새로고침이 안 됨

**해결:**
```bash
# 개발 서버 재시작
npm run dev

# 또는 npm 캐시 초기화 후 재시작
npm cache clean --force
rm -rf .next node_modules
npm install
npm run dev
```

### 새 컴포넌트가 타입 에러로 인식되지 않음

**원인:** TypeScript가 파일 변경을 감지하지 못함

**해결:**
```bash
# IDE 재시작 또는 명령어 실행
npm run lint

# .next 폴더 삭제 후 재빌드
rm -rf .next
npm run dev
```

### Tailwind CSS 클래스가 적용 안 됨

**원인:** 클래스명이 동적으로 생성되거나, `tailwind.config.js`에 경로가 제대로 설정 안 됨

**확인:**
```typescript
// ❌ 잘못된 방법 (동적 클래스)
const color = 'blue'
<div className={`bg-${color}-500`}>...</div>

// ✅ 올바른 방법 (사전 정의)
<div className={color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}>...</div>
```

## 📝 라이센스 및 자유로운 사용

이 스타터킷은 자유롭게 사용, 수정, 배포할 수 있습니다. 어떤 제약도 없습니다.
