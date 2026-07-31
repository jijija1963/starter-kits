'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * 테마 프로바이더 래퍼 컴포넌트
 * next-themes의 ThemeProvider를 클라이언트 컴포넌트로 감싸서 루트 레이아웃에서 사용합니다.
 * @param props - NextThemesProvider 속성
 * @returns 테마 프로바이더 컴포넌트
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
