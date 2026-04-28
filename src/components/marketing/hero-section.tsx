import Link from 'next/link'
import { ArrowRight, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// 랜딩 페이지 Hero 섹션 컴포넌트
export function HeroSection() {
  return (
    <section className="container flex flex-col items-center gap-4 pb-8 pt-6 md:py-10 text-center">
      <Badge variant="secondary">v1.0.0 출시</Badge>
      <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Next.js 16 Starter Kit
        <br className="hidden sm:inline" />
        지금 바로 시작하세요
      </h1>
      <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
        TypeScript, TailwindCSS v4, shadcn/ui를 포함한 프로덕션 레디 스타터 킷.
        <br />
        복잡한 설정 없이 바로 개발을 시작할 수 있습니다.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/dashboard">
            대시보드 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="mr-2 h-4 w-4" /> 소스 코드
          </Link>
        </Button>
      </div>
    </section>
  )
}
