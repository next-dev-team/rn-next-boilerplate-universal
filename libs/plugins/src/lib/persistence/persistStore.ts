import { createState } from '@hookstate/core';
import { PersistorWrapper } from 'hookstate-persist';

/**
 * createStatePersist - createState with persist
 * @param store
 */
export const createStatePersist = <S>(store: S) => {
  const initStore = PersistorWrapper(store);
  return createState(initStore);
};
