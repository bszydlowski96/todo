import type { ButtonTypes } from './Button.types';
import { stylesForButton, buttonSize, baseClass } from './Button.consts';

const Button = ({
  label,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  type = 'button',
}: ButtonTypes) => {
  const buttonClasses = `${baseClass} ${stylesForButton[variant]} ${buttonSize[size]}`;
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
