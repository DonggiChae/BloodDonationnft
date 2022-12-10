import React from "react";
import styled from "styled-components";

const ButtonButton = styled.button`
  margin: 10px;
  padding: 0.375rem 0.75rem;
  border: 1.5px solid rgba(0, 0, 0, 1);
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: $dark-brown;
    color: $white;
  }
`;

const Button = ({ title, onClick, disabled }) => {
  return (
    <ButtonButton onClick={onClick} disabled={disabled}>
      <span>{title}</span>
    </ButtonButton>
  );
};

export default Button;
