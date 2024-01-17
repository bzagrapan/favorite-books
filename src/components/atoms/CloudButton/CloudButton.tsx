import React, { ButtonHTMLAttributes } from 'react';
import './CloudButton.scss';

export interface CloudButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const CloudButton = (props: CloudButtonProps) => {
  const { text } = props;

  return (
    <button className="cloud-button">
      <h1>{text}</h1>
    </button>
  );
};

export default CloudButton;
