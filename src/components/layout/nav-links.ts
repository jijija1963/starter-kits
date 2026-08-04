/**
 * 네비게이션 링크 타입
 * 헤더, 모바일 메뉴, 푸터에서 공유됩니다.
 * 중복 코드를 방지하고, 하나의 소스만 수정하면 모든 곳에 반영됩니다.
 *
 * "실제 링크": href가 string인 경우 (isPlaceholder는 false이거나 생략)
 * "데모 링크": isPlaceholder가 true인 경우 (href는 null 또는 생략)
 */
export type NavLink =
  | { label: string; href: string; isPlaceholder?: false }
  | { label: string; href?: null; isPlaceholder: true }

export const navLinks: NavLink[] = [
  {
    label: '홈',
    href: '/',
    isPlaceholder: false,
  },
  {
    label: '문서',
    href: null,
    isPlaceholder: true,
  },
  {
    label: '예시',
    href: '/examples',
    isPlaceholder: false,
  },
  {
    label: '연락',
    href: null,
    isPlaceholder: true,
  },
]
