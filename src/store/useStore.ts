import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const initialCount = 0;

export const useStore = create<CounterState>()(
  immer((set) => ({
    count: initialCount,
    increment: () =>
      set((state) => {
        state.count += 1;
      }),
    decrement: () =>
      set((state) => {
        state.count -= 1;
      }),
    reset: () =>
      set((state) => {
        state.count = initialCount;
      }),
  })),
);
