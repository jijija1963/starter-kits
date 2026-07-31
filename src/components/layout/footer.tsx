'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator'
import { navLinks } from './nav-links'

/**
 * 푸터 컴포넌트
 * 네비게이션 링크와 저작권 정보를 표시합니다.
 * 실제 링크와 데모 링크를 구분 렌더링합니다.
 * @returns 푸터 컴포넌트
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  /**
   * 데모 링크(플레이스홀더) 클릭 핸들러
   * 사용자에게 이것이 예시 링크임을 안내하는 토스트를 표시합니다.
   * @param label - 메뉴 이름
   */
  const handlePlaceholderClick = (label: string) => {
    toast.info(`"${label}" 메뉴는 데모 링크입니다. 실제 프로젝트에서 연결해주세요.`, {
      position: 'bottom-center',
    })
  }

  return (
    <footer className="mt-auto border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* 푸터 내용 */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 브랜드 */}
            <div className="space-y-3">
              <h3 className="font-semibold">Next.js 스타터킷</h3>
              <p className="text-sm text-muted-foreground">
                빠르게 웹 개발을 시작하기 위한 완벽한 기초 설정
              </p>
            </div>

            {/* 네비게이션 링크 */}
            <div className="space-y-3">
              <h4 className="font-semibold">링크</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {/* 데모 링크(href가 null)와 실제 링크를 구분 렌더링 */}
                    {link.isPlaceholder ? (
                      <button
                        onClick={() => handlePlaceholderClick(link.label)}
                        className="transition-colors hover:text-primary cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href || '/'}
                        className="transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 기술 스택 */}
            <div className="space-y-3">
              <h4 className="font-semibold">기술</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Next.js 16</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
            </div>

            {/* 추가 정보 */}
            <div className="space-y-3">
              <h4 className="font-semibold">정보</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    Next.js 공식 사이트
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    shadcn/ui
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 구분선 */}
          <Separator className="my-8" />

          {/* 저작권 */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} Next.js 모던 웹 스타터킷. 자유롭게 사용하세요.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
