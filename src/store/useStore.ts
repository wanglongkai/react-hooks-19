import { create } from 'zustand';
import { produce } from 'immer';

interface counterState {
  value: {
    count: number;
  };
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<counterState>((set) => ({
  value: {
    count: 0,
  },
  increment: () =>
    set(
      produce((state) => {
        state.value.count += 1;
      }),
    ),
  decrement: () =>
    set(
      produce((state) => {
        state.value.count -= 1;
      }),
    ),
  reset: () =>
    set(
      produce((state) => {
        state.value.count = 0;
      }),
    ),
}));
