import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Menu } from 'lucide-react'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

/**
 * 공개 레이아웃용 헤더 컴포넌트
 * 데스크탑: 로고 | 네비게이션 메뉴 | 테마 토글
 * 모바일: 로고 | Sheet(햄버거) 메뉴 + 테마 토글
 */
export function Header() {
  // 네비게이션 메뉴 항목
  const navItems = [
    { title: '홈', href: '/' },
    { title: '예제모음', href: '/examples' },
    { title: '문서', href: '/docs' },
    { title: '깃허브', href: 'https://github.com', external: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 영역 */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
              N
            </div>
            <span>NextStarter</span>
          </Link>

          {/* 데스크탑 네비게이션 메뉴 */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href} className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* 우측: 테마 토글 + 모바일 메뉴 */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* 모바일 메뉴 (Sheet 사용) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col gap-4 pt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                      target={item.external ? '_blank' : undefined}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
