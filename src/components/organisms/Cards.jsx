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
const CardWrapper = styled.div`
  height:380px;
`;

const CheckBox = styled.input`
  width: 20px;
	height: 20px;
	border: 2px solid #bcbcbc;
	cursor: pointer;
  margin-left: 110px;
  margin-top: 5px;
`;

export default function Cards({
  feed,
  limit,
  page,
  sendingModalState,
  onCheckedElement,
  checkedList,
}) {
  return (
    <Container>
      <CardsWapper>
        {feed
          .slice((page - 1) * limit, (page - 1) * limit + limit)
          .map((contents, index) => (
            <CardWrapper key={index}>
              <Card contents={contents} />
              {sendingModalState && (
                <CheckBox
                  type="checkbox"
                  value={contents[0]}
                  onChange={(e) => {
                    onCheckedElement(e.target.checked, e.target.value);
                  }}
                  checked={checkedList.includes(contents[0]) ? true : false}
                ></CheckBox>
              )}
            </CardWrapper>
          ))}
      </CardsWapper>
    </Container>
  );
}
