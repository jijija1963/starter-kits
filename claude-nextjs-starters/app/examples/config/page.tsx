import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Code } from 'lucide-react'

/**
 * 설정 및 최적화 예제 페이지
 * Next.js 16의 환경변수, 메타데이터, 설정, 성능 최적화를 다룹니다
 * 프로젝트 실제 설정을 예시로 제시합니다
 */
export default function ConfigExamplePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              설정 및 최적화
            </h1>
            <p className="text-muted-foreground">
              Next.js 환경 설정, 메타데이터, SEO, 성능 최적화 패턴을 학습합니다.
            </p>
          </div>
        </section>

        {/* 설정 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 4개 탭으로 설정 분류 */}
            <Tabs defaultValue="env" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="env" className="text-xs md:text-sm">환경변수</TabsTrigger>
                <TabsTrigger value="seo" className="text-xs md:text-sm">SEO/메타</TabsTrigger>
                <TabsTrigger value="config" className="text-xs md:text-sm">설정</TabsTrigger>
                <TabsTrigger value="performance" className="text-xs md:text-sm">최적화</TabsTrigger>
              </TabsList>

              {/* 탭 1: 환경 변수 */}
              <TabsContent value="env" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>환경 변수 관리</CardTitle>
                    <CardDescription>
                      .env.local, .env.development, .env.production으로 환경별 설정을 관리합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* .env 파일 예시 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">.env.local (로컬 개발)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`# API 설정
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_BASE=http://localhost:4000

# 데이터베이스 (서버만 접근 가능)
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# 보안 키 (서버만 접근 가능)
NEXTAUTH_SECRET=your-secret-key-here
STRIPE_SECRET_KEY=sk_test_...`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 환경변수 사용 패턴 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">환경 변수 사용 방법</p>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 bg-muted/50">
                          <p className="text-xs font-medium mb-2">클라이언트에서 접근 가능</p>
                          <pre className="text-xs bg-background rounded p-2 overflow-x-auto">
                            <code>{`// 클라이언트에서 접근 가능 (NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
