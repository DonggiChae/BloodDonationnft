import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
`;
const InputInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: 1px solid black;
  padding: 22px 24px;
  border-radius: 5px;
`;

const Input = ({
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  err,
  readOnly,
}) => (
  <InputContainer>
    {label && (
      <label className="Input__label" htmlFor={name}>
        {label}
      </label>
    )}
    <InputInput
      id={name}
      type={type || "text"}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      autoComplete="off"
    />
    {err && <p className="Input__err">{err}</p>}
  </InputContainer>
);

export default Input;
