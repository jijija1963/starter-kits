'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { Counter } from '@/components/counter'
import { ExampleForm } from '@/components/example-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Code2, Zap, Settings, BookOpen } from 'lucide-react'

/**
 * 예시 컴포넌트 및 UI 라이브러리 쇼케이스 페이지
 * 상태 관리(Zustand), 폼 처리(React Hook Form + Zod), shadcn/ui 컴포넌트들의 실제 사용 예시를 보여줍니다.
 * @returns 예시 페이지
 */
export default function ExamplesPage() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="w-full">
      {/* 페이지 타이틀 섹션 */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 sm:py-32">
        <Container>
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Code2 className="h-4 w-4" />
              <span className="text-sm font-medium">라이브러리 사용 예시</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              예시 모음
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              스타터킷에 설치된 라이브러리와 UI 컴포넌트들의 실제 사용 예시입니다.
              각 섹션을 통해 패턴을 학습하고 자신의 프로젝트에 적용해보세요.
            </p>
          </div>
        </Container>
      </section>

      {/* 메인 콘텐츠 */}
      <main className="py-12 sm:py-16">
        {/* 상태 관리 & 폼 섹션 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">상태 관리 & 폼 처리</h2>
              <p className="mt-2 text-muted-foreground">
                Zustand을 사용한 상태 관리와 React Hook Form + Zod을 사용한 폼 유효성 검사 예시입니다.
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
          </Container>
        </section>

        <div className="py-8">
          <Container>
            <Separator />
          </Container>
        </div>

        {/* Button 컴포넌트 쇼케이스 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Button 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                다양한 variant, size, 상태를 가진 버튼들입니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Default</CardTitle>
                  <CardDescription>기본 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>클릭하기</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Outline</CardTitle>
                  <CardDescription>테두리 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">테두리 버튼</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Secondary</CardTitle>
                  <CardDescription>보조 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary">보조 버튼</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Destructive</CardTitle>
                  <CardDescription>위험 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive">삭제</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Ghost</CardTitle>
                  <CardDescription>투명 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost">투명 버튼</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Link</CardTitle>
                  <CardDescription>링크 스타일 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link">링크 버튼</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Size: LG</CardTitle>
                  <CardDescription>큰 사이즈 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg">큰 버튼</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Size: SM</CardTitle>
                  <CardDescription>작은 사이즈 버튼</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm">작은 버튼</Button>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Input & Label 컴포넌트 쇼케이스 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Input & Label 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                폼 입력 필드와 라벨의 기본 사용법입니다.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">기본 입력 필드</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    placeholder="이름을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  {inputValue && (
                    <p className="text-sm text-muted-foreground">입력된 값: {inputValue}</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">비활성화된 입력 필드</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    disabled
                  />
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Dialog 컴포넌트 쇼케이스 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Dialog 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                모달 다이얼로그 컴포넌트의 사용 예시입니다.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">기본 다이얼로그</CardTitle>
                <CardDescription>버튼을 클릭하여 다이얼로그를 열 수 있습니다</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger>
                    <Button>다이얼로그 열기</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>다이얼로그 제목</DialogTitle>
                      <DialogDescription>
                        이것은 다이얼로그의 설명 텍스트입니다. 모달 형태로 사용자의 주의를 집중시킵니다.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="dialog-name">이름</Label>
                        <Input id="dialog-name" placeholder="이름을 입력하세요" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <DialogClose>
                        <Button variant="outline">취소</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button>확인</Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* Dropdown Menu 컴포넌트 쇼케이스 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Dropdown Menu 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                드롭다운 메뉴 컴포넌트의 사용 예시입니다.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">기본 드롭다운 메뉴</CardTitle>
                <CardDescription>버튼을 클릭하여 메뉴를 열 수 있습니다</CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      설정
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>옵션</DropdownMenuLabel>
                    <DropdownMenuItem>프로필 설정</DropdownMenuItem>
                    <DropdownMenuItem>계정 설정</DropdownMenuItem>
                    <DropdownMenuItem>도움말</DropdownMenuItem>
                    <DropdownMenuItem>로그아웃</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* Card 컴포넌트 쇼케이스 */}
        <section className="mb-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Card 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                Card 컴포넌트의 다양한 사용 예시입니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    빠른 성능
                  </CardTitle>
                  <CardDescription>최적화된 번들 크기</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    이 스타터킷은 성능을 최우선으로 고려하여 설계되었습니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    잘 정리된 문서
                  </CardTitle>
                  <CardDescription>상세한 주석과 예시</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    모든 코드에는 상세한 JSDoc 주석이 포함되어 있습니다.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    타입 안전성
                  </CardTitle>
                  <CardDescription>TypeScript 완벽 지원</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    TypeScript를 통해 런타임 오류를 사전에 방지합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Separator 컴포넌트 쇼케이스 */}
        <section>
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Separator 컴포넌트</h2>
              <p className="mt-2 text-muted-foreground">
                콘텐츠를 구분하는 구분선 컴포넌트입니다.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">세로 구분선</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-semibold">좌측 섹션</p>
                    <p className="text-sm text-muted-foreground">이것은 좌측 콘텐츠입니다</p>
                  </div>
                  <Separator orientation="vertical" className="h-20" />
                  <div className="flex-1">
                    <p className="font-semibold">우측 섹션</p>
                    <p className="text-sm text-muted-foreground">이것은 우측 콘텐츠입니다</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </section>
      </main>
    </div>
  )
}
