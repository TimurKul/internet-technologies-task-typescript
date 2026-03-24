import { createPortal } from 'react-dom';
import { Input } from './Input.tsx';
import { Text } from './Text.tsx';
import { Button } from './Button.tsx';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  modalHandler: (name: string, description: string, price: string) => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, modalHandler } = props;
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modalHandler(name, description, price);

    setName('');
    setDescription('');
    setPrice('');
  };

  const darkClass =
    'fixed inset-0 bg-black/50 flex items-center justify-center';
  const defaultClass =
    'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-sky-50 py-5 px-10 space-y-4';

  return createPortal(
    <>
      <div className={darkClass}>
        <div className={defaultClass}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <Text content="Наименование:"></Text>
            <Input
              name="name"
              type="text"
              onChange={setName}
              inputStyle="primary"
            ></Input>
            <Text content="Описание:"></Text>
            <Input
              name="description"
              type="text"
              onChange={setDescription}
              inputStyle="primary"
            ></Input>
            <Text content="Стоимость:"></Text>
            <Input
              name="price"
              type="number"
              onChange={setPrice}
              inputStyle="primary"
            ></Input>
            <Button
              title="Добавить"
              styleType="enabled"
              buttonType="submit"
            ></Button>
          </form>
        </div>
      </div>
    </>,
    document.body
  );
};
