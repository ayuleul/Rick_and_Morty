import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';
import {Theme} from '@app/themes';
import {createBox} from '@shopify/restyle';

const Pressable = createBox<Theme, NativePressableProps>(NativePressable);
export type PressableProps = React.ComponentProps<typeof Pressable>;

export default Pressable;
