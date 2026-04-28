import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// 최근 활동 목록 데이터
const RECENT_ACTIVITY = [
  { id: 1, user: '김철수', action: '계정 생성', time: '2시간 전', status: 'success' },
  { id: 2, user: '이영희', action: '프로필 업데이트', time: '4시간 전', status: 'success' },
  { id: 3, user: '박민준', action: '결제 진행', time: '1일 전', status: 'pending' },
  { id: 4, user: '정수진', action: '로그인 시도 실패', time: '2일 전', status: 'failed' },
  { id: 5, user: '최동욱', action: '계정 삭제', time: '3일 전', status: 'warning' },
]

// 대시보드 최근 활동 컴포넌트
export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
        <CardDescription>최근 사용자 활동 목록</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {RECENT_ACTIVITY.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-medium text-sm">{activity.user}</p>
                <p className="text-xs text-muted-foreground">{activity.action}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    activity.status === 'success'
                      ? 'default'
                      : activity.status === 'failed'
                        ? 'destructive'
                        : activity.status === 'pending'
                          ? 'secondary'
                          : 'outline'
                  }
                >
                  {activity.status === 'success'
                    ? '성공'
                    : activity.status === 'failed'
                      ? '실패'
                      : activity.status === 'pending'
                        ? '진행중'
                        : '경고'}
                </Badge>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
