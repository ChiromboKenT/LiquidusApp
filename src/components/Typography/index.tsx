import { colors, typography } from '@theme/index';
import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

// The typography component is a wrapper around the Text component
// We extend the TextProps interface to add our own props

interface TypographyProps extends TextProps {
  variant?: keyof typeof typography;
  color?: keyof typeof colors;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'default',
  color = 'gray_strong',
  style,
  ...props
}) => {
  const textStyle = StyleSheet.flatten([
    { ...typography[variant], color: colors[color] },
    style,
  ]) as TextStyle;

  return <Text style={textStyle} {...props} />;
};

// Specific typography variants that would be used in the app
// We pass the variant prop to the Typography component
export const LogoText: React.FC<TypographyProps> = props => (
  <Typography variant="logo" {...props} />
);
export const HeaderText: React.FC<TypographyProps> = props => (
  <Typography variant="header" {...props} />
);

export const TitleText: React.FC<TypographyProps> = props => (
  <Typography variant="title" {...props} />
);

export const BodyText: React.FC<TypographyProps> = props => (
  <Typography variant="body" {...props} />
);

export const CaptionText: React.FC<TypographyProps> = props => (
  <Typography variant="caption" {...props} />
);

export const ButtonText: React.FC<TypographyProps> = props => (
  <Typography variant="button" {...props} />
);

export const SubtitleText: React.FC<TypographyProps> = props => (
  <Typography variant="subtitle" {...props} />
);
