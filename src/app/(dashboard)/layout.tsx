import { AppSidebar } from '@/components/layout/sidebar'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import {
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

// 대시보드 레이아웃 (Sidebar + Header)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-border px-6">
          <SidebarTrigger />
          <div className="flex-1" />
          <ThemeToggle />
        </header>
        <div className="flex-1 p-6 overflow-auto">{children}</div>
      </main>
    </SidebarProvider>
  )
}
