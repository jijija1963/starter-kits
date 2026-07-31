import { ReactNode } from 'react'

/**
 * 컨테이너 컴포넌트
 * 최대 너비와 좌우 패딩을 통일하는 래퍼입니다.
 * 모든 페이지 콘텐츠의 너비를 일관되게 유지합니다.
 * @param children - 래핑할 콘텐츠
 * @returns 컨테이너 컴포넌트
 */
export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
