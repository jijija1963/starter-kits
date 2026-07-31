import { create } from 'zustand'

/**
 * 카운터 스토어 타입 정의
 * @property count - 현재 카운트 값
 * @property increment - 카운트 증가 함수
 * @property decrement - 카운트 감소 함수
 * @property reset - 카운트 초기화 함수
 */
interface CounterStore {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

/**
 * Zustand를 이용한 전역 카운터 상태 관리 스토어
 * 간단한 카운트 상태와 상태 변경 함수들을 제공합니다.
 * @returns 카운터 스토어 인스턴스
 */
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
