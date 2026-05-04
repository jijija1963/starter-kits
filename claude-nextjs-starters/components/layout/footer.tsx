import Link from 'next/link'
import { Code, Mail } from 'lucide-react'
import { format } from 'date-fns'

/**
 * 공개 레이아웃용 푸터 컴포넌트
 * 저작권 정보, 소셜 링크 표시
 * date-fns로 현재 연도 동적 표시
 */
export function Footer() {
  const currentYear = format(new Date(), 'yyyy')

  return (
    <footer className="border-t bg-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 좌측: 브랜드 정보 */}
          <div>
            <h3 className="font-semibold mb-2">NextStarter</h3>
            <p className="text-sm text-muted-foreground">
              Next.js 16 + React 19로 구축한 모던 웹 스타터킷
            </p>
          </div>

          {/* 중앙: 링크 */}
          <div>
            <h4 className="font-semibold mb-4">링크</h4>
            <nav className="space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                홈
              </Link>
              <Link
                href="/examples"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                예제모음
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                문서
              </Link>
              <Link
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Next.js 문서
              </Link>
            </nav>
          </div>

          {/* 우측: 소셜 링크 */}
          <div>
            <h4 className="font-semibold mb-4">소셜</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Code className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} NextStarter. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  )
}
