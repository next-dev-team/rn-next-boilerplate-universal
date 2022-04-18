import { NavigationContainer } from '@react-navigation/native';
import { Container } from '@studio-ghibli-search-engine/ui';
import { delay } from 'lodash';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppNavigation } from '../../navigation';
import { linkingApp, navigationRef } from '../../services';

const NavigationRoot = ({ isReady }: { isReady: boolean }) => {
  // const { twColor } = useApp();

  // if (isReady) {
  //   return (
  //     <Box className="h-full w-full bg-primary justify-center items-center">
  //       <ActivityIndicator color={twColor(`text-white`)} size="large" />
  //     </Box>
  //   );
  // }
  return (
    <Container>
      <View
        style={[
          {
            flex: 1,
          },
        ]}
      >
        <AppNavigation />
      </View>
    </Container>
  );
};

const AppContainer = () => {
  const [isReady, setIsReady] = React.useState(true);

  return (
    <NavigationContainer
      // theme={darkMode ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      fallback={<ActivityIndicator />}
      linking={linkingApp}
      onReady={() => {
        delay(() => {
          setIsReady(false);
        }, 300);
      }}
    >
      <NavigationRoot isReady={isReady} />
    </NavigationContainer>
  );
};

export default AppContainer;
