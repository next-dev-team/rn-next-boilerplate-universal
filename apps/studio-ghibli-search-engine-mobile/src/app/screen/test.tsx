import '@next-dev-team/twrnc-web.macro';
import { useTailwindStyles } from '@next-dev-team/twrnc-web.macro';
import { useHomeStore } from '@studio-ghibli-search-engine/store';
import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

export const TestPage = () => {
  const { counter, inc, dec } = useHomeStore();
  const { height } = useWindowDimensions();
  const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';

  const { container } = useTailwindStyles(
    (tw) => ({
      container: [
        tw`items-center justify-center bg-primary`,
        isMobile ? tw`flex-1` : { height: height - 40 },
      ],
    }),
    [isMobile, height]
  );

  return (
    <View tw="bg-pink-200 p-10 m-6 rounded-xl">
      <Text tw="font-bold mb-2 text-center">Home</Text>

      <TouchableOpacity
        onPress={() => dec()}
        tw="px-8 py-4 rounded-xl bg-blue-800"
      >
        <Text tw="text-white text-center web:(text-xs)">-</Text>
      </TouchableOpacity>
      <Text tw="text-black py-2 text-center font-bold">{counter}</Text>

      <TouchableOpacity
        onPress={() => inc()}
        tw="px-8 py-4 rounded-xl bg-blue-800"
      >
        <Text tw="text-white text-center web:(text-xs)">+</Text>
      </TouchableOpacity>
    </View>
  );
};
