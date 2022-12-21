import React from 'react';
import {Box} from '../atoms';

interface IDivider {
  height?: number;
}

const Divider: React.FC<IDivider> = ({height = 1}) => {
  return (
    <Box
      borderBottomWidth={height}
      borderBottomColor="$primary"
      width={'100%'}
    />
  );
};

export default Divider;
