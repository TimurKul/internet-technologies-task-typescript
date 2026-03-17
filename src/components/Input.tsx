type InputType = 'primary' | 'disabled';

interface InputProps {
  placeholder: string;
  inputType: InputType;
}

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, inputType } = props;
  const defaultClass = 'border border-2 rounded-md px-2 py-1 bg-sky-50';

  const classes = {
    inputTypes: {
      primary:
        'border-sky-400 caret-indigo-500 text-sky-800 placeholder-sky-400 focus:outline-none focus:border-indigo-400 focus:placeholder-indigo-400 focus:text-indigo-800',
      disabled: 'border-sky-200 placeholder-sky-200',
    },
  };

  return (
    <input
      placeholder={placeholder}
      disabled={inputType === 'disabled'}
      className={defaultClass + ' ' + classes.inputTypes[inputType]}
    ></input>
  );
};
