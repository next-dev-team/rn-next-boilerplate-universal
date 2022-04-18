import { useTailwindStyles } from '@next-dev-team/twrnc-web.macro';
import React from 'react';
import { Platform, StatusBar, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const Container = ({ children }: { children: React.ReactNode }) => {
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
  const { height } = useWindowDimensions();

  const { container } = useTailwindStyles(
    (tw) => ({
      container: isMobile ? tw`flex-1` : { height },
    }),
    [height, isMobile]
  );
  return (
    <>
      {isMobile && (
        <StatusBar
        // barStyle={true ? 'light-content' : 'dark-content'}
        // backgroundColor={twColor(`bg-white dark:bg-dark`)}
        />
      )}
      <SafeAreaView edges={['top', 'left', 'right']} style={container}>
        {children}
      </SafeAreaView>
    </>
  );
};
