// 사이트 전체 설정
export const SITE_CONFIG = {
  name: 'Next.js Starter Kit',
  description: 'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반 프로덕션 레디 스타터',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  author: 'Your Name',
} as const

// 메인 네비게이션 항목
export const NAV_ITEMS = [
  { label: '홈', href: '/' },
  { label: '대시보드', href: '/dashboard' },
  { label: '데모', href: '/demo' },
] as const

// 대시보드 사이드바 항목
export const DASHBOARD_SIDEBAR_ITEMS = [
  {
    title: '개요',
    items: [
      { label: '대시보드', href: '/dashboard', icon: 'LayoutDashboard' },
      { label: '분석', href: '/dashboard/analytics', icon: 'BarChart3' },
    ],
  },
  {
    title: '관리',
    items: [
      { label: '사용자', href: '/dashboard/users', icon: 'Users' },
      { label: '설정', href: '/dashboard/settings', icon: 'Settings' },
    ],
  },
] as const
