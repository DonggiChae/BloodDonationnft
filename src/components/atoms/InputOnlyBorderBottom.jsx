import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  margin: 10px;
`;
const InputInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.7rem 1rem;
  margin: 1rem 0;
  line-height: 1.5;
  border: none;
  border-radius: 0px;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
  font-size: 1.1em;
  font-weight: 600;
  &:focus {
    outline: none;
    border-bottom: 1.8px solid ${({ theme }) => theme.colors.buttonOrange};
  }
`;

const InputOnlyBorderBottom = ({
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

export default InputOnlyBorderBottom;
