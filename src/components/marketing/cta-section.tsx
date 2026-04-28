import Link from 'next/link'
import { Button } from '@/components/ui/button'

// CTA (Call-to-Action) 섹션 컴포넌트
export function CtaSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12">
      <div className="rounded-lg border border-border/40 bg-muted/50 p-6 md:p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="mx-auto max-w-[600px] text-muted-foreground mb-6 text-lg">
          완벽하게 구성된 Next.js 스타터 킷으로 프로젝트를 빠르게 시작하세요.
          모든 도구와 패턴이 이미 준비되어 있습니다.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">지금 가입하기</Link>
        </Button>
      </div>
    </section>
  )
}
