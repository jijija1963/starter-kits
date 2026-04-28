'use client'

import { ThemeProvider } from 'next-themes'

// 전역 프로바이더들을 한 곳에서 관리하는 컴포넌트
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
