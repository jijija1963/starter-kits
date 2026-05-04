import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Layout, FileText, Columns2, Code2, Database, Settings, ArrowRight } from 'lucide-react'

/**
 * 예제모음 인덱스 페이지
 * 6개의 예제 카테고리를 카드 그리드로 표시
 * 각 카드에서 해당 서브 페이지로 이동할 수 있음
 */
export default function ExamplesPage() {
  // 예제 카드 데이터 - 각 카드는 서브 페이지와 연결
  const exampleCards = [
    {
      title: '컴포넌트 쇼케이스',
      description: 'ShadcnUI 17개 컴포넌트의 모든 variant와 사용법을 확인합니다.',
      icon: Layout,
      href: '/examples/components',
      badges: ['Button', 'Card', 'Badge', 'Dialog'],
    },
    {
      title: '폼 예제',
      description: 'react-hook-form + zod 조합으로 유효성 검사 폼을 구현합니다.',
      icon: FileText,
      href: '/examples/form',
      badges: ['react-hook-form', 'zod', 'Sonner'],
    },
    {
      title: '레이아웃 예제',
      description: 'App Router 중첩 레이아웃, Sidebar, Header 패턴을 학습합니다.',
      icon: Columns2,
      href: '/examples/layout',
      badges: ['Sidebar', 'Header', 'Footer'],
    },
    {
      title: 'usehooks-ts 예제',
      description: 'usehooks-ts 라이브러리의 실용적인 훅 사용법을 학습합니다.',
      icon: Code2,
      href: '/examples/hooks',
      badges: ['useLocalStorage', 'useDebounce', 'useMediaQuery'],
    },
    {
      title: '데이터 패칭',
      description: 'TanStack Query로 서버 상태 관리와 로딩/에러 처리를 구현합니다.',
      icon: Database,
      href: '/examples/data-fetching',
      badges: ['useQuery', 'useMutation', 'Skeleton'],
    },
    {
      title: '설정 및 최적화',
      description: 'Next.js 환경변수, 메타데이터, SEO, 성능 최적화 패턴을 학습합니다.',
      icon: Settings,
      href: '/examples/config',
      badges: ['Metadata', 'env', 'SEO'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 Hero 섹션 */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              {/* 페이지 제목 */}
              <h1 className="text-4xl md:text-6xl font-bold">
                예제 모음
              </h1>
              {/* 페이지 부제목 */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                다양한 실무 예제와 패턴을 통해 스타터킷을 효과적으로 학습하고 활용할 수 있습니다.
                각 예제는 실제 프로젝트에 바로 적용할 수 있는 코드와 설명을 포함합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 예제 카드 그리드 섹션 */}
        <section className="py-12 border-t bg-muted/50">
          <div className="container mx-auto px-4">
            {/* 예제 카드 그리드 - 반응형 열 배치 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exampleCards.map((card) => {
                // 카드 아이콘 컴포넌트 변환
                const IconComponent = card.icon

                return (
                  <Card key={card.href} className="flex flex-col">
                    <CardHeader>
                      {/* 카드 아이콘 */}
                      <div className="text-primary mb-3">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      {/* 카드 제목 */}
                      <CardTitle>{card.title}</CardTitle>
                      {/* 카드 설명 */}
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>

                    {/* 카드 본문 - 배지 태그들 */}
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {card.badges.map((badge) => (
                          <Badge key={badge} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {/* 카드 푸터 - 예제 보기 버튼 */}
                    <CardFooter>
                      <Link href={card.href} className="w-full">
                        <Button className="w-full" variant="default">
                          예제 보기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
