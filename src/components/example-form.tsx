'use client'

import { FormEvent, useState } from 'react'
import { exampleFormSchema, type ExampleFormInput } from '@/lib/validations/example-form.schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'

/**
 * 예시 폼 컴포넌트
 * React Hook Form 없이 기본 상태관리와 Zod 검증으로 폼을 처리합니다.
 * React Hook Form의 사용법은 프로젝트 구조에서 배울 수 있습니다.
 * @returns 폼 컴포넌트
 */
export function ExampleForm() {
  const [formData, setFormData] = useState<Partial<ExampleFormInput>>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ExampleFormInput, string>>>({})
  const [isLoading, setIsLoading] = useState(false)

  /**
   * 폼 입력 변경 핸들러
   * @param e - input 이벤트
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // 입력 시 해당 필드의 에러 제거
    if (errors[name as keyof ExampleFormInput]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  /**
   * 폼 제출 핸들러
   * @param e - form 이벤트
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      // Zod로 유효성 검사
      const validData = exampleFormSchema.parse(formData)

      console.log('제출된 데이터:', validData)
      toast.success('폼이 성공적으로 제출되었습니다!', {
        description: `${validData.name}님의 메시지를 받았습니다.`,
      })

      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      if (error instanceof Error && 'errors' in error) {
        // Zod 검증 에러 처리
        const zodError = error as Record<string, unknown>
        const errorArray = zodError.errors as Array<{ path: string[]; message: string }>
        const newErrors: Record<string, string> = {}
        errorArray?.forEach((err) => {
          newErrors[err.path[0]] = err.message
        })
        setErrors(newErrors)
      } else {
        toast.error('폼 제출 중 오류가 발생했습니다.')
        console.error(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>예시 폼</CardTitle>
        <CardDescription>Zod + shadcn/ui 연동 데모</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              placeholder="이름을 입력하세요"
              value={formData.name || ''}
              onChange={handleChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
            <p className="text-xs text-muted-foreground">2글자 이상 50글자 이하</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email || ''}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">메시지</Label>
            <Input
              id="message"
              name="message"
              placeholder="메시지를 입력하세요"
              value={formData.message || ''}
              onChange={handleChange}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message}</p>
            )}
            <p className="text-xs text-muted-foreground">5글자 이상 500글자 이하</p>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? '제출 중...' : '제출'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
