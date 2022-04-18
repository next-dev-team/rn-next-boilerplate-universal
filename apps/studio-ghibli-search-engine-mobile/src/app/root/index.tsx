import { TailwindProvider } from '@next-dev-team/twrnc-web.macro';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './appContainer';
import './logBox';

// enableFlipperApolloDevtools(client);

const App = () => {
  return (
    <SafeAreaProvider>
      <TailwindProvider>
        <AppContainer />
      </TailwindProvider>
    </SafeAreaProvider>
  );
};

export default App;
