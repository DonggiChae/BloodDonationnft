import React from "react";
import styled from "styled-components";

const ButtonButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondRed};
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  padding: 23px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: $dark-brown;
    color: $white;
  }
`;

const Button = ({ title, onClick, icon, disabled }) => {
  return (
    <ButtonButton onClick={onClick} disabled={disabled}>
      <span>{title}</span>
    </ButtonButton>
  );
};

export default Button;
