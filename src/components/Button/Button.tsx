import type { ButtonTypes } from './Button.types';
import { stylesForButton, buttonSize } from './Button.consts';

const Button = ({
  label,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  type = 'button',
}: ButtonTypes) => {
  const buttonClasses = `${stylesForButton[variant]} ${buttonSize[size]}`;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
