interface IButton {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<IButton> = ({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        disabled: opacity-70
        disabled: cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white_ct" : " bg-pink_ct-tintish_ct"}
        ${secondary ? "text-black_ct" : "text-white_ct"}
        ${secondary ? "border-black_ct" : "border-sky-300"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white_ct" : ""}
        ${outline ? "text-white_ct" : ""}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
