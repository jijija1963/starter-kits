import Link from 'next/link'
import { LoginForm } from '@/components/auth/login-form'

// 로그인 페이지
export const metadata = {
  title: '로그인',
  description: '계정에 로그인하세요',
}

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="mt-2 text-sm text-muted-foreground">계정에 로그인하세요</p>
      </div>
      <LoginForm />
      <p className="text-center text-sm text-muted-foreground">
        계정이 없으신가요?{' '}
        <Link
          href="/register"
          className="underline underline-offset-4 hover:text-foreground"
        >
          회원가입
        </Link>
      </p>
    </div>
  )
}
