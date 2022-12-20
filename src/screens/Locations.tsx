import React, {useState} from 'react';
import {SafeAreaView} from '@app/components/atoms';
import LocationList from '@app/components/templates/locationsList';
import {useGetLocationsQuery} from '@app/redux/service/locationApi';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {useEffect} from 'react';
import {clearLocationResultsData} from '@app/redux/features';

const Locations = () => {
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const {refetch, isFetching} = useGetLocationsQuery(page);
  const {location} = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function handlePageIncrease() {
    if (isFetching || page === location?.info?.pages) {
      return;
    }
    setPage(pre => pre + 1);
  }

  const handleOnRefresh = React.useCallback(() => {
    dispatch(clearLocationResultsData());
    // setRefreshing(true);
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
      <LocationList
        data={location}
        onEndReached={handlePageIncrease}
        isFetching={isFetching}
        isEnd={page === location?.info?.pages}
        refreshing={refreshing}
        handleOnRefresh={handleOnRefresh}
      />
    </SafeAreaView>
  );
};

export default Locations;
