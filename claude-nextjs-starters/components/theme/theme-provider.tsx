'use client'

// next-themes의 ThemeProvider를 RSC(React Server Component) 환경에서 사용하기 위한 Client Component 래퍼
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

/**
 * 테마 공급자 래퍼
 * 다크모드/라이트모드를 전체 앱에서 제어하도록 next-themes를 감싼다.
 * 속성: attribute="class" - html 태그의 class 속성으로 .dark 토글
 * 속성: defaultTheme="system" - 시스템 설정 따름
 * 속성: enableSystem - 시스템 설정 변경 감지
 * 속성: disableTransitionOnChange - 테마 전환 시 애니메이션 비활성화
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
