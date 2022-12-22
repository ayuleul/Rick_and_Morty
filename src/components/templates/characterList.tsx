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
        keyExtractor={(item: IResult) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListEmptyComponent={() => (
          <>{data?.length === 0 ? <Empty name="Character!" /> : null}</>
        )}
        ListFooterComponent={() => (
          <>
            {data?.length !== 0 ? (
              <LoadMore isFetching={isFetching} isEnd={isEnd} />
            ) : null}
          </>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh} />
        }
      />
    </Box>
  );
};

export default CharacterList;
