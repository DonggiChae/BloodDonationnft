import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainTextWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 3.5em;
  font-weight: 700;
`;

const MainTextRed = styled.div`
  color: ${({ theme }) => theme.colors.basicRed};
`;
const MainText = styled.div``;

const SubTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: 600;
`;

const SubText = styled.div`
  padding: 20px;
`;

function MainPage() {
  return (
    <MainContainer>
      <MainContents>
        <MainTextWrapper>
          <MainTextRed>전자 헌혈증</MainTextRed>
          <MainText>으로 마음을 나누세요.</MainText>
        </MainTextWrapper>
        <SubTextWrapper>
          <SubText>
            기존 종이 헌혈증의 불편한 점을 보완한 전자헌혈증입니다.
          </SubText>
          <SubText>기존방식과는 다른 편리함을 느끼세요.</SubText>
          <SubText>간단한 과정을 전자헌혈증으로 마음을 표현하세요.</SubText>
        </SubTextWrapper>
      </MainContents>
    </MainContainer>
  );
}

export default MainPage;
