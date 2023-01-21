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
      <Text color="$onSurface" fontWeight="bold" mb="xs">
        {title}
      </Text>
      <Box flexDirection="row">
        {buttons.map(item => {
          return (
            <Button
              key={item}
              handleOnPress={() => handleOnPress(id, item)}
              title={item}
              // eslint-disable-next-line react-native/no-inline-styles
              containerStyle={{
                m: 'sm',
                p: 'sm',
                bg: 'white',
                borderColor: '$primary',
                borderWidth: selected === item ? 1 : 0,
              }}
              // eslint-disable-next-line react-native/no-inline-styles
              titleStyle={{
                color: '$primary',
              }}
            />
          );
        })}
      </Box>
      <Divider height={0.4} />
    </Box>
  );
};

export default ButtonGroup;
