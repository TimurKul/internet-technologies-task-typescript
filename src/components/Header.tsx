import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="h-12 bg-sky-200 text-sky-900 flex justify-center gap-[4vw] items-center">
          <li className="h-full transition-colors ease-in-out hover:bg-indigo-300 hover:text-indigo-900 rounded-md">
            <Link to="/" className="block h-full flex items-center px-6">
              Главная
            </Link>
          </li>
          <li className="h-full transition-colors ease-in-out hover:bg-indigo-300 hover:text-indigo-900 rounded-md">
            <Link to="/cart" className="block h-full flex items-center px-6">
              Корзина
            </Link>
          </li>
          <li className="h-full transition-colors ease-in-out hover:bg-indigo-300 hover:text-indigo-900 rounded-md">
            <Link to="/about" className="block h-full flex items-center px-6">
              О нас
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
