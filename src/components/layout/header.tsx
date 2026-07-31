'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { toast } from 'sonner'

import { ModeToggle } from './mode-toggle'
import { MobileNav } from './mobile-nav'
import { navLinks } from './nav-links'

/**
 * 헤더/네비게이션 바 컴포넌트
 * 로고, 데스크톱 네비게이션, 모드 토글, 모바일 메뉴를 포함합니다.
 * 반응형으로 동작하며, 모바일에서는 데스크톱 메뉴를 숨기고 햄버거 메뉴를 표시합니다.
 * 실제 링크(href가 있는 항목)와 데모 링크(isPlaceholder=true인 항목)를 구분 렌더링합니다.
 * @returns 헤더 컴포넌트
 */
export function Header() {
  /**
   * 데모 링크(플레이스홀더) 클릭 핸들러
   * 사용자에게 이것이 예시 링크임을 안내하는 토스트를 표시합니다.
   * @param label - 메뉴 이름
   */
  const handlePlaceholderClick = (label: string) => {
    toast.info(`"${label}" 메뉴는 데모 링크입니다. 실제 프로젝트에서 연결해주세요.`, {
      position: 'top-center',
    })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg transition-colors hover:text-primary"
          >
            <Zap className="h-6 w-6" />
            <span>StartKit</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              // 데모 링크(href가 null)와 실제 링크를 구분 렌더링
              link.isPlaceholder ? (
                <button
                  key={link.label}
                  onClick={() => handlePlaceholderClick(link.label)}
                  className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href || '/'}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* 우측 영역: 모드 토글 + 모바일 메뉴 */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
