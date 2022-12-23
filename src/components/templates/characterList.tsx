import {IResult} from '@character';
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {CharacterItem} from '@app/components/organisms';
import {Box} from '@app/components/atoms';
import {Empty, LoadMore} from '../molecules';

interface ICharacterListProp {
  data: IResult[];
  onEndReached: () => void;
  isFetching: boolean;
  isEnd: boolean;
  refreshing: boolean;
  handleOnRefresh: () => void;
}

const keyExtractor = (item: IResult) => item.id.toString();

const CharacterList: React.FC<ICharacterListProp> = ({
  data,
  onEndReached,
  isFetching,
  isEnd,
  refreshing,
  handleOnRefresh,
}) => {
  return (
    <Box flex={1} alignItems="center">
      <FlatList
        testID="character_list"
        data={data}
        renderItem={CharacterItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListEmptyComponent={<Empty name="Character!" />}
        ListFooterComponent={<LoadMore isFetching={isFetching} isEnd={isEnd} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      />
    </Box>
  );
};

export default CharacterList;
