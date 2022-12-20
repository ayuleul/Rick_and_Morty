import {ActivityIndicator} from 'react-native';
import React from 'react';
import {Box, Text} from '../atoms';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@app/themes';

interface ILoadMoreLoading {
  isFetching: boolean;
  isEnd: boolean;
}

const LoadMore: React.FC<ILoadMoreLoading> = ({isFetching, isEnd = false}) => {
  const theme = useTheme<Theme>();
  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      marginVertical="xl">
      {isFetching && !isEnd ? (
        <ActivityIndicator size="large" color={theme.colors.$primary} />
      ) : null}
      {isEnd ? <Text>--- The End ---</Text> : null}
    </Box>
  );
};

export default LoadMore;
