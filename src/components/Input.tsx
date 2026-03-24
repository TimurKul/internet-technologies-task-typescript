type inputStyle = 'primary' | 'disabled';
type inputType = 'text' | 'number';

interface InputProps {
  placeholder?: string;
  name: string;
  type: inputType;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  inputStyle: inputStyle;
}

export const Input: React.FC<InputProps> = (props) => {
  const { placeholder, name, type, onChange, inputStyle } = props;
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
      name={name}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      disabled={inputStyle === 'disabled'}
      className={defaultClass + ' ' + classes.inputTypes[inputStyle]}
      required
    ></input>
  );
};
