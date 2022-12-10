import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

const Container = styled.div`
  width: 550px;
  height: 70px;
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
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

function Nav() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
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
        {user ? (
          <NameWrapper onClick={signOut}>로그아웃</NameWrapper>
        ) : (
          <StyledLink to="/auth">
            <NameWrapper>로그인</NameWrapper>
          </StyledLink>
        )}
      </NavIconWrapper>
    </Container>
  );
}

export default Nav;
