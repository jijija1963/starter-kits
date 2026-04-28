// 네비게이션 항목 타입
export interface NavItem {
  label: string
  href: string
  icon?: string
  external?: boolean
  disabled?: boolean
  badge?: string
}

// 네비게이션 섹션 타입
export interface NavSection {
  title: string
  items: NavItem[]
}
