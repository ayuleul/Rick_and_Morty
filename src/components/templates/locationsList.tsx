import React from 'react';
import {FlatList} from 'react-native';
import {LocationItem} from '@app/components/organisms';
import {Box} from '@app/components/atoms';
import {ILocation, IResult} from '@location';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ParamList = {
  Characters: {locationId: number} | undefined;
};

interface ICharacterListProp {
  data: ILocation;
}

const LocationList: React.FC<ICharacterListProp> = ({data}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();

  function handleNavigation(id: number) {
    navigation.navigate('Characters', {locationId: id});
  }

  function renderItem({item}: {item: IResult}) {
    return <LocationItem item={item} handleNavigation={handleNavigation} />;
  }

  return (
    <Box flex={1} alignItems="center">
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={(item: IResult) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default LocationList;
