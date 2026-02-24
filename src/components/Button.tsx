type ButtonType = 'primary' | 'disabled';

interface ButtonProps {
  title: string;
  buttonType: ButtonType;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, buttonType } = props;
  const defaultClass = 'inline-flex items-center px-4 py-2 rounded-full';

  const classes = {
    buttonTypes: {
      primary: 'bg-sky-300 text-sky-800 cursor-pointer',
      disabled: 'bg-sky-200 text-sky-800/50',
    },
  };

  const handlers = {
    primary: () => alert('Эта кнопка работает!'),
    disabled: () => null,
  };

  return (
    <button
      className={defaultClass + ' ' + classes.buttonTypes[buttonType]}
      onClick={handlers[buttonType]}
    >
      {title}
    </button>
  );
};
