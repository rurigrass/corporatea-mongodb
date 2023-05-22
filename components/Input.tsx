interface IInput {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
  placeholder,
  value,
  type,
  disabled,
  onChange,
}) => {
  return (
    <input
      className="w-full p-4 text-lg bg-black_ct border-2 border-blue_ct-tintiest_ct rounded-md outline-none text-white_ct focus:border-pink_ct-tintier_ct focus:border-2 transition disabled:bg-blue_ct-tintiest_ct disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
