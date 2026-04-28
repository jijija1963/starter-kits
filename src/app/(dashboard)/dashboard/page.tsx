import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { RecentActivity } from '@/components/dashboard/recent-activity'

// 통계 데이터
const STATS = [
  {
    title: '총 사용자',
    value: '2,350',
    change: '+20.1%',
    icon: Users,
  },
  {
    title: '매출',
    value: '₩45,231,089',
    change: '+180.1%',
    icon: DollarSign,
  },
  {
    title: '주문',
    value: '+12,234',
    change: '+19%',
    icon: ShoppingCart,
  },
  {
    title: '활성 사용자',
    value: '+573',
    change: '+201',
    icon: TrendingUp,
  },
]

// 대시보드 메인 페이지
export const metadata = {
  title: '대시보드',
  description: '대시보드 개요',
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-muted-foreground mt-1">
          환영합니다! 여기는 대시보드 메인 페이지입니다.
        </p>
      </div>

      {/* 통계 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* 최근 활동 */}
      <RecentActivity />
    </div>
  )
}
