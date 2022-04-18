import '@next-dev-team/twrnc-web.macro';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { TestPage } from '../screen/test';
import { RootStackParamList } from './type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CustomHeader = ({ title }: { title: string }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      tw="justify-center bg-primary px-4 h-10"
      style={{
        marginHorizontal:
          (width >= 1500 && '30%') || (width >= 769 && '25%') || 0,
        width: (width >= 1500 && '40%') || (width >= 769 && '50%') || '100%',
      }}
    >
      <Text>{title}</Text>
    </View>
  );
};

const AppNavigation = () => {
  const { width } = useWindowDimensions();
  return (
    <Stack.Navigator
      initialRouteName="TestPage"
      // will apply to all option style except some screen has own own option
      screenOptions={{
        headerShown: true,
        contentStyle: {
          backgroundColor: 'red',
          marginHorizontal:
            (width >= 1500 && '30%') || (width >= 769 && '25%') || 0,
        },
      }}
    >
      <Stack.Screen
        options={{
          header: ({ route, options }) => <CustomHeader title={route.name} />,
        }}
        name="TestPage"
        component={TestPage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
