import {
  Zap,
  Code2,
  Palette,
  Smartphone,
  Shield,
  Rocket,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// 기능 목록 데이터
const FEATURES = [
  {
    icon: Zap,
    title: '빠른 성능',
    description: 'Turbopack을 기본 번들러로 사용한 초고속 개발 서버',
  },
  {
    icon: Code2,
    title: '최신 기술',
    description: 'React 19, TypeScript, Next.js 16 기반의 모던 스택',
  },
  {
    icon: Palette,
    title: 'TailwindCSS v4',
    description: 'CSS-first 접근법의 최신 Tailwind CSS 버전',
  },
  {
    icon: Smartphone,
    title: '완벽한 반응형',
    description: '모바일부터 데스크탑까지 모든 화면 크기 지원',
  },
  {
    icon: Shield,
    title: '다크모드 지원',
    description: 'next-themes를 사용한 자동 테마 감지 및 전환',
  },
  {
    icon: Rocket,
    title: '프로덕션 레디',
    description: '즉시 배포 가능한 최적화된 구조와 설정',
  },
]

// 기능 소개 섹션 컴포넌트
export function FeaturesSection() {
  return (
    <section className="container space-y-8 py-8 md:py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          강력한 기능들
        </h2>
        <p className="mt-4 text-muted-foreground">
          모든 것이 준비되어 있습니다
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title}>
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
