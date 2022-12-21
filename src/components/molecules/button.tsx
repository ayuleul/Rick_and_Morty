import React from 'react';
import {Pressable, Text} from '../atoms';

interface IButton {
  title: string;
  id: string;
  isSelected: boolean;
  handleOnPress: (id: string, value: string) => void;
}

const Button: React.FC<IButton> = ({
  title,
  id,
  isSelected = false,
  handleOnPress,
}) => {
  return (
    <Pressable
      onPress={() => handleOnPress(id, title)}
      p="sm"
      m="sm"
      borderRadius="xs"
      bg={isSelected ? '$primary' : '$white'}>
      <Text color={!isSelected ? '$primary' : '$white'}>{title}</Text>
    </Pressable>
  );
};

export default Button;
