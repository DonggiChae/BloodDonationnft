import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";

import MainPage from "./components/pages/MainPage";
import SettingPage from "./components/pages/SettingPage";
import AuthPage from "./components/pages/AuthPage";
import MyNFTPage from "./components/pages/MyNFTPage";
import SendingNFTPage from "./components/pages/SendingNFTPage";
import LocationPage from "./components/pages/LocationPage";
import Header from "./components/organisms/Header";
import AdminPage from "./components/pages/AdminPage";

import { toast } from "react-toastify";
import * as authReducer from "./redux/reducers/auth";
import MintNFTPage from "./components/pages/MintNFTPage";
import RequestPage from "./components/pages/RequestPage";
import CreateRequest from "./components/organisms/CreateRequest";
import CheckPage from "./components/pages/CheckPage";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import RequestDetail from "./components/organisms/RequestDetail";
Amplify.configure(awsExports);

const klaytn = window.klaytn;

const queryClient = new QueryClient();

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  min-height: 100%;
  padding-bottom: 104px;
`;

function App() {
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
      localStorage.removeItem("_user");
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
        toast.success(
          `${changedAccount.slice(0, 5)}..계정이 바뀌셨군요 ㅎㅎ!!`
        );
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
        }으로 바뀌었군요! 다시 로그인 해주세요~`
      );
    };

    klaytn?.on("networkChanged", handleNetworkChanged);
    return () => {
      klaytn?.removeListener("networkChanged", handleNetworkChanged);
    };
  }, [dispatch]);
  return (
    <>
      <Authenticator.Provider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppWrapper>
              <Header />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/mynft" element={<MyNFTPage />} />
                <Route path="/sendingnft" element={<SendingNFTPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/setting" element={<SettingPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/mintnft" element={<MintNFTPage />} />
                <Route path="/requestdonation" element={<RequestPage />}>
                  <Route path="createRequest" element={<CreateRequest />} />
                  <Route path=":requestId" element={<RequestDetail />} />
                </Route>
                <Route path="/checkrole" element={<CheckPage />} />
              </Routes>
            </AppWrapper>
          </ThemeProvider>
        </QueryClientProvider>
      </Authenticator.Provider>
    </>
  );
}

export default App;
