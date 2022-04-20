import { usePersistStore } from '@studio-ghibli-search-engine/hooks';
import { createStatePersist } from '@studio-ghibli-search-engine/plugins';

type IStore = {
  counter: number;
};

const initStore: IStore = {
  counter: 1,
};

type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>(initStore);

export function useHomeStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useHomeStore',
    store,
    whitelist: ['counter'],
  });

  return {
    inc: (by = 1) => {
      state.counter.set((p) => p + by);
    },
    dec: (by = 1) => {
      state.counter.set((p) => p - by);
    },
    get counter() {
      return state.counter.get();
    },
  } as const;
}
