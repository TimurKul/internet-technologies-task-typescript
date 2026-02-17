import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="h-12 bg-sky-200 text-sky-950 flex justify-center gap-[4vw] items-center">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/cart">Корзина</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
