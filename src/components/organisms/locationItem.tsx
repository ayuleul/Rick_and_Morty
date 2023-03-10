import {windowWidth} from '@app/helpers';
import {IResult} from '@location';
import React from 'react';
import {MaterialIcons, Pressable} from '@app/components/atoms';
import {Box, Text} from '../atoms';

interface ICharacterItemProp {
  item: IResult;
  handleNavigation: (name: string) => void;
}

const LocationCard: React.FC<ICharacterItemProp> = ({
  item,
  handleNavigation,
}) => {
  return (
    <Pressable
      onPress={() => handleNavigation(item?.name)}
      width={windowWidth * 0.89}
      bg="$surface"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginHorizontal="md"
      borderRadius="sm"
      paddingHorizontal="md"
      paddingVertical="lg"
      marginVertical="sm">
      <Box width={windowWidth * 0.75}>
        <Text
          color="$onSurface"
          fontWeight="bold"
          mb="md">{`${item?.name} (${item?.type})`}</Text>
        <Text color="$onSurface" mb="sm">
          Dimension: {item?.dimension}
        </Text>
        <Text color="$onSurface" variant="title" fontWeight="400">
          There are {item?.residents?.length} Residents
        </Text>
      </Box>
      <MaterialIcons name="arrow-forward-ios" size={30} color="$primary" />
    </Pressable>
  );
};

export default LocationCard;
