// API 응답 타입
export interface ApiResponse<T = unknown> {
  data: T | null
  error: string | null
  status: number
}

// 페이지네이션된 응답 타입
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}
