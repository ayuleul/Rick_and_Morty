import React from 'react';
import {Box, Text} from '../atoms';
import {Button, Divider} from '../molecules';

interface IButtonGroup {
  buttons: string[];
  title: string;
  selected: string;
  id: string;
  handleOnPress: (id: string, value: string) => void;
}

const ButtonGroup: React.FC<IButtonGroup> = ({
  buttons,
  selected,
  id,
  title,
  handleOnPress,
}) => {
  return (
    <Box mb="md">
      <Text fontWeight="bold" mb="xs">
        {title}
      </Text>
      <Box flexDirection="row">
        {buttons.map(item => {
          return (
            <Button
              key={item}
              id={id}
              handleOnPress={handleOnPress}
              title={item}
              isSelected={selected === item}
            />
          );
        })}
      </Box>
      <Divider height={0.4} />
    </Box>
  );
};

export default ButtonGroup;
