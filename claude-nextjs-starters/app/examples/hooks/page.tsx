'use client'

import { useState, useRef } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useDebounceValue } from 'usehooks-ts'
import { useMediaQuery } from 'usehooks-ts'
import { useToggle } from 'usehooks-ts'
import { useCopyToClipboard } from 'usehooks-ts'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Eye, EyeOff, Copy, Check } from 'lucide-react'
import { toast } from 'sonner'

/**
 * usehooks-ts 예제 페이지
 * usehooks-ts 라이브러리의 실용적인 훅 사용법을 보여줍니다
 * 6개의 주요 훅을 Tabs로 구분하여 실제 동작을 체험할 수 있습니다
 */
export default function HooksExamplePage() {
  // Hooks 1: useLocalStorage - 테마 선호도 저장
  const [savedTheme, setSavedTheme] = useLocalStorage('user-theme-preference', 'light')

  // Hooks 2: useDebounceValue - 검색 쿼리 디바운싱
  const [searchInput, setSearchInput] = useState('')
  const [debouncedSearch] = useDebounceValue(searchInput, 500)

  // Hooks 3: useMediaQuery - 화면 크기 감지
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')

  // Hooks 4: useToggle - 비밀번호 표시/숨김
  const [showPassword, togglePasswordVisibility] = useToggle(false)

  // Hooks 5: useCopyToClipboard - 클립보드 복사
  const [copiedText, copy] = useCopyToClipboard()
  const [copySuccess, setCopySuccess] = useState(false)

  // 클립보드 복사 핸들러
  const handleCopy = async (text: string) => {
    await copy(text)
    setCopySuccess(true)
    toast.success('클립보드에 복사되었습니다!')
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              usehooks-ts 예제
            </h1>
            <p className="text-muted-foreground">
              usehooks-ts 라이브러리의 실용적인 훅들을 실제로 체험합니다.
            </p>
          </div>
        </section>

        {/* 훅 예제 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 6개 훅을 탭으로 구분 */}
            <Tabs defaultValue="localStorage" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="localStorage" className="text-xs">Storage</TabsTrigger>
                <TabsTrigger value="debounce" className="text-xs">Debounce</TabsTrigger>
                <TabsTrigger value="mediaquery" className="text-xs">MediaQuery</TabsTrigger>
                <TabsTrigger value="toggle" className="text-xs">Toggle</TabsTrigger>
                <TabsTrigger value="clipboard" className="text-xs">Clipboard</TabsTrigger>
                <TabsTrigger value="counter" className="text-xs">EventListener</TabsTrigger>
              </TabsList>

              {/* 탭 1: useLocalStorage */}
              <TabsContent value="localStorage" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useLocalStorage</CardTitle>
                    <CardDescription>
                      localStorage에 데이터를 저장하고 관리하는 훅입니다.
                      페이지를 새로고침해도 값이 유지됩니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 테마 선택 버튼들 */}
                    <div>
                      <Label className="mb-3 block">선호 테마</Label>
                      <div className="flex gap-2">
                        <Button
                          variant={savedTheme === 'light' ? 'default' : 'outline'}
                          onClick={() => setSavedTheme('light')}
                        >
                          라이트
                        </Button>
                        <Button
                          variant={savedTheme === 'dark' ? 'default' : 'outline'}
                          onClick={() => setSavedTheme('dark')}
                        >
                          다크
                        </Button>
                        <Button
                          variant={savedTheme === 'auto' ? 'default' : 'outline'}
                          onClick={() => setSavedTheme('auto')}
                        >
                          자동
                        </Button>
                      </div>
                    </div>

                    {/* 저장된 값 표시 */}
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">저장된 값 (localStorage)</p>
                      <p className="font-mono text-sm">user-theme-preference: <Badge>{savedTheme}</Badge></p>
                      <p className="text-xs text-muted-foreground mt-2">
                        ℹ️ 페이지를 새로고침해도 선택값이 유지됩니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: useDebounce */}
              <TabsContent value="debounce" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useDebounce</CardTitle>
                    <CardDescription>
                      입력값을 지정된 시간(500ms) 동안 기다린 후 반영합니다.
                      검색 API 호출을 최소화할 때 유용합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 검색 입력 필드 */}
                    <div className="space-y-2">
                      <Label htmlFor="search-input">검색어 입력</Label>
                      <Input
                        id="search-input"
                        placeholder="검색어를 입력하세요"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                    </div>

                    {/* 입력값 vs 디바운스값 비교 */}
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">입력값 (즉시)</p>
                        <div className="bg-red-50 dark:bg-red-950 rounded-lg p-3">
                          <p className="text-xs font-mono">
                            {searchInput || '(비어있음)'}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">디바운스값 (500ms 후)</p>
                        <div className="bg-green-50 dark:bg-green-950 rounded-lg p-3">
                          <p className="text-xs font-mono">
                            {debouncedSearch || '(비어있음)'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-xs text-muted-foreground">
                      ℹ️ 입력을 멈춘 후 500ms가 지나야 오른쪽 값이 업데이트됩니다.
                      API 호출이 필요한 경우, debouncedSearch를 감시하면 됩니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 3: useMediaQuery */}
              <TabsContent value="mediaquery" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useMediaQuery</CardTitle>
                    <CardDescription>
                      화면 크기에 따라 반응형 컴포넌트를 제어할 때 사용합니다.
                      현재 화면 크기를 실시간으로 감지합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 현재 화면 정보 표시 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 text-center">
                        <Badge
                          variant={isMobile ? 'default' : 'outline'}
                          className="mb-2"
                        >
                          Mobile
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          max-width: 768px
                        </p>
                        <p className="font-semibold text-lg mt-2">
                          {isMobile ? '✓' : '✗'}
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <Badge
                          variant={isTablet ? 'default' : 'outline'}
                          className="mb-2"
                        >
                          Tablet
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          max-width: 1024px
                        </p>
                        <p className="font-semibold text-lg mt-2">
                          {isTablet ? '✓' : '✗'}
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <Badge
                          variant={isDesktop ? 'default' : 'outline'}
                          className="mb-2"
                        >
                          Desktop
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          min-width: 1025px
                        </p>
                        <p className="font-semibold text-lg mt-2">
                          {isDesktop ? '✓' : '✗'}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      ℹ️ 화면을 리사이징해보세요. 값이 실시간으로 업데이트됩니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 4: useToggle */}
              <TabsContent value="toggle" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useToggle</CardTitle>
                    <CardDescription>
                      boolean 값을 토글하는 간단한 훅입니다.
                      패스워드 표시/숨김, 모달 열기/닫기 등에 사용됩니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 패스워드 입력 필드 */}
                    <div className="space-y-2">
                      <Label htmlFor="toggle-password">패스워드</Label>
                      <div className="relative">
                        <Input
                          id="toggle-password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="패스워드를 입력하세요"
                          defaultValue="securePassword123"
                        />
                        <button
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => togglePasswordVisibility()}
                          title={showPassword ? '숨기기' : '표시'}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* 상태 표시 */}
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm text-muted-foreground mb-1">현재 상태</p>
                      <p className="font-mono text-sm">
                        showPassword: <Badge>{showPassword.toString()}</Badge>
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      ℹ️ 아이콘을 클릭하면 패스워드 표시/숨김이 토글됩니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 5: useCopyToClipboard */}
              <TabsContent value="clipboard" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>useCopyToClipboard</CardTitle>
                    <CardDescription>
                      텍스트를 클립보드에 복사하는 기능을 제공합니다.
                      코드 블록이나 링크 복사에 유용합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 복사할 텍스트 */}
                    <div className="space-y-2">
                      <Label>복사할 텍스트</Label>
                      <div className="bg-muted rounded-lg p-4 font-mono text-xs">
                        <div>const example = &#123;</div>
                        <div className="ml-2">name: 'useCopyToClipboard',</div>
                        <div className="ml-2">usage: 'Copy text to clipboard',</div>
                        <div>&#125;</div>
                      </div>
                    </div>

                    {/* 복사 버튼 */}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleCopy(`const example = {
  name: 'useCopyToClipboard',
  usage: 'Copy text to clipboard',
}`)}
                    >
                      {copySuccess ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          복사 완료!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          클립보드에 복사
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      ℹ️ 버튼을 클릭하면 위의 코드가 클립보드에 복사됩니다.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 6: 추가 훅 (useEventListener 등) */}
              <TabsContent value="counter" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>추가 usehooks-ts 훅들</CardTitle>
                    <CardDescription>
                      usehooks-ts 라이브러리의 기타 유용한 훅들을 소개합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* 주요 훅 목록 */}
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">useEventListener</p>
                        <p className="text-xs text-muted-foreground">
                          DOM 이벤트를 쉽게 등록/제거합니다. 메모리 누수 방지.
                        </p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">useOnClickOutside</p>
                        <p className="text-xs text-muted-foreground">
                          요소 밖 클릭을 감지합니다. 모달/드롭다운 닫기에 사용.
                        </p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">useWindowSize</p>
                        <p className="text-xs text-muted-foreground">
                          현재 윈도우 크기(width, height)를 실시간으로 반환합니다.
                        </p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">usePrevious</p>
                        <p className="text-xs text-muted-foreground">
                          이전 렌더링의 props나 state 값을 추적합니다.
                        </p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">useAsync</p>
                        <p className="text-xs text-muted-foreground">
                          비동기 함수를 간단하게 처리합니다.
                        </p>
                      </div>
                      <div className="border rounded-lg p-3">
                        <p className="font-medium text-sm mb-1">useCounter</p>
                        <p className="text-xs text-muted-foreground">
                          증감 카운터를 관리합니다. min/max 옵션 지원.
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      더 많은 훅은 <a href="https://usehooks-ts.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">usehooks-ts 공식 문서</a>를 참고하세요.
                    </p>
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
