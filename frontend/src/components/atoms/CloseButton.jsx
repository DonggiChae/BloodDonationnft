import styled from "styled-components";

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #e97474;
  color: brown;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const XWrapper = styled.span`
  position: relative;
`;

function CloseButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <XWrapper>X</XWrapper>
    </Button>
  );
}

export default CloseButton;
