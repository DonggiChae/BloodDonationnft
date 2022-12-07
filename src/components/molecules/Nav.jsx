import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 35%;
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

const NameWrapper = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`;

function Nav() {
  return (
    <Container>
      <NavIconWrapper>
        <StyledLink to="/mynft">
          <NameWrapper>나의헌혈증</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/sendingnft">
          <NameWrapper>헌혈증 보내기</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/requestdonation">
          <NameWrapper>헌혈증 요청하기</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/location">
          <NameWrapper>위치검색</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/setting">
          <NameWrapper>설정</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
      <NavIconWrapper>
        <StyledLink to="/auth">
          <NameWrapper>로그인</NameWrapper>
        </StyledLink>
      </NavIconWrapper>
    </Container>
  );
}

export default Nav;
