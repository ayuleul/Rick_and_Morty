import {Theme} from '@app/themes';
import {ColorProps, useResponsiveProp, useTheme} from '@shopify/restyle';
import * as React from 'react';
import Material from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

export type IconProps = React.ComponentProps<typeof Material>;
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>;

export const MaterialIcons: React.FC<Props> = ({
  color = '$foreground',
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];
  return <Material {...rest} color={vColor} />;
};

export const OcticonsIcons: React.FC<Props> = ({
  color = '$foreground',
  ...rest
}) => {
  const theme = useTheme<Theme>();
  const colorProp = useResponsiveProp(color);
  const vColor = theme.colors[colorProp || '$foreground'];
  return <Octicons {...rest} color={vColor} />;
};
