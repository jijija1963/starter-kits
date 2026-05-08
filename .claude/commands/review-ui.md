---
description: UI/UX 관점에서 컴포넌트 또는 페이지를 상세하게 리뷰합니다
argument-hint: <파일경로> [focus:accessibility|responsive|ux|component]
allowed-tools: [Read, Glob, Grep]
---

# UI/UX 코드 리뷰 커맨드

사용자가 지정한 파일에 대해 UI/UX 관점의 심층 코드 리뷰를 수행합니다.

## 인자 설명

- `<파일경로>` (필수): 리뷰할 파일 경로
  - 예: `src/components/auth/login-form.tsx`
  - 디렉토리도 가능: `src/components/auth/`
- `[focus]` (선택): 집중할 영역
  - `accessibility` - 접근성 중심
  - `responsive` - 반응형 디자인 중심
  - `ux` - UX 패턴 중심
  - `component` - 컴포넌트 구조 중심

## 리뷰 체크리스트

파일을 읽은 후 다음 항목들을 검토합니다:

### 1. 접근성 (Accessibility / a11y)

- [ ] ARIA 속성 적절히 사용 (`aria-label`, `aria-describedby`, `aria-hidden`, `role`)
- [ ] 키보드 네비게이션 가능 (`tabIndex`, `autoFocus`, `onKeyDown`)
- [ ] 이미지에 의미있는 `alt` 텍스트
- [ ] 색상만으로 정보 전달하지 않음 (색상 대비 충분)
- [ ] 버튼 또는 링크에 텍스트 라벨 존재
- [ ] 폼 라벨이 입력 필드와 연결 (`htmlFor`, `id`)
- [ ] 대화형 요소 최소 크기 44x44px 이상
- [ ] 포커스 인디케이터 명확함 (`focus-visible`, `focus-within`)

### 2. 반응형 디자인 (Responsive Design)

- [ ] Tailwind 반응형 프리픽스 사용 (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- [ ] `useIsMobile` 훅으로 모바일 특화 로직 처리
- [ ] 작은 화면에서 텍스트 오버플로우 처리 (`truncate`, `text-wrap`)
- [ ] 모바일에서 터치 대상 충분한 크기 (최소 48px)
- [ ] 이미지 반응형 처리 (`max-w-full`, `h-auto` 또는 `next/image`)
- [ ] 그리드/플렉스 레이아웃 모바일 친화적
- [ ] 가로 스크롤 없음

### 3. UI 일관성 (Design System)

- [ ] shadcn/ui 컴포넌트 재사용 (중복 구현 없음)
- [ ] TailwindCSS CSS 변수 사용 (`from-[var(--color-primary)]` 등)
- [ ] 다크모드 대응 (`dark:` 클래스, `group-dark:`)
- [ ] 폰트 크기 일관성 (`text-sm`, `text-base`, `text-lg` 등)
- [ ] 간격 일관성 (`px-4`, `py-2` 등 설계 시스템)
- [ ] 색상 일관성 (무작정 색상값 사용하지 않음)
- [ ] 컴포넌트 상태 시각화 (정상, 호버, 활성, 비활성, 로딩, 에러)

### 4. UX 패턴 (사용자 경험)

- [ ] 로딩 상태 처리 (Skeleton, Spinner, 또는 disabled 상태)
- [ ] 에러 상태 처리 및 사용자 친화적 에러 메시지
- [ ] 빈 상태(Empty State) 메시지 (데이터 없을 때)
- [ ] 사용자 피드백 (Toast, Alert, 알림)
- [ ] 폼 검증 피드백 (필드별 에러 메시지)
- [ ] 성공/실패 확인 피드백
- [ ] 진행 상황 표시 (다단계 폼, 업로드 진행률)
- [ ] 비활성화된 상태 시각적으로 명확

### 5. 컴포넌트 구조 (Component Design)

- [ ] 컴포넌트 크기 적절 (너무 크면 분리)
- [ ] Props 설계 합리적 (prop drilling 아님)
- [ ] Props 타입 정의 명확 (TypeScript 정의)
- [ ] 기본값(defaultProps) 제공
- [ ] 재사용성 고려
- [ ] 내부 상태 복잡도 낮음
- [ ] 코드 가독성 좋음
- [ ] 메모이제이션 필요시 `React.memo` 또는 `useMemo` 사용

## 리뷰 실행 방식

1. 사용자 지정 파일 읽기
2. 코드 분석
3. 적용 중심 피드백 제공 (구체적인 개선 제안)
4. 우선순위 표시 (중요도: 높음/중간/낮음)
5. 코드 예시 포함

## 예시

```bash
# 접근성 중심 리뷰
/review-ui src/components/ui/button.tsx focus:accessibility

# 반응형 디자인 중심 리뷰
/review-ui src/components/layout/header.tsx focus:responsive

# 전체 리뷰 (기본)
/review-ui src/components/auth/login-form.tsx

# 디렉토리 리뷰
/review-ui src/components/dashboard/ focus:ux
```
