const Button = ({
  label,
  onClick,
  disabled,
  variant = 'primary',
  size = 'md',
  type = 'button',
}: {
  label: string;
  onClick?: () => void;
  disabled: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
}) => {
  const buttonSize = {
    sm: 20,
    md: 30,
    lg: 40,
  };
  const stylesForButton = {
    primary: { backgroundColor: 'green', fontSize: buttonSize[size] },
    secondary: { backgroundColor: 'gray', fontSize: buttonSize[size] },
    danger: { backgroundColor: 'red', fontSize: buttonSize[size] },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={stylesForButton[variant]}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
