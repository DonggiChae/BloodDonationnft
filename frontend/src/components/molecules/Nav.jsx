import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 25%;
  height: 100%;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavIconWrapper = styled.div``;

const NameWrapper = styled.div``;

function Nav() {
  return (
    <Container>
      <NavIconWrapper>
        <StyledLink to="/mynft">나의NFT</StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/sendingnft">헌혈증 보내기</StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/location">위치검색</StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/setting">
          <NameWrapper>설정</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
    </Container>
  );
}

export default Nav;
