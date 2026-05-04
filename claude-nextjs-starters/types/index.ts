// 네비게이션 메뉴 항목 타입
export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

// API 응답 공통 형태
export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
  error?: string
}

// 사용자 기본 타입
export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: 'admin' | 'user' | 'guest'
}

// 대시보드 통계 카드
export interface StatCard {
  title: string
  value: string | number
  description?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  icon?: React.ComponentType<{ className?: string }>
}

// 최근 활동 항목
export interface ActivityItem {
  id: string
  userName: string
  action: string
  timestamp: Date
  status: 'pending' | 'completed' | 'failed'
  userAvatarUrl?: string
}

// 폼 필드 공통 설정
export interface FormFieldConfig {
  name: string
  label: string
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email' | 'password' | 'textarea'
}

// 문의 폼 데이터
export interface ContactFormData {
  name: string
  email: string
  message: string
}
