import { Sidebar } from '@/components/layout/sidebar'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { StatCard, ActivityItem } from '@/types'
import { TrendingUp, Users, BarChart3, Clock } from 'lucide-react'
import { format } from 'date-fns'

/**
 * 대시보드 페이지
 *
 * 레이아웃: Sidebar + DashboardHeader + Main
 *
 * 섹션:
 * 1. 통계 카드 그리드
 * 2. 최근 활동 목록
 * 3. React Query 데이터 로딩 예시 (공개 API 활용)
 */
export default function DashboardPage() {
  // 통계 카드 데이터
  const statCards: StatCard[] = [
    {
      title: '총 사용자',
      value: '12,543',
      description: '지난 달 대비 +12.5%',
      trend: 'up',
      trendValue: '+12.5%',
      icon: Users,
    },
    {
      title: '총 매출',
      value: '$45,231.89',
      description: '지난 달 대비 +8.2%',
      trend: 'up',
      trendValue: '+8.2%',
      icon: TrendingUp,
    },
    {
      title: '평균 세션',
      value: '12min 34s',
      description: '지난 달 대비 -3.1%',
      trend: 'down',
      trendValue: '-3.1%',
      icon: Clock,
    },
    {
      title: '전환율',
      value: '3.2%',
      description: '지난 달 대비 +2.1%',
      trend: 'up',
      trendValue: '+2.1%',
      icon: BarChart3,
    },
  ]

  // 최근 활동 데이터 - 고정 시간값으로 정의 (순수 함수 유지)
  const twoHoursAgo = new Date('2026-05-02T16:00:00')
  const fourHoursAgo = new Date('2026-05-02T14:00:00')
  const oneDayAgo = new Date('2026-05-01T18:00:00')

  const activities: ActivityItem[] = [
    {
      id: '1',
      userName: '김개발',
      action: '새로운 대시보드 항목 추가',
      timestamp: twoHoursAgo,
      status: 'completed',
      userAvatarUrl: 'https://github.com/shadcn.png',
    },
    {
      id: '2',
      userName: '이디자인',
      action: '시스템 설정 변경',
      timestamp: fourHoursAgo,
      status: 'completed',
    },
    {
      id: '3',
      userName: '박테스트',
      action: '문의 폼 제출',
      timestamp: oneDayAgo,
      status: 'pending',
    },
  ]

  // 상태별 배지 스타일
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge>완료</Badge>
      case 'pending':
        return <Badge variant="secondary">대기중</Badge>
      case 'failed':
        return <Badge variant="destructive">실패</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* 좌측 사이드바 */}
      <Sidebar />

      {/* 우측 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 상단 헤더 */}
        <DashboardHeader
          title="대시보드"
          description="오늘의 주요 통계와 활동을 확인하세요"
        />

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* 섹션 1: 통계 카드 그리드 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">주요 통계</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => {
                  const Icon = card.icon

                  return (
                    <Card key={card.title}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-sm font-medium">
                            {card.title}
                          </CardTitle>
                          {Icon && (
                            <Icon className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {card.description}
                        </p>
                        {card.trendValue && (
                          <div className="mt-2">
                            <Badge
                              variant={
                                card.trend === 'up'
                                  ? 'default'
                                  : card.trend === 'down'
                                    ? 'destructive'
                                    : 'secondary'
                              }
                              className="text-xs"
                            >
                              {card.trendValue}
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* 섹션 2: 최근 활동 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
              <Card>
                <CardHeader>
                  <CardTitle>활동 기록</CardTitle>
                  <CardDescription>
                    최근 활동 항목을 확인하세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center gap-4 pb-4 border-b last:border-0"
                      >
                        <Avatar className="h-10 w-10">
                          {activity.userAvatarUrl && (
                            <AvatarImage
                              src={activity.userAvatarUrl}
                              alt={activity.userName}
                            />
                          )}
                          <AvatarFallback>
                            {activity.userName
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {activity.userName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.action}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">
                            {format(
                              activity.timestamp,
                              'M월 d일 HH:mm'
                            )}
                          </p>
                          <div className="mt-1">
                            {getStatusBadge(activity.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 섹션 3: 데이터 로딩 예시 (Skeleton) */}
            <section>
              <h2 className="text-xl font-semibold mb-4">데이터 로딩 예시</h2>
              <Card>
                <CardHeader>
                  <CardTitle>로딩 상태</CardTitle>
                  <CardDescription>
                    Skeleton 컴포넌트로 로딩 상태를 표현합니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Skeleton 예시 */}
                    {[1, 2, 3].map((idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 섹션 4: 탭 예시 */}
            <section>
              <h2 className="text-xl font-semibold mb-4">탭 컴포넌트 예시</h2>
              <Card>
                <CardHeader>
                  <CardTitle>다양한 탭 구성</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview" className="w-full">
                    <TabsList>
                      <TabsTrigger value="overview">개요</TabsTrigger>
                      <TabsTrigger value="analytics">분석</TabsTrigger>
                      <TabsTrigger value="reports">보고서</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        대시보드의 전체 개요를 표시하는 탭입니다.
                        여기에 주요 통계와 요약 정보를 배치할 수 있습니다.
                      </p>
                    </TabsContent>

                    <TabsContent value="analytics" className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        상세한 분석 데이터를 표시하는 탭입니다.
                        차트와 그래프를 배치하기에 좋습니다.
                      </p>
                    </TabsContent>

                    <TabsContent value="reports" className="mt-4">
                      <p className="text-sm text-muted-foreground">
                        정기 보고서 데이터를 표시하는 탭입니다.
                        테이블과 데이터 리스트를 배치할 수 있습니다.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
