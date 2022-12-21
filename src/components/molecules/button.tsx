import React from 'react';
import {Text} from '../atoms';
import {PressableProps} from '../atoms/pressable';
import {TextProps} from '../atoms/text';
import Touchable from './touchable';

interface IButton {
  title: string;
  handleOnPress: () => void;
  containerStyle?: PressableProps;
  titleStyle?: TextProps;
}

const Button: React.FC<IButton> = ({
  title,
  handleOnPress,
  containerStyle,
  titleStyle,
}) => {
  return (
    <Touchable
      onPress={handleOnPress}
      // width={80}
      bg="$primary"
      borderRadius="xs"
      paddingVertical="sm"
      justifyContent="center"
      alignItems="center"
      {...containerStyle}>
      <Text color="$white" {...titleStyle}>
        {title}
      </Text>
    </Touchable>
  );
};

export default Button;
