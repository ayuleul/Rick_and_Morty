import {createTheme} from '@shopify/restyle';
import {StatusBarStyle} from 'react-native';
import light, {Theme} from './light';

const p = {
  slate10: '#202225',
  blue70: '#2185d0',
};

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.blue70,
    $background: p.slate10,
    $foreground: p.slate10,
    $characterBackground: p.slate10,
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle,
  },
  textVariants: {
    ...light.textVariants,
  },
});

export default theme;
