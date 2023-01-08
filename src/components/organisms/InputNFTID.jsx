import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Container = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.secondRed};
  border-radius: 20px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form``;
const TitleWrapper = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px;
`;

export default function InputNFTID({ handleSubmit, handleIds }) {
  return (
    <Container>
      <TitleWrapper>헌혈증 조회하기</TitleWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          name="tokenId"
          onChange={handleIds}
          placeholder="헌혈증 ID"
          required
        />
        <Button type="submit" title="보내기" />
      </Form>
    </Container>
  );
}
