import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface DashboardHeaderProps {
  title: string
  description?: string
}

/**
 * 대시보드 상단 바 컴포넌트
 * 페이지 제목/설명, 테마 토글, 사용자 아바타 표시
 */
export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <div className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        {/* 좌측: 제목 */}
        <div>
          <h1 className="font-semibold text-lg">{title}</h1>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* 우측: 테마 토글 + 아바타 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
