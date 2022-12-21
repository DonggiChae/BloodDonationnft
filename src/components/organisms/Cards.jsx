import React from "react";
import styled from "styled-components";

import Card from "../molecules/Card";

const Container = styled.div``;

const CardsWapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  align-items: stretch;
  min-height: 300px;
`;

export default function Cards({ feed, limit, page }) {
  return (
    <Container>
      <CardsWapper>
        {feed.slice(page - 1, page + limit).map((contents, index) => (
          <Card contents={contents} key={index} />
        ))}
      </CardsWapper>
    </Container>
  );
}
