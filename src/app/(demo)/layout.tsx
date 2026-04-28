import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

// 데모 페이지 레이아웃
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
