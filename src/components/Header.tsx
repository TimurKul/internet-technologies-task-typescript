import { ButtonHeader } from './ButtonHeader.tsx';

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="h-12 bg-sky-200 text-sky-900 flex justify-center gap-10 items-center">
          <ButtonHeader title="Главная" link="/"></ButtonHeader>
          <ButtonHeader title="Корзина" link="/cart"></ButtonHeader>
          <ButtonHeader title="О нас" link="/about"></ButtonHeader>
        </ul>
      </nav>
    </header>
  );
};
