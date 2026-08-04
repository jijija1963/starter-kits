'use client'

import { Counter } from '@/components/counter'
import { ExampleForm } from '@/components/example-form'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Rocket, GitBranch } from 'lucide-react'

/**
 * 스타터킷 홈페이지
 * Hero 섹션, 기술스택, 예시 컴포넌트를 보여주는 페이지입니다.
 * @returns 홈페이지 컴포넌트
 */
export default function Home() {
  const techStack = [
    { name: 'Next.js 16', description: 'React 풀 스택 프레임워크' },
    { name: 'TypeScript', description: '정적 타입 지정' },
    { name: 'Tailwind CSS 4', description: '유틸리티 중심 CSS' },
    { name: 'shadcn/ui', description: '접근성 높은 UI 컴포넌트' },
    { name: 'Zustand', description: '간단한 상태 관리' },
    { name: 'React Hook Form', description: '유연한 폼 관리' },
    { name: 'Zod', description: 'TypeScript 우선 스키마 검증' },
    { name: 'lucide-react', description: '아이콘 라이브러리' },
  ]

  return (
    <div className="w-full">
      {/* Hero 섹션 */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 sm:py-32">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">웹 개발을 빠르게 시작하세요</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Next.js 모던 웹
              <br />
              <span className="text-primary">스타터킷</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              빠르게 웹 개발을 시작하기 위한 완벽한 기초 설정.
              다크모드, 반응형 레이아웃, 접근성 높은 컴포넌트가 모두 준비되어 있습니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2">
                <Rocket className="h-4 w-4" />
                시작하기
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <GitBranch className="h-4 w-4" />
                소스 코드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <main className="py-12 sm:py-16">
        {/* 기술스택 섹션 */}
        <section className="mb-16">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">설치된 기술스택</h2>
              <p className="mt-2 text-muted-foreground">이 스타터킷에는 다음의 라이브러리들이 포함되어 있습니다.</p>
            </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <Card key={tech.name}>
                <CardContent className="flex items-start gap-3 pt-6">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-500" />
                  <div>
                    <p className="font-semibold">{tech.name}</p>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </section>

        {/* 예시 컴포넌트 섹션 */}
        <section>
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">예시 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                아래는 설치된 라이브러리들의 사용법을 보여주는 예시 컴포넌트입니다.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <Counter />
              </div>
              <div className="flex-1">
                <ExampleForm />
              </div>
            </div>
          </div>
        </section>

        {/* 다음 단계 섹션 */}
        <section className="mt-16">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="rounded-lg border border-dashed bg-card p-8">
              <h2 className="text-2xl font-bold tracking-tight">다음 단계</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• 이 폴더를 새 프로젝트의 템플릿으로 사용하세요</li>
                <li>• <code className="rounded bg-muted px-2 py-1 font-mono text-sm">src/</code> 디렉토리 내의 구조를 참고하여 컴포넌트를 작성하세요</li>
                <li>• <code className="rounded bg-muted px-2 py-1 font-mono text-sm">src/store/</code>에서 Zustand 상태 관리 패턴을 확인하세요</li>
                <li>• <code className="rounded bg-muted px-2 py-1 font-mono text-sm">src/lib/validations/</code>에서 Zod 스키마 작성 방식을 배우세요</li>
                <li>• 코드 스타일은 <code className="rounded bg-muted px-2 py-1 font-mono text-sm">CLAUDE.md</code>를 참고하세요</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
