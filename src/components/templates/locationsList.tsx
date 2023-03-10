import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {LocationItem} from '@app/components/organisms';
import {Box} from '@app/components/atoms';
import {ILocation, IResult} from '@location';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Empty, LoadMore} from '../molecules';

type ParamList = {
  Character: {locationName: string} | undefined;
};

interface ICharacterListProp {
  data: ILocation;
  onEndReached: () => void;
  isFetching: boolean;
  isEnd: boolean;
  refreshing: boolean;
  handleOnRefresh: () => void;
}

const LocationList: React.FC<ICharacterListProp> = ({
  data,
  onEndReached,
  isFetching,
  isEnd,
  refreshing,
  handleOnRefresh,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  function handleNavigation(name: string) {
    navigation.navigate('Character', {locationName: name});
  }

  function renderItem({item}: {item: IResult}) {
    return <LocationItem item={item} handleNavigation={handleNavigation} />;
  }

  return (
    <Box flex={1} alignItems="center">
      <FlatList
        testID="location_list"
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={(item: IResult) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListEmptyComponent={() => (
          <>
            {data?.results?.length === 0 ? (
              <Empty isFetching={isFetching} name="Location!" />
            ) : null}
          </>
        )}
        ListFooterComponent={() => (
          <>
            {data?.results?.length !== 0 ? (
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

export default LocationList;
