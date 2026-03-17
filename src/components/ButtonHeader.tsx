import { Link } from 'react-router-dom';

interface ButtonProps {
  title: string;
  link: string;
}

export const ButtonHeader: React.FC<ButtonProps> = (props) => {
  const { title, link } = props;
  const itemClass =
    'h-full transition-colors ease-in-out hover:bg-indigo-300 hover:text-indigo-900 rounded-md';
  const linkClass = 'block h-full flex items-center px-6';

  return (
    <li className={itemClass}>
      <Link to={link} className={linkClass}>
        {title}
      </Link>
    </li>
  );
};
