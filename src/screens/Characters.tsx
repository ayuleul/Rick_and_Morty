import {Box, MaterialIcons, SafeAreaView} from '@app/components/atoms';
import {GoBack} from '@app/components/molecules';
import {CharacterList} from '@app/components/templates';
import {clearCharacterResultsData} from '@app/redux/features';
import {useGetCharactersQuery} from '@app/redux/service';
import {RootState} from '@app/redux/store';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const {refetch, isFetching} = useGetCharactersQuery(page);

  const {character} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function handlePageIncrease() {
    if (isFetching || page === character?.info?.pages) {
      return;
    }
    setPage(pre => pre + 1);
  }

  const handleOnRefresh = React.useCallback(() => {
    dispatch(clearCharacterResultsData());
    setRefreshing(true);
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (isFetching) {
      return;
    }
    setRefreshing(false);
  }, [isFetching]);

  return (
    <SafeAreaView flex={1}>
      <Box
        marginHorizontal="xl"
        marginVertical="sm"
        flexDirection="row"
        justifyContent="space-between">
        <GoBack />
        <MaterialIcons name="filter-list" size={30} color="$primary" />
      </Box>
      <CharacterList
        data={character}
        onEndReached={handlePageIncrease}
        isFetching={isFetching}
        isEnd={page === character?.info?.pages}
        refreshing={refreshing}
        handleOnRefresh={handleOnRefresh}
      />
    </SafeAreaView>
  );
};

export default Characters;
