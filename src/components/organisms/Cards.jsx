import React from "react";
import styled from "styled-components";
import Card from "../molecules/Card";
import { useSelector } from "react-redux";

const Container = styled.div`
  margin-top: 20px;
`;

const CardsWapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  align-items: stretch;
  min-height: 300px;
`;

const ContentsWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const Contents = styled.div`
  font-weight: 600;
  font-size: 2em;
  padding: 40px;
`;

export default function Cards() {
  const feed = useSelector((state) => state.bdNFTs.BDNFTList);

  return (
    <Container>
      {feed.length > 0 ? (
        <CardsWapper>
          {feed.map((contents) => (
            <Card contents={contents} />
          ))}
        </CardsWapper>
      ) : (
        <ContentsWrapper>
          <Contents>조회가능한 헌혈증이 없습니다.</Contents>
          <Contents>헌혈로 생명을 구해보시는건 어떤가요?</Contents>
        </ContentsWrapper>
      )}
    </Container>
  );
}
