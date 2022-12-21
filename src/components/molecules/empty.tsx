import React from 'react';
import {Box, Text} from '../atoms';

interface IEmpty {
  name: string;
}

const Empty: React.FC<IEmpty> = ({name}) => {
  return (
    <Box flex={1} mt="hg" justifyContent="center" alignItems="center">
      <Text>I can't find {name}</Text>
    </Box>
  );
};

export default Empty;
