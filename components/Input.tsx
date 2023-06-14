interface IInput {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  placeholder,
  value,
  type,
  disabled,
  required,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      className="w-full p-4 text-lg bg-black border-2 border-blue-tintiest rounded-md outline-none text-white focus:border-pink-tintier focus:border-2 transition disabled:bg-blue-tintiest disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={disabled}
      required={required}
      onChange={onChange}
      autoComplete={autoComplete}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
