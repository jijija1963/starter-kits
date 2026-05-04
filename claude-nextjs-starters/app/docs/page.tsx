import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Code2, Palette, Settings, ArrowRight } from 'lucide-react'

/**
 * 문서 페이지
 * NextStarter 프로젝트를 시작하고 활용하는 데 필요한 모든 가이드를 제공합니다
 * 4개의 주요 섹션으로 구성됩니다: 시작하기, 훅 라이브러리, UI컴포넌트, 구성 및 설정
 */
export default function DocsPage() {
  // usehooks-ts 주요 훅 목록
  const hooks = [
    {
      name: 'useLocalStorage',
      description: '브라우저 localStorage에 데이터 저장/로드',
      category: 'Storage',
    },
    {
      name: 'useSessionStorage',
      description: '세션 스토리지에 데이터 저장/로드',
      category: 'Storage',
    },
    {
      name: 'useDebounce',
      description: '일정 시간 후 값을 반영 (검색 API 최적화)',
      category: 'State',
    },
    {
      name: 'useThrottle',
      description: '일정 시간 간격으로 함수 실행 제한',
      category: 'State',
    },
    {
      name: 'useMediaQuery',
      description: '미디어 쿼리 조건 감지 (반응형)',
      category: 'Browser',
    },
    {
      name: 'useWindowSize',
      description: '현재 윈도우 너비와 높이 반환',
      category: 'Browser',
    },
    {
      name: 'useToggle',
      description: 'boolean 값을 토글',
      category: 'State',
    },
    {
      name: 'usePrevious',
      description: '이전 렌더링의 값을 추적',
      category: 'State',
    },
    {
      name: 'useAsync',
      description: '비동기 함수를 간단하게 처리',
      category: 'Async',
    },
    {
      name: 'useCounter',
      description: '숫자 증감 관리 (min/max 옵션)',
      category: 'State',
    },
    {
      name: 'useEventListener',
      description: 'DOM 이벤트 등록/제거 (메모리 누수 방지)',
      category: 'DOM',
    },
    {
      name: 'useCopyToClipboard',
      description: '텍스트를 클립보드에 복사',
      category: 'DOM',
    },
  ]

  // ShadcnUI 컴포넌트 목록
  const components = [
    'Alert', 'Avatar', 'Badge', 'Button', 'Card', 'Checkbox', 'Dialog',
    'Dropdown Menu', 'Input', 'Label', 'Navigation Menu', 'Scroll Area',
    'Select', 'Separator', 'Sheet', 'Skeleton', 'Sonner Toast', 'Switch',
    'Tabs', 'Tooltip',
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
                문서
              </h1>
              {/* 페이지 부제목 */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                NextStarter 프로젝트를 시작하고 활용하는 데 필요한 모든 가이드.
                차근차근 학습하고 프로젝트에 바로 적용할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 문서 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 4개 탭으로 문서 분류 */}
            <Tabs defaultValue="getting-started" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="getting-started" className="text-xs md:text-sm">시작하기</TabsTrigger>
                <TabsTrigger value="hooks" className="text-xs md:text-sm">훅 라이브러리</TabsTrigger>
                <TabsTrigger value="components" className="text-xs md:text-sm">UI컴포넌트</TabsTrigger>
                <TabsTrigger value="config" className="text-xs md:text-sm">구성 및 설정</TabsTrigger>
              </TabsList>

              {/* 탭 1: 시작하기 */}
              <TabsContent value="getting-started" className="space-y-6">
                {/* 1-1. 프로젝트 설정 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      프로젝트 설정
                    </CardTitle>
                    <CardDescription>
                      로컬 환경에서 프로젝트를 설정하고 개발을 시작하세요.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 설정 단계 */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium mb-2">Step 1: 저장소 복제</p>
                        <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                          <code>git clone https://github.com/username/claude-nextjs-starters.git
cd claude-nextjs-starters</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Step 2: 의존성 설치</p>
                        <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                          <code>npm install
# 또는
yarn install</code>
                        </pre>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Step 3: 개발 서버 실행</p>
                        <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                          <code>npm run dev
# 브라우저에서 http://localhost:3000 접속</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 1-2. 개발 환경 구성 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      개발 환경 구성
                    </CardTitle>
                    <CardDescription>
                      최적의 개발 경험을 위해 권장하는 도구와 확장 프로그램.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Node.js 버전 */}
                    <div>
                      <p className="text-sm font-medium mb-2">Node.js 버전</p>
                      <Badge variant="outline">Node.js 18.17+</Badge>
                      <p className="text-xs text-muted-foreground mt-2">
                        Next.js 16은 최소 Node.js 18.17 이상이 필요합니다.
                      </p>
                    </div>

                    <Separator />

                    {/* VS Code 확장 추천 */}
                    <div>
                      <p className="text-sm font-medium mb-3">VS Code 확장 추천</p>
                      <div className="space-y-2">
                        {[
                          { name: 'ESLint', desc: '코드 린트 및 스타일 검사' },
                          { name: 'Prettier', desc: '자동 코드 포맷팅' },
                          { name: 'Tailwind CSS IntelliSense', desc: 'Tailwind 클래스 자동완성' },
                          { name: 'TypeScript Vue Plugin', desc: 'TypeScript 지원' },
                          { name: 'Thunder Client', desc: 'API 테스트' },
                        ].map((ext, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <Badge variant="secondary">✓</Badge>
                            <div>
                              <p className="font-medium">{ext.name}</p>
                              <p className="text-muted-foreground">{ext.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 1-3. 첫 번째 애플리케이션 만들기 */}
                <Card>
                  <CardHeader>
                    <CardTitle>첫 번째 애플리케이션 만들기</CardTitle>
                    <CardDescription>
                      간단한 예제를 통해 App Router 구조를 이해합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">프로젝트 폴더 구조</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`app/
├── layout.tsx          # 루트 레이아웃 (모든 페이지에 적용)
├── page.tsx            # 홈페이지 (/)
├── globals.css         # 전역 스타일
│
├── blog/               # /blog 라우트
│   ├── page.tsx        # /blog 페이지
│   └── [slug]/         # /blog/post-title
│       └── page.tsx    # 동적 라우트
│
└── api/                # /api 라우트 (API 엔드포인트)
    └── hello/
        └── route.ts    # /api/hello`}</code>
                      </pre>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-sm font-medium mb-2">새 페이지 만드는 방법</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`// 1. app/about/page.tsx 파일 생성
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>프로젝트 설명...</p>
    </div>
  )
}

// 2. 자동으로 /about 라우트가 생성됨`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: 훅 라이브러리 */}
              <TabsContent value="hooks" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5" />
                      usehooks-ts 주요 훅
                    </CardTitle>
                    <CardDescription>
                      React 개발을 편하게 해주는 실용적인 훅들입니다.
                      모든 훅은 TypeScript를 지원합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 훅 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {hooks.map((hook) => (
                        <div key={hook.name} className="border rounded-lg p-3">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <p className="font-medium text-sm">{hook.name}</p>
                            <Badge variant="outline" className="text-xs">
                              {hook.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {hook.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* 예제 및 문서 링크 */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">더 자세한 예제 확인</p>
                      <Link href="/examples/hooks">
                        <Button variant="outline" className="w-full text-xs">
                          usehooks-ts 예제 페이지
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>

                    {/* 공식 문서 링크 */}
                    <Link href="https://usehooks-ts.com/" target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="w-full text-xs">
                        공식 문서 보기
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 3: UI 컴포넌트 */}
              <TabsContent value="components" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      ShadcnUI 컴포넌트
                    </CardTitle>
                    <CardDescription>
                      프로젝트에 설치된 {components.length}개의 ShadcnUI 컴포넌트를 사용할 수 있습니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 컴포넌트 그리드 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {components.map((comp) => (
                        <Badge key={comp} variant="secondary">
                          {comp}
                        </Badge>
                      ))}
                    </div>

                    <Separator />

                    {/* 컴포넌트 사용법 */}
                    <div>
                      <p className="text-sm font-medium mb-2">컴포넌트 사용 예제</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <Button>클릭하기</Button>
    </Card>
  )
}`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 커스터마이징 */}
                    <div>
                      <p className="text-sm font-medium mb-2">컴포넌트 커스터마이징</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>• <code className="bg-muted px-1">components/ui/</code> 폴더에서 직접 수정 가능</p>
                        <p>• <code className="bg-muted px-1">cn()</code> 유틸리티로 클래스 병합</p>
                        <p>• <code className="bg-muted px-1">cva()</code>로 variant 추가</p>
                      </div>
                    </div>

                    <Separator />

                    {/* 예제 페이지 링크 */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">모든 컴포넌트 확인</p>
                      <Link href="/examples/components">
                        <Button variant="outline" className="w-full text-xs">
                          컴포넌트 쇼케이스
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 4: 구성 및 설정 */}
              <TabsContent value="config" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      프로젝트 구성
                    </CardTitle>
                    <CardDescription>
                      핵심 구성 요소와 설정을 이해합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* TypeScript 경로 별칭 */}
                    <div>
                      <p className="text-sm font-medium mb-2">TypeScript 경로 별칭</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`// 현재 설정
@/*         → 루트
@/components/* → components/
@/app/*     → app/
@/types/*   → types/
@/utils/*   → utils/

// 사용 예시
import { Button } from '@/components/ui/button'`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* Provider 구조 */}
                    <div>
                      <p className="text-sm font-medium mb-2">Provider 계층 구조</p>
                      <div className="border rounded-lg p-3 bg-muted/50 text-xs font-mono space-y-1">
                        <div>ThemeProvider</div>
                        <div className="ml-3">↓ 다크모드/라이트모드</div>
                        <div>QueryProvider</div>
                        <div className="ml-3">↓ React Query 상태</div>
                        <div>TooltipProvider</div>
                        <div className="ml-3">↓ Tooltip 컴포넌트</div>
                      </div>
                    </div>

                    <Separator />

                    {/* Tailwind CSS */}
                    <div>
                      <p className="text-sm font-medium mb-2">Tailwind CSS v4</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <p>✓ CSS 변수 기반 테마 설정</p>
                        <p>✓ <code className="bg-muted px-1">@import "tailwindcss"</code> 사용</p>
                        <p>✓ <code className="bg-muted px-1">class-variance-authority</code>로 컴포넌트 variant 관리</p>
                        <p>✓ Dark mode 자동 지원</p>
                      </div>
                    </div>

                    <Separator />

                    {/* 성능 최적화 */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-medium mb-2">성능 최적화 및 설정</p>
                      <Link href="/examples/config">
                        <Button variant="outline" className="w-full text-xs">
                          설정 및 최적화 가이드
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 하단 CTA 섹션 */}
        <section className="py-12 border-t bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">이제 예제를 확인해보세요</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              문서에서 배운 내용들을 실제 동작하는 예제로 확인할 수 있습니다.
            </p>
            <Link href="/examples">
              <Button size="lg">
                예제 모음으로 이동
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
