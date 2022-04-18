import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import App from './root';

const MyCustomHeader = ({ title, route }: { title: string; route: any }) => {
  return (
    <View style={[styles.headerContainer, { height: 40 }]}>
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

export const AppRoot = () => {
  return <App />;
};

export default AppRoot;
