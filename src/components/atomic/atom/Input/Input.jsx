import React from "react";
import { Input as InputAntd } from "antd";

function Input({ value, onSearchChange, placeholder = "typing...", ...props }) {
  const handleOnInputChange = (e) => {
    const value = e?.target?.value;
    onSearchChange(value);
  };
  return (
    <InputAntd
      value={value}
      onChange={handleOnInputChange}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
