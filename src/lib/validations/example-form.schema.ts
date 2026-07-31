import { z } from 'zod'

/**
 * 예시 폼 유효성 검사 스키마
 * React Hook Form과 함께 사용됩니다.
 */
export const exampleFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: '이름은 최소 2글자 이상이어야 합니다.' })
    .max(50, { message: '이름은 50글자 이하여야 합니다.' }),
  email: z
    .string()
    .email({ message: '유효한 이메일 주소를 입력하세요.' }),
  message: z
    .string()
    .min(5, { message: '메시지는 최소 5글자 이상이어야 합니다.' })
    .max(500, { message: '메시지는 500글자 이하여야 합니다.' }),
})

/**
 * 폼 데이터 타입
 * exampleFormSchema로부터 자동 추출된 TypeScript 타입입니다.
 */
export type ExampleFormInput = z.infer<typeof exampleFormSchema>
