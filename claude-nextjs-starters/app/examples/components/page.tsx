'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Eye, EyeOff, Menu } from 'lucide-react'

/**
 * 컴포넌트 쇼케이스 예제 페이지
 * ShadcnUI 컴포넌트들의 모든 variant와 사용법을 보여줌
 * Dialog와 Switch 상태 관리를 위해 'use client' 선언
 */
export default function ComponentsExamplePage() {
  // Dialog 열림/닫힘 상태 관리
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Sheet 열림/닫힘 상태 관리
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // 패스워드 표시/숨김 상태 관리
  const [showPassword, setShowPassword] = useState(false)

  // 체크박스 상태 관리
  const [isChecked, setIsChecked] = useState(false)

  // 스위치 상태 관리
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              컴포넌트 쇼케이스
            </h1>
            <p className="text-muted-foreground">
              ShadcnUI 컴포넌트들의 모든 variant, size, 상태를 확인할 수 있습니다.
            </p>
          </div>
        </section>

        {/* 컴포넌트 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 5개 탭으로 컴포넌트 카테고리 구분 */}
            <Tabs defaultValue="button" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="button" className="text-xs md:text-sm">버튼</TabsTrigger>
                <TabsTrigger value="card" className="text-xs md:text-sm">카드</TabsTrigger>
                <TabsTrigger value="overlay" className="text-xs md:text-sm">오버레이</TabsTrigger>
                <TabsTrigger value="input" className="text-xs md:text-sm">입력</TabsTrigger>
                <TabsTrigger value="feedback" className="text-xs md:text-sm">피드백</TabsTrigger>
              </TabsList>

              {/* 탭 1: 버튼 */}
              <TabsContent value="button" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>버튼 Variants</CardTitle>
                    <CardDescription>모든 버튼 스타일과 크기를 확인합니다</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* 버튼 Variant 6종 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Variant (6종)</p>
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

                    {/* 버튼 Size 5종 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Size (5종)</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Button size="xs">XS</Button>
                        <Button size="sm">Small</Button>
                        <Button>Default</Button>
                        <Button size="lg">Large</Button>
                        <Button size="icon" title="Icon Button">
                          📌
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    {/* 버튼 상태 */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">States (상태)</p>
                      <div className="flex flex-wrap gap-2">
                        <Button>Normal</Button>
                        <Button disabled>Disabled</Button>
                        <Button disabled>Loading...</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: 카드 */}
              <TabsContent value="card" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 기본 카드 */}
                  <Card>
                    <CardHeader>
                      <CardTitle>기본 카드</CardTitle>
                      <CardDescription>제목, 설명, 내용이 포함된 기본 카드입니다</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        ShadcnUI Card 컴포넌트는 여러 섹션(Header, Content, Footer)으로 구성되어 있습니다.
                      </p>
                    </CardContent>
                  </Card>

                  {/* 푸터가 있는 카드 */}
                  <Card>
                    <CardHeader>
                      <CardTitle>액션 카드</CardTitle>
                      <CardDescription>푸터에 액션 버튼이 포함된 카드입니다</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        CardFooter를 사용해 버튼이나 추가 정보를 배치할 수 있습니다.
                      </p>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button size="sm" variant="outline">취소</Button>
                      <Button size="sm">확인</Button>
                    </CardFooter>
                  </Card>

                  {/* 스타일이 적용된 카드 */}
                  <Card className="border-primary bg-primary/5">
                    <CardHeader>
                      <CardTitle>스타일 카드</CardTitle>
                      <CardDescription>커스텀 색상이 적용된 카드입니다</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Tailwind className을 추가해 카드의 스타일을 커스터마이징할 수 있습니다.
                      </p>
                    </CardContent>
                  </Card>

                  {/* 컴팩트 카드 */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">컴팩트 카드</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground">
                      내부 padding을 조정해 컴팩트한 카드를 만들 수 있습니다.
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 탭 3: 오버레이 (Dialog, Sheet) */}
              <TabsContent value="overlay" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog & Sheet</CardTitle>
                    <CardDescription>모달 다이얼로그와 사이드 시트 예제</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Dialog 예제 */}
                    <div>
                      <p className="text-sm font-medium mb-3">Dialog (모달 다이얼로그)</p>
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button variant="outline">Dialog 열기</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Dialog 제목</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <p>이것은 모달 다이얼로그 예제입니다. 배경을 클릭하거나 닫기 버튼을 클릭하면 닫힙니다.</p>
                            <p className="text-sm text-muted-foreground">
                              Dialog는 사용자의 주의를 요구하는 중요한 작업에 사용됩니다.
                            </p>
                          </div>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                              취소
                            </Button>
                            <Button>확인</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <Separator />

                    {/* Sheet 예제 */}
                    <div>
                      <p className="text-sm font-medium mb-3">Sheet (사이드 시트)</p>
                      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                          <Button variant="outline">Sheet 열기</Button>
                        </SheetTrigger>
                        <SheetContent>
                          <div className="space-y-4 pt-6">
                            <h3 className="font-semibold">Sheet 제목</h3>
                            <p>이것은 사이드에서 밀려나오는 Sheet 예제입니다.</p>
                            <p className="text-sm text-muted-foreground">
                              모바일 메뉴나 사이드 패널에 자주 사용됩니다.
                            </p>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 4: 입력 (Input, Select, Checkbox, Switch) */}
              <TabsContent value="input" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>입력 컴포넌트들</CardTitle>
                    <CardDescription>텍스트 입력, 선택, 체크박스, 스위치 등</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Input 예제 */}
                    <div className="space-y-2">
                      <Label htmlFor="text-input">텍스트 Input</Label>
                      <Input id="text-input" type="text" placeholder="일반 텍스트를 입력하세요" />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <Label htmlFor="email-input">이메일 Input</Label>
                      <Input id="email-input" type="email" placeholder="example@email.com" />
                    </div>

                    {/* Password Input - 표시/숨김 토글 */}
                    <div className="space-y-2">
                      <Label htmlFor="password-input">패스워드 Input (표시/숨김 토글)</Label>
                      <div className="relative">
                        <Input
                          id="password-input"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="비밀번호를 입력하세요"
                        />
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                          title={showPassword ? '숨기기' : '표시'}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <Separator />

                    {/* Select 예제 */}
                    <div className="space-y-2">
                      <Label htmlFor="select-input">Select 드롭다운</Label>
                      <Select>
                        <SelectTrigger id="select-input">
                          <SelectValue placeholder="옵션을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">옵션 1</SelectItem>
                          <SelectItem value="option2">옵션 2</SelectItem>
                          <SelectItem value="option3">옵션 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    {/* Checkbox 예제 */}
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="checkbox"
                        checked={isChecked}
                        onCheckedChange={setIsChecked}
                      />
                      <Label htmlFor="checkbox">약관에 동의합니다 (체크됨: {isChecked.toString()})</Label>
                    </div>

                    {/* Switch 예제 */}
                    <div className="flex items-center gap-2">
                      <Switch
                        id="switch"
                        checked={isSwitchOn}
                        onCheckedChange={setIsSwitchOn}
                      />
                      <Label htmlFor="switch">알림 활성화 (활성: {isSwitchOn.toString()})</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 5: 피드백 (Badge, Avatar, Skeleton, Tooltip) */}
              <TabsContent value="feedback" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Badge (배지)</CardTitle>
                    <CardDescription>상태, 태그, 라벨을 표시하는 배지 컴포넌트</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Badge 4종 */}
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="destructive">Destructive</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Avatar (아바타)</CardTitle>
                    <CardDescription>사용자 프로필 이미지 표시</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Avatar 그룹 */}
                    <div className="flex gap-4">
                      <div className="text-center">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground mt-2">이미지 있음</p>
                      </div>
                      <div className="text-center">
                        <Avatar>
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground mt-2">폴백 텍스트</p>
                      </div>
                      <div className="text-center">
                        <Avatar>
                          <AvatarImage src="https://invalid-url.com/image.png" />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground mt-2">이미지 실패시 폴백</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skeleton (로딩 상태)</CardTitle>
                    <CardDescription>데이터 로딩 중일 때 표시하는 placeholder</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Skeleton 패턴 1: 텍스트 로딩 */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>

                    {/* Skeleton 패턴 2: 블록 로딩 */}
                    <Skeleton className="h-20 w-full rounded-lg" />

                    {/* Skeleton 패턴 3: 아바타 + 텍스트 */}
                    <div className="flex gap-4">
                      <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tooltip (툴팁)</CardTitle>
                    <CardDescription>마우스 호버시 추가 정보 표시</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Tooltip 예제 */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover 해보세요</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>이것은 Tooltip입니다!</p>
                      </TooltipContent>
                    </Tooltip>
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
