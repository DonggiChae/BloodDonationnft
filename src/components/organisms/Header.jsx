import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthModal from "../auth/AuthModal";

// import bell from "../../assets/bell.png";
import Nav from "../molecules/Nav";

import ConnectToKaikas from "../auth/ConnectToKaikas";
import heartLogo from "../../assets/icons/iconmonstr-medical-7-240.png";

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 998;
  background-color: ${({ theme }) => theme.defaultTheme.header};
`;
const HeaderWrapper = styled.div`
  width: 1500px;
  height: 70px;
  padding: 20px 0px 20px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  margin-right: 124px;
  color: ${({ theme }) => theme.colors.basicRed};
  font-size: 45px;
  line-height: 1.33;
`;

const EmptyBox = styled.div`
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Header() {
  const accountModal = useSelector((state) => state.ui.accountModal);

  return (
    <Container>
      <HeaderWrapper>
        {accountModal && <AuthModal />}
        <LogoWrapper>
          <StyledLink to="/">
            <Logo src={heartLogo} />
          </StyledLink>
        </LogoWrapper>
        <TitleWrapper>
          <StyledLink to="/">BloodDonation</StyledLink>
        </TitleWrapper>
        <EmptyBox />
        <Nav />
        <ConnectToKaikas />
      </HeaderWrapper>
    </Container>
  );
}

export default Header;
