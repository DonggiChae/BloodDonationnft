import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthModal from "./../auth/AuthModal";

import bell from "../../assets/bell.png";
import Nav from "./Nav";

import ConnectToKaikas from "../auth/ConnectToKaikas";

const Container = styled.div`
  width: 95%;
  height: 50px;
  padding: 20px 50px 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0px;
  z-index: 998;
  background-color: rgba(255, 255, 255, 0.9);
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  width: 50px;
  height: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  margin-right: 124px;
  color: #707070;
  font-size: 45px;
  line-height: 1.33;
`;
const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  cursor: pointer;
`;

const AlertImage = styled.img`
  width: 100%;
  height: 100%;
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
    <>
      <Container>
        {accountModal && <AuthModal />}
        <LogoWrapper>
          <StyledLink to="/">B</StyledLink>
        </LogoWrapper>
        <TitleWrapper>
          <StyledLink to="/">BloodDonation</StyledLink>
        </TitleWrapper>
        <EmptyBox />
        <Nav />
        <AlertWrapper>
          <AlertImage src={bell} />
        </AlertWrapper>
        <ConnectToKaikas />
      </Container>
    </>
  );
}

export default Header;
