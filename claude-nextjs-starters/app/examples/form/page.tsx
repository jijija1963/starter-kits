'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from '@/components/forms/contact-form'

/**
 * 폼 예제 페이지
 * react-hook-form + zod를 사용한 3가지 폼 패턴을 보여줌
 * 1. 기본 문의 폼 (기존 ContactForm 재사용)
 * 2. 로그인 폼 (이메일 + 비밀번호)
 * 3. 다단계 폼 (여러 단계로 진행)
 */
export default function FormExamplePage() {
  // 다단계 폼 현재 단계 상태
  const [currentStep, setCurrentStep] = useState(1)

  // 다단계 폼 데이터 저장
  const [stepData, setStepData] = useState({
    name: '',
    email: '',
    position: '',
    company: '',
  })

  // 로그인 폼 Zod 스키마 정의
  const loginSchema = z.object({
    email: z.string().email('유효한 이메일을 입력해주세요'),
    password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
  })

  type LoginFormData = z.infer<typeof loginSchema>

  // 로그인 폼 useForm 설정
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 로그인 폼 제출 핸들러
  const onLoginSubmit = async (data: LoginFormData) => {
    // API 호출 시뮬레이션 (500ms 지연)
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success('로그인 성공! 환영합니다.')
    loginForm.reset()
  }

  // 다단계 폼 Step 1 제출 핸들러
  const handleStep1Next = () => {
    // Step 1 데이터 검증
    if (!stepData.name.trim()) {
      toast.error('이름을 입력해주세요')
      return
    }
    if (!stepData.email.trim()) {
      toast.error('이메일을 입력해주세요')
      return
    }
    // Step 1 통과 → Step 2로 이동
    setCurrentStep(2)
  }

  // 다단계 폼 Step 2 제출 핸들러
  const handleStep2Next = () => {
    // Step 2 데이터 검증
    if (!stepData.position.trim()) {
      toast.error('직책을 입력해주세요')
      return
    }
    // Step 2 통과 → Step 3 (확인) 으로 이동
    setCurrentStep(3)
  }

  // 다단계 폼 최종 제출 핸들러
  const handleStep3Submit = async () => {
    // API 호출 시뮬레이션 (500ms 지연)
    await new Promise((resolve) => setTimeout(resolve, 500))
    toast.success('정보가 등록되었습니다!')
    // 폼 초기화
    setStepData({ name: '', email: '', position: '', company: '' })
    setCurrentStep(1)
  }

  // 단계 이전 버튼 핸들러
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* 상단 헤더 섹션 */}
        <section className="py-12 border-b bg-muted/50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              폼 예제
            </h1>
            <p className="text-muted-foreground">
              react-hook-form과 zod를 활용한 다양한 폼 패턴들을 학습합니다.
            </p>
          </div>
        </section>

        {/* 폼 예제 탭 섹션 */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* 3개 탭으로 폼 예제 분류 */}
            <Tabs defaultValue="contact" className="w-full">
              {/* 탭 네비게이션 */}
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact">문의 폼</TabsTrigger>
                <TabsTrigger value="login">로그인 폼</TabsTrigger>
                <TabsTrigger value="multistep">다단계 폼</TabsTrigger>
              </TabsList>

              {/* 탭 1: 문의 폼 (기존 ContactForm 재사용) */}
              <TabsContent value="contact" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>기본 문의 폼</CardTitle>
                    <CardDescription>
                      이름, 이메일, 메시지를 받는 기본 문의 폼입니다.
                      react-hook-form과 zod의 유효성 검사가 적용됩니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* 기존 ContactForm 컴포넌트 재사용 */}
                    <ContactForm />
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 2: 로그인 폼 */}
              <TabsContent value="login" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>로그인 폼</CardTitle>
                    <CardDescription>
                      이메일과 비밀번호 유효성 검사가 포함된 로그인 폼입니다.
                      비밀번호는 최소 8자 이상이어야 합니다.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                      {/* 이메일 입력 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="login-email">이메일</Label>
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="example@email.com"
                          {...loginForm.register('email')}
                          className={loginForm.formState.errors.email ? 'border-destructive' : ''}
                        />
                        {/* 에러 메시지 표시 */}
                        {loginForm.formState.errors.email && (
                          <p className="text-sm text-destructive">
                            {loginForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* 비밀번호 입력 필드 */}
                      <div className="space-y-2">
                        <Label htmlFor="login-password">비밀번호</Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="최소 8자 이상"
                          {...loginForm.register('password')}
                          className={loginForm.formState.errors.password ? 'border-destructive' : ''}
                        />
                        {/* 에러 메시지 표시 */}
                        {loginForm.formState.errors.password && (
                          <p className="text-sm text-destructive">
                            {loginForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      {/* 제출 버튼 - 제출 중에는 로딩 상태 표시 */}
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loginForm.formState.isSubmitting}
                      >
                        {loginForm.formState.isSubmitting ? '로그인 중...' : '로그인'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 탭 3: 다단계 폼 */}
              <TabsContent value="multistep" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>다단계 폼</CardTitle>
                    <CardDescription>
                      3개의 단계로 진행되는 다단계 폼 예제입니다.
                      현재 단계: <Badge className="ml-2">{currentStep}/3</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* 진행 상태 표시 */}
                    <div className="mb-6 space-y-2">
                      <div className="text-sm font-medium">진행 상황</div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((step) => (
                          <div
                            key={step}
                            className={`h-2 flex-1 rounded-full transition-colors ${
                              step <= currentStep ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Step 1: 기본 정보 */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Step 1: 기본 정보</h3>
                        <div className="space-y-2">
                          <Label htmlFor="step1-name">이름 *</Label>
                          <Input
                            id="step1-name"
                            placeholder="이름을 입력하세요"
                            value={stepData.name}
                            onChange={(e) =>
                              setStepData({ ...stepData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="step1-email">이메일 *</Label>
                          <Input
                            id="step1-email"
                            type="email"
                            placeholder="example@email.com"
                            value={stepData.email}
                            onChange={(e) =>
                              setStepData({ ...stepData, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button
                            variant="outline"
                            className="flex-1"
                            disabled
                          >
                            이전
                          </Button>
                          <Button
                            className="flex-1"
                            onClick={handleStep1Next}
                          >
                            다음
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 2: 추가 정보 */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Step 2: 추가 정보</h3>
                        <div className="space-y-2">
                          <Label htmlFor="step2-position">직책 *</Label>
                          <Input
                            id="step2-position"
                            placeholder="예: 개발자, 디자이너"
                            value={stepData.position}
                            onChange={(e) =>
                              setStepData({ ...stepData, position: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="step2-company">회사 (선택사항)</Label>
                          <Input
                            id="step2-company"
                            placeholder="회사명을 입력하세요"
                            value={stepData.company}
                            onChange={(e) =>
                              setStepData({ ...stepData, company: e.target.value })
                            }
                          />
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={handlePrevious}
                          >
                            이전
                          </Button>
                          <Button
                            className="flex-1"
                            onClick={handleStep2Next}
                          >
                            다음
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: 확인 및 제출 */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Step 3: 확인</h3>
                        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">이름</p>
                            <p className="font-medium">{stepData.name}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="text-sm text-muted-foreground">이메일</p>
                            <p className="font-medium">{stepData.email}</p>
                          </div>
                          <Separator />
                          <div>
                            <p className="text-sm text-muted-foreground">직책</p>
                            <p className="font-medium">{stepData.position}</p>
                          </div>
                          {stepData.company && (
                            <>
                              <Separator />
                              <div>
                                <p className="text-sm text-muted-foreground">회사</p>
                                <p className="font-medium">{stepData.company}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={handlePrevious}
                          >
                            이전
                          </Button>
                          <Button
                            className="flex-1"
                            onClick={handleStep3Submit}
                          >
                            제출
                          </Button>
                        </div>
                      </div>
                    )}
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
