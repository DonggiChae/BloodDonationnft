import React from "react";
import styled from "styled-components";
import SettingListButton from "../atoms/SettingListButton";

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
        <SettingListButton name="헌혈증 발행" link="/mintnft" />
        <SettingListButton name="헌혈증 사용하기" link="/blooddonationuse" />
        <SettingListButton name="권한 주기" link="/admin" />
        <SettingListButton name="권한 확인" link="/checkrole" />
        <SettingListButton name="권한 취소하기" link="/revokepage" />
      </SettingListContainer>
    </SettingContainer>
  );
}

export default SettingPage;
