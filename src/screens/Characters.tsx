import {SafeAreaView} from '@app/components/atoms';
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
      <CharacterList data={character} />
    </SafeAreaView>
  );
};

export default Characters;
