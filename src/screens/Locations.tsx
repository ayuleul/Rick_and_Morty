import React from 'react';
import {SafeAreaView} from '@app/components/atoms';
import LocationList from '@app/components/templates/locationsList';
import {useGetLocationsQuery} from '@app/redux/service/locationApi';
import {useSelector} from 'react-redux';
import {RootState} from '@app/redux/store';

const Locations = () => {
  useGetLocationsQuery('');
  const {location} = useSelector((state: RootState) => state);
  return (
    <SafeAreaView flex={1}>
      <LocationList data={location} />
    </SafeAreaView>
  );
};

export default Locations;
