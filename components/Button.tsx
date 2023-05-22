interface IButton {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  small?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<IButton> = ({
  label,
  secondary,
  fullWidth,
  small,
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
        ${secondary ? "bg-white_ct" : "bg-green_ct-green_ct"}
        ${secondary ? "text-black_ct" : "text-white_ct"}
        ${secondary ? "border-black_ct" : "border-blue_ct-tintiest_ct"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5" : "px-4"}
        ${large ? "py-3" : "py-2"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "px-3" : "px-4"}
        ${small ? "py-1" : "py-2"}
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
