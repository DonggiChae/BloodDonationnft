import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  width: 500px;
  margin-bottom: 20px;
  padding: 0 24px 4px 27px;
  border-radius: 42px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px #e98b98;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  color: #707070;
`;

const Icon = styled.div`
  width: 60px;
  flex-grow: 0;
  margin-right: 50px;
`;

const Arrow = styled.div`
  width: 60px;
  flex-grow: 0;
`;

const NameWrapper = styled.div`
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function SettingListButton({ name, link }) {
  return (
    <StyledLink to={link}>
      <Container>
        <Icon>icon</Icon>
        <NameWrapper>{name}</NameWrapper>
        <Arrow>arrow</Arrow>
      </Container>
    </StyledLink>
  );
}
