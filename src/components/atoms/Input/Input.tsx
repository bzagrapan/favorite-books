import React, { useState } from 'react';
import './Input.scss';

export interface CustomInputProps {
  placeholder: string;
  displayWarning?: boolean;
  warningText?: string;
  onInputChange: Function;
  maxChars?: number;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { placeholder, displayWarning, warningText, onInputChange, maxChars } =
    props;

  const [userInput, setUserInput] = useState<string>();

  const handleOnChange = (newValue: string) => {
    setUserInput(newValue);
    onInputChange(newValue);
  };

  const errorState = displayWarning && !userInput;

  return (
    <div className="custom-input-wrapper">
      <input
        className={errorState ? 'custom-input warning' : 'custom-input'}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e?.target?.value)}
        maxLength={maxChars}
      ></input>
      {errorState && <div className="input-warning">{warningText}</div>}
    </div>
  );
};

export default CustomInput;
