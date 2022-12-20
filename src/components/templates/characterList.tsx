import {ICharacter, IResult} from '@character';
import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {CharacterItem} from '@app/components/organisms';
import {Box} from '@app/components/atoms';
import {LoadMore} from '../molecules';

interface ICharacterListProp {
  data: ICharacter;
  onEndReached: () => void;
  isFetching: boolean;
  isEnd: boolean;
  refreshing: boolean;
  handleOnRefresh: () => void;
}

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
        data={data?.results}
        renderItem={CharacterItem}
        keyExtractor={(item: IResult) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListFooterComponent={() => (
          <LoadMore isFetching={isFetching} isEnd={isEnd} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      />
    </Box>
  );
};

export default CharacterList;
