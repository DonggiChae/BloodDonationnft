import styled from "styled-components";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/icons/iconmonstr-angel-right-thin-240.png";

const Container = styled.div`
  height: 60px;
  width: 500px;
  margin-bottom: 20px;
  padding: 0 24px 4px 27px;
  border-radius: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid 3px ${({ theme }) => theme.colors.buttonOrange};
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
  color: ${({ theme }) => theme.defaultTheme.fontBasicColor};
`;

const Icon = styled.div`
  width: 60px;
  flex-grow: 0;
  margin-right: 50px;
`;

const ArrowWrapper = styled.div`
  width: 60px;
  height: 30px;
  flex-grow: 0;
`;

const Arrow = styled.img`
  height: 100%;
  padding-left: 20px;
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
        {/* <Icon>icon</Icon> */}
        <NameWrapper>{name}</NameWrapper>
        <ArrowWrapper>
          <Arrow src={rightArrow} />
        </ArrowWrapper>
      </Container>
    </StyledLink>
  );
}
