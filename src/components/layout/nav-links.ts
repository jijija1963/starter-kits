/**
 * 네비게이션 링크 데이터
 * 헤더, 모바일 메뉴, 푸터에서 공유됩니다.
 * 중복 코드를 방지하고, 하나의 소스만 수정하면 모든 곳에 반영됩니다.
 *
 * @property label - 메뉴 텍스트
 * @property href - 링크 경로 (null이면 데모 링크로, 클릭 시 토스트 메시지 표시)
 * @property isPlaceholder - 데모용 빈 링크인지 여부 (true면 실제 이동 없음)
 */
export interface NavLink {
  label: string
  href?: string | null
  isPlaceholder?: boolean
}

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
