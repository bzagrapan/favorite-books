import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { text } = props;

  return (
    <button className="custom-button">
      <h2>{text}</h2>
    </button>
  );
};

export default CustomButton;
