'use client'

// React Query(TanStack Query) 공급자 설정
// 서버 상태 관리를 위한 QueryClient 초기화 및 QueryClientProvider로 감싼다.
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

/**
 * React Query 공급자
 * API 데이터 페칭, 캐싱, 동기화를 전역에서 관리한다.
 *
 * QueryClient 설정:
 * - staleTime: 1분 (데이터 유효 시간)
 * - gcTime: 5분 (메모리에서 제거 시간, 이전 cacheTime)
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1분
      gcTime: 1000 * 60 * 5, // 5분 (이전 cacheTime)
    },
  },
})

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
