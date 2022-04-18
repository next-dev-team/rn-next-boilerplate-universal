import { TailwindProvider } from '@studio-ghibli-search-engine/store';
import React, { ReactNode } from 'react';

const UIProvider = ({ children }: { children: ReactNode }) => {
  return <TailwindProvider>{children}</TailwindProvider>;
};

export default UIProvider;
