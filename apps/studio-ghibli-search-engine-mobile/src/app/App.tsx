import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TestPage } from './screen/test';
import { AppRoutes } from './shared/app-routes.enum';
import { RootStackParamList } from './shared/root-stack-param-list.type';

const MyCustomHeader = ({ title, route }: { title: string; route: any }) => {
  console.log('route', route);

  return (
    <View style={[styles.headerContainer, { height: 60 }]}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...Platform.select({
      web: {
        position: 'absolute',
      },
    }),
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export const App = () => {
  // const history: History = createMemoryHistory();

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={AppRoutes.search}
        screenOptions={({ navigation, route }) => ({
          header: () => (
            <MyCustomHeader title={route.name} route={navigation} />
          ),
          contentStyle: {
            marginTop: Platform.select({ web: 60 }),
          },
        })}
      >
        <Stack.Screen name={AppRoutes.search} component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
