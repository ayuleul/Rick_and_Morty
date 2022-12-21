import {
  Box,
  MaterialIcons,
  Pressable,
  SafeAreaView,
} from '@app/components/atoms';
import {GoBack} from '@app/components/molecules';
import {CharacterList, FilterModal} from '@app/components/templates';
import {clearCharacterResultsData} from '@app/redux/features';
import {useGetCharactersQuery} from '@app/redux/service';
import {RootState} from '@app/redux/store';
import {ICharacterFilter} from '@character';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterValue, setFilterValue] = useState<
    Omit<ICharacterFilter, 'page'>
  >({
    name: '',
    status: '',
    gender: '',
    species: '',
  });

  const [refreshing, setRefreshing] = useState(false);

  const {refetch, isFetching} = useGetCharactersQuery({page, ...filterValue});

  const {character} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function handlePageIncrease() {
    if (isFetching || page === character?.info?.pages) {
      return;
    }
    setPage(pre => pre + 1);
  }

  const handleOnRefresh = useCallback(() => {
    dispatch(clearCharacterResultsData());
    setRefreshing(true);
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleClearFilter = useCallback(() => {
    setFilterValue({name: '', status: '', gender: '', species: ''});
  }, []);

  const handleApplyFilter = useCallback(() => {
    dispatch(clearCharacterResultsData());
    setRefreshing(true);
    refetch();
    setModalVisible(false);
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
        <Pressable onPress={handleOpenModal}>
          <MaterialIcons name="filter-list" size={30} color="$primary" />
        </Pressable>
      </Box>
      <CharacterList
        data={character}
        onEndReached={handlePageIncrease}
        isFetching={isFetching}
        isEnd={page === character?.info?.pages}
        refreshing={refreshing}
        handleOnRefresh={handleOnRefresh}
      />
      {modalVisible && (
        <FilterModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setFilterValue={setFilterValue}
          filterValue={filterValue}
          handleClearFilter={handleClearFilter}
          handleApplyFilter={handleApplyFilter}
        />
      )}
    </SafeAreaView>
  );
};

export default Characters;
