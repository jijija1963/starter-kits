import Link from 'next/link'
import { Zap } from 'lucide-react'

import { ModeToggle } from './mode-toggle'
import { MobileNav } from './mobile-nav'
import { navLinks } from './nav-links'

/**
 * 헤더/네비게이션 바 컴포넌트
 * 로고, 데스크톱 네비게이션, 모드 토글, 모바일 메뉴를 포함합니다.
 * 반응형으로 동작하며, 모바일에서는 데스크톱 메뉴를 숨기고 햄버거 메뉴를 표시합니다.
 * @returns 헤더 컴포넌트
 */
export function Header() {
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
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
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
