import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as authReducer from "../../redux/reducers/auth";

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

const klaytn = window.klaytn;

function Header() {
  const dispatch = useDispatch();
  const userKaikas = useSelector((state) => state.auth.user);

  useEffect(() => {
    //kaikas 지갑 없을시 이 effect무효!
    if (!klaytn) {
      return;
    }

    const account = localStorage.getItem("_user");
    const currentKaikasAccount = klaytn?.selectedAddress;

    if (!account || !currentKaikasAccount) {
      dispatch(authReducer.setUser(""));
      // localStorage.removeItem("_user");
      return;
    }

    if (account === currentKaikasAccount) {
      dispatch(authReducer.setUser(account));
      localStorage.setItem("_user", account);
    }
  }, [dispatch, userKaikas]);

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const handleChangeAccounts = () => {
      if (!userKaikas) {
        return;
      }

      const changedAccount = klaytn?.selectedAddress;

      if (userKaikas !== changedAccount) {
        toast.success(`${changedAccount.slice(0, 5)}..계정이 바뀌셨습니다.`);
        dispatch(authReducer.setUser(changedAccount));
        localStorage.setItem("_user", changedAccount);
      }
    };

    klaytn?.on("accountsChanged", handleChangeAccounts);
    return () => {
      klaytn.off("accountsChanged", handleChangeAccounts);
    };
  }, [userKaikas, dispatch]);

  useEffect(() => {
    if (!klaytn) {
      return;
    }

    const networkObj = {
      1001: "바오밥 테스트넷",
      8217: "메인넷",
    };

    const handleNetworkChanged = () => {
      dispatch(authReducer.setUser(""));
      localStorage.removeItem("_user");
      toast.warn(
        `네트워크가 ${
          networkObj[klaytn.networkVersion]
        }으로 바뀌었습니다. 다시 로그인 해주세요.`
      );
    };

    klaytn?.on("networkChanged", handleNetworkChanged);
    return () => {
      klaytn?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [dispatch]);
  return (
    <Container>
      <HeaderWrapper>
        <LogoWrapper>
          <StyledLink to="/">
            <Logo src={heartLogo} alt="Logo" />
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
