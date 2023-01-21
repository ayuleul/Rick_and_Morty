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
      bg="$primary"
      borderRadius="xs"
      paddingVertical="sm"
      justifyContent="center"
      alignItems="center"
      {...containerStyle}>
      <Text color="$onBackground" {...titleStyle}>
        {title}
      </Text>
    </Touchable>
  );
};

export default Button;
