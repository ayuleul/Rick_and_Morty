import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {MaterialIcons, Pressable} from '../atoms';

const GoBack = () => {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Pressable onPress={handleGoBack}>
      <MaterialIcons name="arrow-back" size={30} color="$primary" />
    </Pressable>
  );
};

export default GoBack;
