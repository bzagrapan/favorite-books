import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { text } = props;

  return (
    <button className="custom-button">
      <h1>{text}</h1>
    </button>
  );
};

export default CustomButton;
