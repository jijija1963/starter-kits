import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// 컴포넌트 데모 페이지
export const metadata = {
  title: '데모',
  description: 'shadcn/ui 컴포넌트 데모',
}

export default function DemoPage() {
  return (
    <div className="container max-w-screen-2xl py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">컴포넌트 데모</h1>
          <p className="text-muted-foreground mt-2">
            shadcn/ui와 lucide-react를 사용한 컴포넌트 데모
          </p>
        </div>

        {/* 버튼 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle>버튼</CardTitle>
            <CardDescription>다양한 버튼 스타일</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>

        {/* 배지 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle>배지</CardTitle>
            <CardDescription>다양한 배지 스타일</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>

        {/* 알림 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle>알림</CardTitle>
            <CardDescription>다양한 알림 스타일</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>정보</AlertTitle>
              <AlertDescription>
                이것은 정보 알림입니다.
              </AlertDescription>
            </Alert>
            <Alert>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>성공</AlertTitle>
              <AlertDescription>
                작업이 성공적으로 완료되었습니다.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>
                오류가 발생했습니다. 다시 시도해주세요.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* 카드 섹션 */}
        <Card>
          <CardHeader>
            <CardTitle>카드</CardTitle>
            <CardDescription>기본 카드 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="p-4">
                  <h4 className="font-semibold">카드 {i + 1}</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    이것은 기본 카드 컴포넌트입니다.
                  </p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="rounded-lg border border-border/40 bg-muted/50 p-6">
          <h3 className="font-semibold mb-2">더 많은 컴포넌트</h3>
          <p className="text-sm text-muted-foreground">
            shadcn/ui에서 제공하는 모든 컴포넌트를 사용할 수 있습니다.
            공식 문서에서 더 많은 예제를 확인하세요.
          </p>
        </div>
      </div>
    </div>
  )
}
