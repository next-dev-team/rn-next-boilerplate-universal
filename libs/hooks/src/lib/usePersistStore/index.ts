import { useState } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePersistor from 'hookstate-persist';

type IPersistStore<E> = {
  store: any;
  key: string;
  whitelist?: E[];
};

/**
 *  persistStore
 *  @usage - before render
 *  persistStore({ key: 'useSettingsStore', state, whitelist: ['counter'] });
 */
export const usePersistStore = <E, S>({
  store,
  key,
  whitelist = [],
}: IPersistStore<E>) => {
  const state = useState(store as S);

  // create the peristor plugin
  const persistor = CreatePersistor({
    key,
    engine: AsyncStorage,
    whitelist: whitelist as unknown as string[],
  });

  state.attach(persistor);

  return {
    state,
  };
};
