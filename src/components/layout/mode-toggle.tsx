'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

/**
 * 다크모드 토글 컴포넌트
 * Light/Dark/System 테마를 전환할 수 있는 드롭다운 메뉴 버튼입니다.
 * 현재 테마에 따라 아이콘이 동적으로 변합니다 (태양/달).
 * @returns 모드 토글 버튼 컴포넌트
 */
export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">테마 전환</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          라이트 모드
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          다크 모드
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          시스템 설정
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
