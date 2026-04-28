import Link from 'next/link'
import { RegisterForm } from '@/components/auth/register-form'

// 회원가입 페이지
export const metadata = {
  title: '회원가입',
  description: '새 계정을 만드세요',
}

export default function RegisterPage() {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">회원가입</h1>
        <p className="mt-2 text-sm text-muted-foreground">새 계정을 만드세요</p>
      </div>
      <RegisterForm />
      <p className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{' '}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-foreground"
        >
          로그인
        </Link>
      </p>
    </div>
  )
}
