import React from "react";
import styled from "styled-components";
import SettingListButton from "../components/atoms/SettingListButton";

const SettingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const SettingListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

function SettingPage() {
  return (
    <SettingContainer>
      <SettingListContainer>
        <SettingListButton name="admin" link="/admin" />
        <SettingListButton name="헐혈증 발행" link="/mintnft" />
        <SettingListButton name="개인 정보 수집 및 약관" />
        <SettingListButton name="보안" />
        <SettingListButton name="위치 설정" />
        <SettingListButton name="도움 " />
        <SettingListButton name="야간 모드" />
      </SettingListContainer>
    </SettingContainer>
  );
}

export default SettingPage;
