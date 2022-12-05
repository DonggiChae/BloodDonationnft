import React from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import * as authReducer from "../../redux/reducers/auth";

import kaikasWhite from "../../assets/kaikas_logo_assets/png/symbol_white_transparent.png";
import kaikasBlue from "../../assets/kaikas_logo_assets/png/symbol_multi_solid.png";

const WalletBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.user ? "white" : "grey")};
  width: 50px;
  height: 50px;
  border-radius: 11px;
  margin-right: 60px;
  cursor: pointer;
`;

const WalletImg = styled.img`
  width: 100%;
  height: 100%;
`;

const klaytn = window.klaytn;

async function isKaikasAvailable() {
  const klaytn = window?.klaytn;
  if (!klaytn) {
    return false;
  }

  const results = await Promise.all([
    klaytn._kaikas.isApproved(),
    klaytn._kaikas.isEnabled(),
    klaytn._kaikas.isUnlocked(),
  ]);

  return results.every((res) => res);
}

function ConnectToKaikas() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  async function loginWithKaikas() {
    if (!klaytn) {
      toast.error("Please install a Kaikas.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      const accounts = await toast.promise(
        klaytn.enable(),
        {
          pending: "Kaikas 지갑 연동 중",
        },
        { closeButton: true }
      );
      dispatch(authReducer.setUser(accounts[0]));
      localStorage.setItem("_user", accounts[0]);
      toast.success(`${accounts[0].slice(0, 13)}...님 환영합니다~^^`);
    } catch {
      toast.error("로그인 실패 다시 시도 ㄱㄱ");
    }
  }

  function handleLogin() {
    loginWithKaikas();
  }

  async function handleDone() {
    const isAvailable = await isKaikasAvailable();
    if (isAvailable) {
      toast.success("엇 ..또 로그인 하실려구요?!");
      return;
    }

    toast.warn("다시 로그인 해주세요 ^^!");
    dispatch(authReducer.setUser(""));
    localStorage.removeItem("_user");
  }

  return (
    <WalletBox
      onClick={() => {
        user ? handleDone() : handleLogin();
      }}
      user={user}
    >
      <WalletImg src={user ? kaikasBlue : kaikasWhite} />
    </WalletBox>
  );
}

export default ConnectToKaikas;
