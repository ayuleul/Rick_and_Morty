import {windowWidth} from '@app/helpers';
import {IResult} from '@character';
import React from 'react';
import {FastImage} from '@app/components/atoms';
import {Box, Text} from '../atoms';
import {getSpeciesIcon} from '@app/utils';

interface ICharacterItemProp {
  item: IResult;
}

const CharacterCard: React.FC<ICharacterItemProp> = ({item}) => {
  return (
    <Box
      width={windowWidth * 0.39}
      bg="$surface"
      marginHorizontal="md"
      borderTopLeftRadius="sm"
      borderTopRightRadius="sm"
      marginVertical="sm">
      <FastImage
        testID="character_image"
        source={{uri: item?.image}}
        width="100%"
        height={100}
        borderTopLeftRadius="sm"
        borderTopRightRadius="sm"
        resizeMode="cover">
        <Box
          position="absolute"
          bottom={0}
          right={0}
          paddingHorizontal="sm"
          paddingVertical="xs"
          borderTopLeftRadius="sm"
          bg="$transparentBackground">
          <Text color="$onSurface">{getSpeciesIcon(item?.species)}</Text>
        </Box>
      </FastImage>
      <Box marginHorizontal="sm" marginVertical="md">
        <Text
          color="$onSurface"
          variant="title">{`${item?.name} (${item.gender})`}</Text>
        <Text color="$onSurface" variant="subtitle" mt="sm">
          {item.status}
        </Text>
        <Text color="$onSurface" variant="subtitle" mt="xs">
          First seen: {item.origin.name}
        </Text>
      </Box>
    </Box>
  );
};

export default CharacterCard;
