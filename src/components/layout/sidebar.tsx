'use client'

import Link from 'next/link'
import { LayoutDashboard, BarChart3, Users, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'

// 대시보드용 애플리케이션 사이드바 컴포넌트
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="font-semibold text-foreground px-2 py-2">StarterKit</div>
        <SidebarSeparator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {/* 개요 섹션 */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>대시보드</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/analytics" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>분석</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarSeparator />

          {/* 관리 섹션 */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>사용자</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>설정</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
