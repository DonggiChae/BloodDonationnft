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
        <SettingListButton name="관리자 페이지" link="/admin" />
        <SettingListButton name="헐혈증 발행" link="/mintnft" />
        <SettingListButton name="권한 확인" link="/checkrole" />
        <SettingListButton name="헌혈증 사용하기" link="/blooddonationuse" />
      </SettingListContainer>
    </SettingContainer>
  );
}

export default SettingPage;
