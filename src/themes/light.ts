import {createTheme} from '@shopify/restyle';
import {StatusBarStyle} from 'react-native';

const p = {
  white: 'white',
  black: 'black',
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  paper00: '#ffffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper100: '#aeaeae',
  paper300: '#767577',
  paper900: '#202020',
  paperTransparent: 'rgba(52, 52, 52, 0.5)',
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

    $primary: p.blue,
    $background: p.white,
    $logoBackground: p.white,
    $foreground: p.white,
    $courseBackground: p.paper10,
    $transparentBackground: p.paperTransparent,
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
      color: 'black',
      fontSize: 16,
    },
    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: '600',
    },
  },
});
export default theme;

export type Theme = typeof theme;
