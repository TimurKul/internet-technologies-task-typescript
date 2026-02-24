import { Button } from '../components/Button.tsx';
import { Input } from '../components/Input.tsx';
import { Text } from '../components/Text.tsx';

export const Home: React.FC = () => {
  return (
    <>
      <h1>Hello, world!</h1>
      <Text content="Привет, мир!"></Text>
      <div>
        <Button title="Нажми меня!" buttonType="primary"></Button>
        <Button title="Нажми меня!" buttonType="disabled"></Button>
      </div>
      <div>
        <Input placeholder="Я работаю!" inputType="primary"></Input>
        <Input placeholder="Я не работаю!" inputType="disabled"></Input>
      </div>
    </>
  );
};
