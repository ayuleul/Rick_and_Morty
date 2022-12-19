import React, {ReactElement} from 'react';

import {isIos} from '@app/helpers';
import Pressable, {PressableProps} from '../atoms/pressable';
import {ColorValue} from 'react-native';

interface ITouchable extends PressableProps {
  children: ReactElement;
  rippleRadius?: number;
  rippleColor?: ColorValue;
}

const Touchable = ({
  children,
  rippleRadius = 0,
  rippleColor,
  ...props
}: ITouchable) => {
  return (
    <Pressable
      android_ripple={{color: 'rippleColor', radius: rippleRadius}}
      style={({pressed}) => [
        pressed &&
          isIos && {
            backgroundColor: rippleColor,
          },
        {opacity: pressed ? 0.7 : 1},
      ]}
      justifyContent="center"
      {...props}>
      {children}
    </Pressable>
  );
};

export default Touchable;
