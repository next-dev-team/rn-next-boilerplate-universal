import { useHomeStore } from '@studio-ghibli-search-engine/store';
import React from 'react';
import { Button } from 'react-native';

export const TestPage = () => {
  const { counter, inc } = useHomeStore();
  return (
    <Button
      title={String(counter)}
      onPress={() => {
        inc();
      }}
    />
  );
};
