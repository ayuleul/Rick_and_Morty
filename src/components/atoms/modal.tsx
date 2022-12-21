import {Theme} from '@app/themes';
import {createBox} from '@shopify/restyle';
import {Modal as NativeModal, ModalProps} from 'react-native';

const Modal = createBox<Theme, ModalProps>(NativeModal);
export type FastImageProps = React.ComponentProps<typeof Modal>;

export default Modal;
