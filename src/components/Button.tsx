type ButtonType = 'modal' | 'disabled';

interface ButtonProps {
  title: string;
  buttonType: ButtonType;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { title, buttonType, onClick } = props;
  const defaultClass = 'inline-flex items-center px-4 py-2 rounded-full';

  const classes = {
    buttonTypes: {
      modal:
        'bg-sky-300 text-sky-800 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-sky-300 hover:bg-indigo-300 hover:text-indigo-800 hover:focus:outline-indigo-300',
      disabled: 'bg-sky-200 text-sky-800/50',
    },
  };

  return (
    <button
      className={defaultClass + ' ' + classes.buttonTypes[buttonType]}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
