import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from 'sonner'

// 폰트 설정 - Geist와 Geist Mono를 CSS 변수로 주입
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js 모던 웹 스타터킷',
  description: 'Next.js 16 + React 19 + Tailwind v4 + ShadcnUI v4 스타터킷',
  keywords: ['Next.js', 'React', 'Tailwind', 'ShadcnUI'],
  authors: [{ name: 'Developer' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* 테마 시스템 - next-themes */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* React Query 공급자 - 서버 상태 관리 */}
          <QueryProvider>
            {/* Tooltip 공급자 - ShadcnUI tooltip 사용 시 필수 */}
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </QueryProvider>
          {/* Sonner 토스트 컨테이너 - 전역 토스트 알림 */}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
