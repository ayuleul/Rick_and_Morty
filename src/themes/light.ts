import {createTheme} from '@shopify/restyle';
import {StatusBarStyle} from 'react-native';

const p = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
};

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  colors: {
    white: p.white,
    black: p.black,
    red: p.red,
    blue: p.blue,
    yellow: p.yellow,

    $primary: 'rgb(52, 61, 255)',
    $background: 'rgb(255, 251, 255)',
    $onBackground: 'rgb(27, 27, 31)',
    $surface: 'rgb(224, 224, 255)',
    $onSurface: 'rgb(27, 27, 31)',
    $transparentBackground: 'rgba(52, 52, 52, 0.7)',
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  statusBar: {
    barStyle: 'dark-content' as StatusBarStyle,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
    },
    header1: {
      fontSize: 24,
      fontWeight: '600',
    },
    header2: {
      fontSize: 22,
      fontWeight: '600',
    },
    header3: {
      fontSize: 20,
      fontWeight: '600',
    },
    header4: {
      fontSize: 18,
      fontWeight: '600',
    },
    header5: {
      fontSize: 16,
      fontWeight: '600',
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
    },
    subtitle: {
      fontSize: 12,
    },
  },
});
export default theme;

export type Theme = typeof theme;
