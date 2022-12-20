import {ICharacter, IResult} from '@character';
import React from 'react';
import {FlatList} from 'react-native';
import {CharacterItem} from '@app/components/organisms';
import {Box} from '@app/components/atoms';

interface ICharacterListProp {
  data: ICharacter;
}

const CharacterList: React.FC<ICharacterListProp> = ({data}) => {
  return (
    <Box flex={1} alignItems="center">
      <FlatList
        data={data?.results}
        renderItem={CharacterItem}
        keyExtractor={(item: IResult) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default CharacterList;
