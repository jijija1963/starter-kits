'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from './nav-links'

/**
 * 모바일 네비게이션 메뉴
 * 작은 화면에서만 표시되며, 햄버거 버튼을 통해 사이드 패널(Sheet)을 열 수 있습니다.
 * 실제 링크 클릭 시 패널이 자동으로 닫히고, 데모 링크 클릭 시 토스트 메시지를 표시 후 패널을 닫습니다.
 * @returns 모바일 메뉴 컴포넌트
 */
export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  /**
   * 데모 링크(플레이스홀더) 클릭 핸들러
   * 사용자에게 이것이 예시 링크임을 안내하고 패널을 닫습니다.
   * @param label - 메뉴 이름
   */
  const handlePlaceholderClick = (label: string) => {
    toast.info(`"${label}" 메뉴는 데모 링크입니다. 실제 프로젝트에서 연결해주세요.`, {
      position: 'top-center',
    })
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">메뉴 열기</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col space-y-4 py-4">
          {navLinks.map((link) => (
            // 데모 링크(href가 null)와 실제 링크를 구분 렌더링
            link.isPlaceholder ? (
              <button
                key={link.label}
                onClick={() => handlePlaceholderClick(link.label)}
                className="text-sm font-medium transition-colors hover:text-primary text-left cursor-pointer"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href || '/'}
                onClick={() => setOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
