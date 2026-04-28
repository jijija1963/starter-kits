// 인증 페이지 레이아웃 (심플 레이아웃)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50">
      {children}
    </div>
  )
}
