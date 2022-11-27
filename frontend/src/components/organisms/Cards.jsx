import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Card from "../molecules/Card";
import { useSelector } from "react-redux";

const Parent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;
  align-items: stretch;
`;

export default function Cards() {
  const feed = useSelector((state) => state.bdNFTs.BDNFTList);

  return (
    <Parent>
      {feed !== [] ? (
        feed.map((contents) => <Card contents={contents} />)
      ) : (
        <>헌혈로 생명을 구해보시는건 어떤가요?</>
      )}
    </Parent>
  );
}
