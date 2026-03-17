import { createPortal } from 'react-dom';
import { Text } from './Text';

interface ModalProps {
  isOpen: boolean;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen } = props;

  if (!isOpen) {
    return null;
  }

  const defaultClass =
    'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';

  return createPortal(
    <div className={defaultClass}>
      <Text content="Смотритие я жвиойуцуош"></Text>
    </div>,
    document.body
  );
};