console.log(apiUrl) // "http://localhost:3000"`}</code>
                          </pre>
                        </div>

                        <div className="border rounded-lg p-3 bg-muted/50">
                          <p className="text-xs font-medium mb-2">서버에서만 접근 가능</p>
                          <pre className="text-xs bg-background rounded p-2 overflow-x-auto">
                            <code>{`// 서버 액션, API 라우트, getServerSideProps에서만
const dbUrl = process.env.DATABASE_URL
console.log(dbUrl) // "postgresql://user:password@..."`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* 환경별 파일 구조 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">환경별 파일 구조</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs">
                        <code>{`.
├── .env.local              # 로컬 개발 (Git 제외)
├── .env.development        # 개발 서버
├── .env.staging            # Staging 환경
├── .env.production         # 프로덕션
└── .env.example            # 템플릿 (Git 포함)`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: SEO & Metadata */}
              <TabsContent value="seo" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Metadata & SEO</CardTitle>
                    <CardDescription>
                      Next.js 메타데이터 API로 검색 엔진 최적화와 소셜 미디어 공유 설정을 합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 정적 메타데이터 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">정적 메타데이터 (app/layout.tsx)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'NextStarter',
    template: '%s | NextStarter',
  },
  description: 'Next.js 16 + React 19 모던 웹 스타터킷',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Your Name', url: 'https://yoursite.com' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://yoursite.com',
    title: 'NextStarter',
    description: 'Modern web starter kit',
    images: [
      {
        url: 'https://yoursite.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextStarter',
    description: 'Modern web starter kit',
    images: ['https://yoursite.com/og-image.png'],
  },
}`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 동적 메타데이터 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">동적 메타데이터 (페이지별)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}): Promise<Metadata> {
  const post = await fetchPost(params.slug)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPost({ params }) {
  // 페이지 콘텐츠
}`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* SEO 체크리스트 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">SEO 체크리스트</p>
                      <div className="space-y-2">
                        {[
                          '제목 태그 설정 (50-60자)',
                          '메타 설명 (150-160자)',
                          'Open Graph 메타 태그',
                          'Twitter 카드',
                          '구조화된 데이터 (Schema.org)',
                          '사이트맵 생성',
                          'robots.txt 설정',
                          '성능 최적화 (Core Web Vitals)',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <Badge variant="outline">✓</Badge>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 3: Next.js 설정 */}
              <TabsContent value="config" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Next.js 설정 (next.config.ts)</CardTitle>
                    <CardDescription>
                      프로젝트의 빌드 설정과 Runtime 동작을 제어합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 주요 설정 옵션 */}
                    <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                      <code>{`import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 이미지 최적화
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },

  // 환경 변수
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  // 헤더 설정
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },

  // 리다이렉트
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },

  // 리라이트
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: 'http://backend-api.com/:path*',
        },
      ],
    }
  },
}

export default nextConfig`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>TypeScript 경로 별칭</CardTitle>
                    <CardDescription>
                      tsconfig.json에서 경로 별칭을 설정해 임포트를 간단하게 합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                      <code>{`// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/app/*": ["./app/*"],
      "@/types/*": ["./types/*"],
      "@/utils/*": ["./utils/*"],
    }
  }
}

// 사용 예시
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import type { Post } from '@/types/post'`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 4: 성능 최적화 */}
              <TabsContent value="performance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>성능 최적화 패턴</CardTitle>
                    <CardDescription>
                      Next.js와 React 성능 최적화 기법들을 소개합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 1. Image 최적화 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">1. Image 최적화 (next/image)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`import Image from 'next/image'

// ❌ 나쁜 예: <img> 태그 사용
<img src="/image.png" alt="Description" />

// ✓ 좋은 예: next/image 사용
<Image
  src="/image.png"
  alt="Description"
  width={800}
  height={600}
  priority // 위의 이미지는 priority로 로드
  loading="lazy" // 아래의 이미지는 lazy로 로드
/>`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 2. 폰트 최적화 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">2. 폰트 최적화 (next/font)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`// app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'

// 자동으로 최적화되며 CSS 변수로 주입됨
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geist_mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export default function RootLayout() {
  return (
    <html lang="ko"
          className={\`\${geist.variable} \${geist_mono.variable}\`}>
      <body>...</body>
    </html>
  )
}`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 3. 동적 임포트 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">3. 동적 임포트 (Code Splitting)</p>
                      <pre className="bg-muted rounded-lg p-3 text-xs overflow-x-auto">
                        <code>{`import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

// 무거운 컴포넌트를 동적으로 임포트
const HeavyChart = dynamic(() => import('@/components/chart'), {
  loading: () => <Skeleton className="h-96 w-full" />,
})

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <HeavyChart />
    </Suspense>
  )
}`}</code>
                      </pre>
                    </div>

                    <Separator />

                    {/* 4. 캐싱 전략 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">4. 캐싱 전략</p>
                      <div className="space-y-2">
                        <div className="border rounded-lg p-3 bg-muted/50">
                          <p className="text-xs font-medium mb-1">정적 생성 (Static Generation)</p>
                          <p className="text-xs text-muted-foreground">
                            빌드 시점에 페이지를 생성 → 가장 빠름
                          </p>
                        </div>
                        <div className="border rounded-lg p-3 bg-muted/50">
                          <p className="text-xs font-medium mb-1">증분 정적 재생성 (ISR)</p>
                          <p className="text-xs text-muted-foreground">
                            revalidate 옵션으로 일정 시간마다 재생성
                          </p>
                        </div>
                        <div className="border rounded-lg p-3 bg-muted/50">
                          <p className="text-xs font-medium mb-1">서버 사이드 렌더링 (SSR)</p>
                          <p className="text-xs text-muted-foreground">
                            요청 시마다 렌더링 → 가장 최신 데이터, 느림
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* 5. Core Web Vitals */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">5. Core Web Vitals 최적화</p>
                      <div className="space-y-2">
                        {[
                          'Largest Contentful Paint (LCP): 이미지 lazy loading, 폰트 최적화',
                          'First Input Delay (FID): 자바스크립트 번들 크기 감소',
                          'Cumulative Layout Shift (CLS): 폰트/이미지 크기 지정',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <Badge variant="secondary" className="mt-0.5">
                              {idx + 1}
                            </Badge>
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
