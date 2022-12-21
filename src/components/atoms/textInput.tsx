import {Theme} from '@app/themes';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import {createBox} from '@shopify/restyle';

const TextInput = createBox<Theme, NativeTextInputProps>(NativeTextInput);
export type TextInputProps = React.ComponentProps<typeof TextInput>;

export default TextInput;
