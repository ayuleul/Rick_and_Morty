import NativeFastImage, {
  FastImageProps as NativeFastImageProps,
} from 'react-native-fast-image';
import {Theme} from '@app/themes';
import {createBox} from '@shopify/restyle';

const FastImage = createBox<Theme, NativeFastImageProps>(NativeFastImage);
export type FastImageProps = React.ComponentProps<typeof FastImage>;

export default FastImage;
