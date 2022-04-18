import { useStoreTheme } from '@studio-ghibli-search-engine/store';
import React, { ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type IBoxVariant = 'useTouchOpacity' | 'view' | 'scroll';
export type IBox = {
  children?: ReactNode;
  className?: string;
  variant?: IBoxVariant;
  useTouchOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
  touchOpacityProps?: TouchableOpacityProps;
} & Partial<Pick<TouchableOpacityProps, 'onPress'> & ViewProps>;

export const Box = ({
  variant = 'view',
  useTouchOpacity,
  children,
  className = '',
  onPress,
  touchOpacityProps,
  style,
  ...rest
}: IBox) => {
  const { twStyle } = useStoreTheme();

  const viewBox = (
    <View style={[twStyle(`${className}`), style]} {...rest}>
      {children}
    </View>
  );

  const scrollViewBox = (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[twStyle(className), style]}
      {...rest}
    >
      {children}
    </ScrollView>
  );

  const renderBox = {
    useTouchOpacity: (
      <TouchableOpacity activeOpacity={0.8} {...{ onPress, touchOpacityProps }}>
        {viewBox}
      </TouchableOpacity>
    ),
    view: viewBox,
    scroll: scrollViewBox,
  } as Record<IBoxVariant, any>;

  return renderBox?.[useTouchOpacity ? 'useTouchOpacity' : variant] || null;
};
