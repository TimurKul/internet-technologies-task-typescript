import { useState } from 'react';
import { Button } from '../components/Button.tsx';
import { Modal } from '../components/Modal.tsx';
import { Item } from '../components/Item';

interface Item {
  name: string;
  description: string;
  price: number;
}

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const modalHandler = (name: string, description: string, price: string) => {
    setItems([...items, { name, description, price: Number(price) }]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button
          title="Добавить товар"
          styleType="enabled"
          buttonType="button"
          onClick={() => setIsOpen(!isOpen)}
        ></Button>
      </div>
      <Modal isOpen={isOpen} modalHandler={modalHandler}></Modal>
      <ul className="flex flex-wrap gap-4 justify-around">
        {items.map((item: Item, index: number) => (
          <li key={index} className="inline-block">
            <Item
              title={item.name}
              description={item.description}
              price={String(item.price)}
            ></Item>
          </li>
        ))}
      </ul>
    </>
  );
};
