import {Box, MaterialIcons, SafeAreaView} from '@app/components/atoms';
import {GoBack} from '@app/components/molecules';
import {CharacterList} from '@app/components/templates';
import {useGetCharactersQuery} from '@app/redux/service';
import {RootState} from '@app/redux/store';
import React from 'react';
import {useSelector} from 'react-redux';

const Characters = () => {
  useGetCharactersQuery('');

  const {character} = useSelector((state: RootState) => state);
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
      <CharacterList data={character} />
    </SafeAreaView>
  );
};

export default Characters;
