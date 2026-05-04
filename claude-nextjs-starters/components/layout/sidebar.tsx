'use client'

// 대시보드 레이아웃용 사이드바 - usePathname으로 활성 링크 감지
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  LogOut,
  ChevronDown,
} from 'lucide-react'

/**
 * 대시보드 사이드바 컴포넌트
 * 고정 너비의 네비게이션, 활성 링크 강조
 * 하단에 사용자 프로필 + 드롭다운 메뉴
 */
export function Sidebar() {
  const pathname = usePathname()

  // 사이드바 네비게이션 항목
  const navItems = [
    { title: '대시보드', href: '/dashboard', icon: LayoutDashboard },
    { title: '분석', href: '/dashboard/analytics', icon: BarChart3 },
    { title: '설정', href: '/dashboard/settings', icon: Settings },
  ]

  // 링크가 활성인지 판단
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/40">
      {/* 로고 영역 */}
      <div className="flex h-16 items-center gap-2 border-b px-4 font-semibold">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
          D
        </div>
        <span>Dashboard</span>
      </div>

      {/* 네비게이션 메뉴 */}
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* 하단: 사용자 프로필 + 메뉴 */}
      <div className="border-t p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>계정</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>프로필 설정</DropdownMenuItem>
            <DropdownMenuItem>환경 설정</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              로그아웃
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
