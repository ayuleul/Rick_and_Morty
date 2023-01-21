import {createTheme} from '@shopify/restyle';
import {StatusBarStyle} from 'react-native';
import light, {Theme} from './light';

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: 'rgb(190, 194, 255)',
    $background: 'rgb(27, 27, 31)',
    $onBackground: 'rgb(229, 225, 230)',
    $surface: 'rgb(68, 69, 89)',
    $onSurface: 'rgb(229, 225, 230)',
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle,
  },
  textVariants: {
    ...light.textVariants,
  },
});

export default theme;
