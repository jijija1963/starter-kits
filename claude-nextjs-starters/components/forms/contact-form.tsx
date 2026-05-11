'use client'

// react-hook-form + zod 조합 폼 처리 예시
// 문의 폼: 이름, 이메일, 메시지 필드
// 제출 시 sonner toast로 피드백
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import type { ContactFormData } from '@/types'

/**
 * zod 유효성 검사 스키마 정의
 * 이름: 최소 2자, 이메일: 유효한 이메일, 메시지: 최소 10자
 */
const contactSchema = z.object({
  name: z
    .string()
    .min(2, '이름은 최소 2자 이상이어야 합니다')
    .max(50, '이름은 최대 50자 이하여야 합니다'),
  email: z
    .string()
    .email('유효한 이메일 주소를 입력해주세요'),
  message: z
    .string()
    .min(10, '메시지는 최소 10자 이상이어야 합니다')
    .max(500, '메시지는 최대 500자 이하여야 합니다'),
})

/**
 * 문의 폼 컴포넌트
 * react-hook-form으로 상태 관리, zod로 유효성 검사
 * 제출 성공/실패 시 sonner toast 표시
 */
export function ContactForm() {
  // react-hook-form 초기화
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  /**
   * 폼 제출 핸들러
   * react-hook-form이 유효성 검사 통과 후 호출
   * @param formData - 유효성 검사를 통과한 폼 데이터
   */
  const onSubmit = async (formData: ContactFormData) => {
    try {
      // 제출 데이터 확인 (개발 환경에서만 출력)
      console.info('[ContactForm] 제출 데이터:', formData)

      /*
       * 실제 API 연동 예시 (주석 해제 후 사용):
       *
       * const response = await fetch('/api/contact', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(formData),
       * })
       *
       * if (!response.ok) {
       *   throw new Error('서버 오류가 발생했습니다')
       * }
       */

      // API 호출 시뮬레이션 (500ms 지연)
      await new Promise((resolve) => setTimeout(resolve, 500))

      // 성공 토스트 표시
      toast.success('메시지가 전송되었습니다! 곧 답변하겠습니다.')

      // 폼 초기화
      reset()
    } catch {
      // 실패 토스트 표시
      toast.error('메시지 전송에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
      {/* 이름 필드 */}
      <div className="space-y-2">
        <Label htmlFor="name">이름</Label>
        <Input
          id="name"
          placeholder="홍길동"
          {...register('name')}
          className={cn(
            'transition-colors',
            errors.name && 'border-destructive focus-visible:ring-destructive'
          )}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* 이메일 필드 */}
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          {...register('email')}
          className={cn(
            'transition-colors',
            errors.email && 'border-destructive focus-visible:ring-destructive'
          )}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* 메시지 필드 */}
      <div className="space-y-2">
        <Label htmlFor="message">메시지</Label>
        <textarea
          id="message"
          placeholder="메시지를 입력해주세요"
          rows={5}
          {...register('message')}
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
            errors.message && 'border-destructive focus-visible:ring-destructive'
          )}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? '전송 중...' : '메시지 전송'}
      </Button>

      {/* 추가 정보 */}
      <p className="text-xs text-muted-foreground text-center">
        회원가입함으로써 서비스 약관에 동의합니다.
      </p>
    </form>
  )
}
