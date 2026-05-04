import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

/**
 * 레이아웃 예제 페이지
 * Next.js 13+ App Router의 레이아웃 구조, 패턴, 모범 사례를 설명합니다
 * 현재 프로젝트의 실제 레이아웃 구조를 예시로 제시합니다
 */
export default function LayoutExamplePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              레이아웃 예제
            </h1>
            <p className="text-muted-foreground">
              Next.js 13+ App Router의 레이아웃 구조와 컴포넌트 패턴을 학습합니다.
            </p>
          </div>
        </section>

        {/* 레이아웃 설명 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-6">
            {/* 섹션 1: App Router 레이아웃 구조 */}
            <Card>
              <CardHeader>
                <CardTitle>App Router 레이아웃 구조</CardTitle>
                <CardDescription>
                  Next.js 13+의 App Router 디렉토리 구조와 레이아웃 계층화
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 디렉토리 트리 표시 */}
                <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto">
                  <code>
{`app/
├── layout.tsx              # 루트 레이아웃 (모든 페이지에 적용)
│   ├── ThemeProvider       # 테마 관리
│   ├── QueryProvider       # React Query
│   ├── TooltipProvider     # ShadcnUI Tooltip
│   └── {children}
│
├── page.tsx                # 홈페이지 (/)
├── favicon.ico
├── globals.css             # 전역 스타일
│
├── examples/               # 예제모음 레이아웃
│   ├── page.tsx            # 예제 인덱스 (/examples)
│   ├── components/
│   │   └── page.tsx        # 컴포넌트 쇼케이스
│   ├── form/
│   │   └── page.tsx        # 폼 예제
│   ├── layout/
│   │   └── page.tsx        # 레이아웃 예제
│   ├── hooks/
│   │   └── page.tsx        # usehooks-ts 예제
│   ├── data-fetching/
│   │   └── page.tsx        # 데이터 패칭 예제
│   └── config/
│       └── page.tsx        # 설정 및 최적화 예제
│
├── docs/                   # 문서 레이아웃
│   └── page.tsx            # 문서 페이지 (/docs)
│
└── dashboard/              # 대시보드 레이아웃 (분리된 구조)
    └── page.tsx            # 대시보드 홈 (/dashboard)`}
                  </code>
                </pre>

                {/* App Router 설명 */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Points:</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• 각 폴더의 <code className="bg-muted px-1 rounded">layout.tsx</code>는 해당 디렉토리의 모든 페이지에 적용</li>
                    <li>• <code className="bg-muted px-1 rounded">page.tsx</code>가 있는 폴더는 라우트 세그먼트 역할</li>
                    <li>• Nested Layout으로 상위 layout이 하위 layout을 감싸는 구조</li>
                    <li>• Provider 계층은 루트 layout에서 한 번만 설정하면 전체 앱에 적용</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* 섹션 2: 현재 프로젝트의 레이아웃 컴포넌트들 */}
            <Card>
              <CardHeader>
                <CardTitle>레이아웃 컴포넌트 패턴</CardTitle>
                <CardDescription>
                  현재 프로젝트에서 사용 중인 레이아웃 컴포넌트들
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 공개 레이아웃 카드 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="font-semibold text-sm">공개 레이아웃</div>
                    <div className="bg-muted rounded-lg p-3 text-xs font-mono leading-relaxed">
                      <div>Header</div>
                      <div className="ml-4">{'{'} 로고, 네비게이션 {'}'}</div>
                      <div>Main Content</div>
                      <div className="ml-4">{'{'} 페이지 콘텐츠 {'}'}</div>
                      <div>Footer</div>
                      <div className="ml-4">{'{'} 링크, 저작권 {'}'}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <Badge className="mb-2">components/layout/header.tsx</Badge>
                      <Badge className="mb-2">components/layout/footer.tsx</Badge>
                      <p className="mt-2">홈, 예제, 문서 페이지에서 사용</p>
                    </div>
                  </div>

                  {/* 대시보드 레이아웃 카드 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="font-semibold text-sm">대시보드 레이아웃</div>
                    <div className="bg-muted rounded-lg p-3 text-xs font-mono leading-relaxed">
                      <div>Sidebar</div>
                      <div className="ml-4">{'{'} 네비게이션 {'}'}</div>
                      <div>DashboardHeader</div>
                      <div className="ml-4">{'{'} 제목, 액션 {'}'}</div>
                      <div>Main Content</div>
                      <div className="ml-4">{'{'} 콘텐츠 {'}'}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <Badge className="mb-2">components/layout/sidebar.tsx</Badge>
                      <Badge className="mb-2">components/layout/dashboard-header.tsx</Badge>
                      <p className="mt-2">대시보드 페이지에서 사용</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* 섹션 3: Provider 계층 구조 */}
            <Card>
              <CardHeader>
                <CardTitle>Provider 계층 구조</CardTitle>
                <CardDescription>
                  루트 layout.tsx에서 설정하는 전역 Provider들
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Provider 계층도 */}
                <pre className="bg-muted rounded-lg p-4 text-xs font-mono">
                  <code>
{`RootLayout
  ↓
ThemeProvider (next-themes)
  - 다크모드/라이트모드 관리
  ↓
QueryProvider (React Query)
  - 서버 상태 관리
  - staleTime: 1분
  - gcTime: 5분
  ↓
TooltipProvider (ShadcnUI)
  - Tooltip 컴포넌트 지원
  ↓
{children}

+ Toaster (Sonner)
  - Toast 알림 표시`}
                  </code>
                </pre>

                {/* Provider 설명 */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">ThemeProvider</p>
                    <p className="text-xs text-muted-foreground">
                      사용자의 테마 선호도를 localStorage에 저장하고 관리합니다.
                      다크모드 토글이 모든 페이지에서 일관성 있게 작동합니다.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">QueryProvider</p>
                    <p className="text-xs text-muted-foreground">
                      TanStack Query를 전역 설정합니다. 서버 상태 관리, 캐싱, 자동 리페칭 등의 기능을 제공합니다.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">TooltipProvider</p>
                    <p className="text-xs text-muted-foreground">
                      모든 Tooltip 컴포넌트가 동일한 컨텍스트에서 작동하도록 설정합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* 섹션 4: 레이아웃 중첩 시각화 */}
            <Card>
              <CardHeader>
                <CardTitle>레이아웃 중첩 시각화</CardTitle>
                <CardDescription>
                  /examples/components 페이지의 실제 레이아웃 계층
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 중첩 박스로 시각화 */}
                <div className="space-y-3">
                  <div className="border-2 border-primary rounded-lg p-4">
                    <p className="text-xs font-medium text-primary mb-2">🔵 RootLayout (app/layout.tsx)</p>
                    <div className="ml-2">
                      <p className="text-xs text-muted-foreground mb-2">Providers (Theme, Query, Tooltip)</p>
                      <div className="border-2 border-blue-500 rounded-lg p-4">
                        <p className="text-xs font-medium text-blue-500 mb-2">🟦 Header Component</p>
                        <p className="text-xs text-muted-foreground">로고, 네비게이션, 테마 토글</p>
                      </div>
                      <div className="border-2 border-green-500 rounded-lg p-4 mt-3">
                        <p className="text-xs font-medium text-green-500 mb-2">🟩 Main Content</p>
                        <p className="text-xs text-muted-foreground">페이지별 콘텐츠</p>
                        <p className="text-xs text-muted-foreground mt-2">
                          → /examples 페이지: 6개 카드 그리드
                        </p>
                        <p className="text-xs text-muted-foreground">
                          → /examples/components 페이지: 5개 Tab으로 컴포넌트 쇼케이스
                        </p>
                      </div>
                      <div className="border-2 border-orange-500 rounded-lg p-4 mt-3">
                        <p className="text-xs font-medium text-orange-500 mb-2">🟧 Footer Component</p>
                        <p className="text-xs text-muted-foreground">링크, 저작권 정보</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* 섹션 5: 레이아웃 설계 원칙 */}
            <Card>
              <CardHeader>
                <CardTitle>레이아웃 설계 원칙</CardTitle>
                <CardDescription>
                  현재 프로젝트의 레이아웃 설계 원칙
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <Badge>1</Badge>
                    <div>
                      <p className="font-medium">단순성 우선</p>
                      <p className="text-muted-foreground text-xs">
                        각 페이지에서 Header/Footer를 직접 import 하는 방식으로 단순화
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Badge>2</Badge>
                    <div>
                      <p className="font-medium">분명한 계층 분리</p>
                      <p className="text-muted-foreground text-xs">
                        공개 레이아웃(Header/Footer)과 대시보드 레이아웃(Sidebar) 명확히 분리
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Badge>3</Badge>
                    <div>
                      <p className="font-medium">Provider 일관성</p>
                      <p className="text-muted-foreground text-xs">
                        루트 layout에서만 Provider를 설정해 중복을 방지
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Badge>4</Badge>
                    <div>
                      <p className="font-medium">재사용 가능한 컴포넌트</p>
                      <p className="text-muted-foreground text-xs">
                        Header, Footer, Sidebar, DashboardHeader는 모두 재사용 가능
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
