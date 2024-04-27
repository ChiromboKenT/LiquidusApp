import { spacing } from '@theme/index';
import React from 'react';
import { Image, ImageProps, ImageStyle } from 'react-native';

interface AppImageProps extends ImageProps {
  borderRadius?: number;
  style?: ImageStyle;
}

export const AppImage: React.FC<AppImageProps> = ({
  borderRadius = spacing.sm,
  style,
  ...props
}) => {
  return <Image style={[{ borderRadius }, style]} {...props} />;
};
