import React, {useState, useEffect} from 'react';
import {SafeAreaView} from '@app/components/atoms';
import {LocationList} from '@app/components/templates';
import {useGetLocationsQuery} from '@app/redux/service/locationApi';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';
import {clearLocationResultsData} from '@app/redux/features';
import withObservables from '@nozbe/with-observables';
import {observeLocations} from '@app/data';
import {Header} from '@app/components/organisms';

const Locations = ({locations}: any) => {
  const [page, setPage] = useState(locations?.length / 20);
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
    <SafeAreaView flex={1} bg="$background">
      <Header title="Locations" />
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

// export default Locations;

const enhanceWithLocations = withObservables([], () => ({
  locations: observeLocations(),
}));

export default enhanceWithLocations(Locations);
