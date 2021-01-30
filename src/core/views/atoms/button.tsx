import React, {FC} from 'react';

interface ButtonProps {
  value: string | number;
  text: string;
  isDisabled: boolean;
}

const Button: FC<ButtonProps> = ({
  value,
  text,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <button type="button" value={value} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
