'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCounterStore } from '@/store/use-counter-store'

/**
 * 카운터 컴포넌트
 * Zustand 전역 상태 관리를 사용한 간단한 카운터 데모입니다.
 * @returns 카운터 UI 컴포넌트
 */
export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>카운터</CardTitle>
        <CardDescription>Zustand 전역 상태 관리 데모</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center rounded-lg bg-secondary p-8">
          <p className="text-sm font-medium text-secondary-foreground">현재 카운트</p>
          <p className="text-4xl font-bold">{count}</p>
        </div>

        <div className="flex gap-3">
          <Button onClick={decrement} variant="outline" className="flex-1">
            감소
          </Button>
          <Button onClick={increment} className="flex-1">
            증가
          </Button>
        </div>

        <Button onClick={reset} variant="secondary" className="w-full">
          초기화
        </Button>
      </CardContent>
    </Card>
  )
}
