import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Skeleton } from '@/components/ui/skeleton'
import { ContactForm } from '@/components/forms/contact-form'
import { ArrowRight, Code, Zap, Shield, Palette } from 'lucide-react'
import { format } from 'date-fns'

// 메인 홈 페이지 - 스타터킷 쇼케이스
export default function HomePage() {
  const lastUpdate = format(new Date(), 'yyyy-MM-dd')

  // 기술 스택
  const techStack = [
    { name: 'Next.js 16', color: 'bg-black text-white dark:bg-white dark:text-black' },
    { name: 'React 19', color: 'bg-blue-500 text-white' },
    { name: 'TypeScript', color: 'bg-blue-600 text-white' },
    { name: 'Tailwind CSS v4', color: 'bg-cyan-500 text-white' },
    { name: 'ShadcnUI v4', color: 'bg-slate-700 text-white' },
    { name: 'TanStack Query', color: 'bg-red-500 text-white' },
  ]

  // 기능 목록
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: '초고속 성능',
      description: 'Turbopack으로 빠른 빌드와 개발 환경 제공',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: '타입 안전',
      description: 'TypeScript와 Zod로 완벽한 타입 검사',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: '다크모드 지원',
      description: 'next-themes로 완벽한 다크모드 통합',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero 섹션 */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                모던 Next.js 스타터킷
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Next.js 16 + React 19 + Tailwind v4 + ShadcnUI v4로 만든 프로덕션 레벨의 스타터킷.
                바로 시작할 수 있는 모든 것을 포함했습니다.
              </p>

              {/* CTA 버튼 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    대시보드 시작하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://github.com" target="_blank">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Code className="mr-2 h-4 w-4" />
                    GitHub에서 보기
                  </Button>
                </Link>
              </div>

              {/* 업데이트 정보 */}
              <p className="text-sm text-muted-foreground">
                마지막 업데이트: {lastUpdate}
              </p>
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">기술 스택</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <Badge key={tech.name} className={`px-4 py-2 text-sm ${tech.color}`}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* 기능 소개 */}
        <section className="py-12 border-t bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">주요 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="text-primary mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 컴포넌트 쇼케이스 */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">컴포넌트 쇼케이스</h2>

            <Tabs defaultValue="button" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="button">버튼</TabsTrigger>
                <TabsTrigger value="form">폼</TabsTrigger>
                <TabsTrigger value="card">카드</TabsTrigger>
                <TabsTrigger value="feedback">피드백</TabsTrigger>
              </TabsList>

              {/* 버튼 탭 */}
              <TabsContent value="button" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>모든 버튼 스타일 확인</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Default Variant</p>
                      <div className="flex flex-wrap gap-2">
                        <Button>Default</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Sizes</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="xs">XS</Button>
                        <Button size="sm">Small</Button>
                        <Button>Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon">📌</Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="text-sm font-medium">States</p>
                      <div className="flex flex-wrap gap-2">
                        <Button>Normal</Button>
                        <Button disabled>Disabled</Button>
                        <Button>Loading...</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 폼 탭 */}
              <TabsContent value="form" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>react-hook-form + Zod</CardTitle>
                    <CardDescription>
                      유효성 검사와 제출 피드백이 포함된 폼 예시
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 카드 탭 */}
              <TabsContent value="card" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((idx) => (
                    <Card key={idx}>
                      <CardHeader>
                        <CardTitle>카드 제목 {idx}</CardTitle>
                        <CardDescription>카드 설명 예시</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">
                          이것은 ShadcnUI Card 컴포넌트의 기본 사용 예시입니다.
                          여러 카드를 그리드로 배치할 수 있습니다.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* 피드백 탭 */}
              <TabsContent value="feedback" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Badge & Avatar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Badge</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>default</Badge>
                        <Badge variant="outline">outline</Badge>
                        <Badge variant="secondary">secondary</Badge>
                        <Badge variant="destructive">destructive</Badge>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm font-medium mb-3">Avatar</p>
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Form Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id="agree" />
                      <label htmlFor="agree" className="text-sm">
                        약관에 동의합니다
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="notifications" />
                      <label htmlFor="notifications" className="text-sm">
                        알림 활성화
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton (로딩)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 시작하기 섹션 */}
        <section className="py-12 border-t bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              이 스타터킷은 모든 설정이 완료되어 있습니다.
              대시보드 페이지에서 다양한 레이아웃과 패턴을 확인할 수 있습니다.
            </p>
            <Link href="/dashboard">
              <Button size="lg">
                대시보드로 이동
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
