'use client'

// 다크모드 토글 버튼 - next-themes의 useTheme 훅과 usehooks-ts의 useIsMounted를 활용
import { useTheme } from 'next-themes'
import { useIsMounted } from 'usehooks-ts'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * 다크모드 토글 버튼 컴포넌트
 * Sun 아이콘(라이트 모드) 또는 Moon 아이콘(다크 모드) 표시
 *
 * useIsMounted: 클라이언트에서만 렌더링 - hydration 불일치 방지
 * useTheme: 현재 테마(light/dark/system) 및 setTheme 함수 제공
 */
export function ThemeToggle() {
  // mounted 상태 확인 - SSR에서 theme이 undefined이므로 hydration 불일치 방지 필수
  const isMounted = useIsMounted()
  const { theme, setTheme } = useTheme()

  // 마운트 전에는 렌더링하지 않음 (hydration 방지)
  if (!isMounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="테마 토글"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="테마 토글"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
