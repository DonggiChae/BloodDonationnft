import React from "react";
import styled from "styled-components";

import Button from "../atoms/Button";

const Container = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const ImgWrapper = styled.img`
  padding-bottom: 10px;
  height: 400px;
  width: 400px;
`;
const ContentsWrapper = styled.div`
  width: 90%;
`;
const ContentsTitleWrapper = styled.div`
  font-weight: 700;
  padding-right: 5px;
  padding-bottom: 5px;
`;

const Contents = styled.div`
  display: flex;
  padding-bottom: 10px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  padding-left: 300px;
`;
function DetailModal({ contents, handleModal }) {
  return (
    <Container>
      <ImgWrapper
        src={`https://gateway.pinata.cloud/ipfs/${contents[2].split("://")[1]}`}
      />
      <ContentsWrapper>
        <Contents>
          <ContentsTitleWrapper>ID:</ContentsTitleWrapper> {contents[0]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>헌혈 종류:</ContentsTitleWrapper>
          {contents[5]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>장소:</ContentsTitleWrapper> {contents[4]}
        </Contents>
        <Contents>
          <ContentsTitleWrapper>발행일:</ContentsTitleWrapper>
          {new Intl.DateTimeFormat("ko-KR").format(contents[6] * 1000)}
        </Contents>
      </ContentsWrapper>
      <ContentsWrapper>
        NFT:
        {contents[1].map((addr) => {
          return <li>{addr}</li>;
        })}
      </ContentsWrapper>
      <ButtonWrapper>
        <Button title="뒤로가기" onClick={() => handleModal(false)} />
      </ButtonWrapper>
    </Container>
  );
}

export default DetailModal;
