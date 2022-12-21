import {
  Box,
  MaterialIcons,
  Pressable,
  SafeAreaView,
  TextInput,
} from '@app/components/atoms';
import {GoBack} from '@app/components/molecules';
import {CharacterList, FilterModal} from '@app/components/templates';
import {clearCharacterResultsData} from '@app/redux/features';
import {useGetCharactersMutation} from '@app/redux/service';
import {RootState} from '@app/redux/store';
import {ICharacterFilter} from '@character';
import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Characters = ({route}: NavProps) => {
  const locationName = route?.params?.locationName;
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

  const [fetchData, {isLoading}] = useGetCharactersMutation();

  const {character} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  function handlePageIncrease() {
    if (isLoading || page === character?.info?.pages) {
      return;
    }
    setPage(pre => pre + 1);
  }

  const handleOnRefresh = useCallback(() => {
    dispatch(clearCharacterResultsData());
    setRefreshing(true);
    handleClearFilter();
    fetchData({
      page,
      ...filterValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleClearFilter = useCallback(() => {
    setFilterValue({name: '', status: '', gender: '', species: ''});
  }, []);

  const handleSearchValueChange = useCallback((value: string) => {
    setFilterValue(pre => ({...pre, name: value}));
  }, []);

  const handleApplyFilter = () => {
    dispatch(clearCharacterResultsData());
    setPage(1);
    setRefreshing(true);
    fetchData({
      page: 1,
      ...filterValue,
    });
    setModalVisible(false);
  };

  useEffect(() => {
    fetchData({
      page,
      ...filterValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!isFocused) {
      return;
    }
    dispatch(clearCharacterResultsData());
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setRefreshing(false);
  }, [isLoading]);

  useEffect(() => {
    if (filterValue?.name?.length < 3 || isLoading) {
      return;
    }
    dispatch(clearCharacterResultsData());
    setPage(1);
    setRefreshing(true);
    fetchData({
      page: 1,
      ...filterValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterValue?.name]);

  return (
    <SafeAreaView flex={1}>
      <Box
        marginHorizontal="xl"
        marginVertical="sm"
        flexDirection="row"
        justifyContent="space-between">
        <GoBack />
        <TextInput
          value={filterValue.name}
          onChangeText={handleSearchValueChange}
          bg="$characterBackground"
          flex={1}
          marginHorizontal="md"
          height={35}
          paddingHorizontal="sm"
        />
        <Pressable onPress={handleOpenModal}>
          <MaterialIcons name="filter-list" size={30} color="$primary" />
        </Pressable>
      </Box>
      <CharacterList
        data={character?.results.filter(
          item => item?.location?.name === locationName,
        )}
        onEndReached={handlePageIncrease}
        isFetching={isLoading}
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
