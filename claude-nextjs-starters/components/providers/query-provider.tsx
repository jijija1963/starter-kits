'use client'

// React Query(TanStack Query) 공급자 설정
// SSR 안전 패턴: useState로 QueryClient 인스턴스화하여 요청 간 캐시 격리
import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

interface QueryProviderProps {
  // 자식 컴포넌트를 감쌀 ReactNode
  children: ReactNode
}

/**
 * React Query 공급자
 * API 데이터 페칭, 캐싱, 동기화를 전역에서 관리한다.
 *
 * SSR 안전 패턴:
 * - useState lazy initializer로 컴포넌트 마운트 시 QueryClient 생성
 * - 모듈 레벨 싱글톤 대신 인스턴스 레벨 생성으로 요청 간 캐시 격리
 *
 * QueryClient 설정:
 * - staleTime: 1분 (데이터 유효 시간)
 * - gcTime: 5분 (메모리에서 제거 시간)
 */
export function QueryProvider({ children }: QueryProviderProps) {
  // useState lazy initializer로 SSR 안전하게 QueryClient 생성
  // 매 요청마다 독립된 인스턴스를 생성하여 캐시 오염 방지
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 1분간 데이터를 신선한 상태로 유지
            staleTime: 1000 * 60,
            // 5분 후 가비지 컬렉션 (이전 cacheTime)
            gcTime: 1000 * 60 * 5,
          },
        },
      })
  )

  // QueryClientProvider로 전역 상태 공급
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
