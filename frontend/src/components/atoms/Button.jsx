import React from "react";
import styled from "styled-components";

const ButtonButton = styled.button`
  width: 100%;
  background-color: black;
  color: brown;
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
  const iconStyle = {
    paddingLeft: "18px",
    background: `left / 12px no-repeat url('/images/${icon}')`,
  };

  return (
    <ButtonButton onClick={onClick} disabled={disabled}>
      <span style={icon && iconStyle}>{title}</span>
    </ButtonButton>
  );
};

export default Button;
