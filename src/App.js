import React from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import GlobalFonts from "./fonts/fonts";
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
import MintNFTPage from "./components/pages/MintNFTPage";
import RequestPage from "./components/pages/RequestPage";
import RequestCreate from "./components/organisms/RequestCreate";
import CheckPage from "./components/pages/CheckPage";
import BloodDonationUse from "./components/pages/BloodDonationUse";
import RequestDetail from "./components/organisms/RequestDetail";
import BDDetailPage from "./components/pages/BDDetailPage";
import RevokePage from "./components/pages/RevokePage";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const queryClient = new QueryClient();

const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  min-height: 100%;
  padding-bottom: 104px;
  font-family: "LINESeedKR-Bd";
`;

function App() {
  return (
    <>
      <Authenticator.Provider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GlobalFonts />
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
                <Route
                  path="/blooddonationuse"
                  element={<BloodDonationUse />}
                />
                <Route path="/requestdonation" element={<RequestPage />}>
                  <Route path="requestCreate" element={<RequestCreate />} />
                  <Route path=":contentId" element={<RequestDetail />} />
                </Route>
                <Route path="/checkrole" element={<CheckPage />} />
                <Route path="/bddetail" element={<BDDetailPage />} />
                <Route path="/revokepage" element={<RevokePage />} />
              </Routes>
            </AppWrapper>
          </ThemeProvider>
        </QueryClientProvider>
      </Authenticator.Provider>
    </>
  );
}

export default App;
