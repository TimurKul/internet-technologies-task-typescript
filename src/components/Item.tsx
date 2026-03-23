import { Text } from './Text';
import { Button } from './Button';

interface ButtonProps {
  title: string;
  description: string;
  price: string;
}

export const Item: React.FC<ButtonProps> = (props) => {
  const { title, description, price } = props;
  const defaultClass =
    'bg-white rounded-xl px-10 py-5 flex flex-col items-center space-y-4';

  return (
    <div className={defaultClass}>
      <h2>{title}</h2>
      <Text content={description}></Text>
      <Text content={price}></Text>
      <Button title="Купить" styleType="enabled" buttonType="button"></Button>
    </div>
  );
};
