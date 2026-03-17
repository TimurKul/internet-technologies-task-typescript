import { useState } from 'react';
import { Button } from '../components/Button.tsx';
import { Modal } from '../components/Modal.tsx';

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center">
        <Button
          title="Добавить товар"
          buttonType="modal"
          onClick={() => setIsOpen(!isOpen)}
        ></Button>
      </div>
      <Modal isOpen={isOpen}></Modal>
    </>
  );
};
