import {Dimensions, Platform} from 'react-native';

export const {height: windowHeight, width: windowWidth} =
  Dimensions.get('window');

export const isIos = Platform.OS === 'ios';
