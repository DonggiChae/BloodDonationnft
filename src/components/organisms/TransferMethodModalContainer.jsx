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
  background-color: white;
`;
const Form = styled.form``;
const TitleWrapper = styled.div`
  font-size: 1.3em;
  font-weight: 600;
  margin: 10px;
`;

const SendingTokens = styled.div`
  border: none;
  resize: none;
  width: 87%;
  margin-left: 10px;
  padding: 0.7rem 1rem;
  line-height: 1.5;
  font-size: 1.1em;
  font-weight: 600;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.25);
`;

export default function TransferMethodContainer({
  handleSubmit,
  handleInputChange,
  handleModal,
  checkedList,
}) {
  return (
    <Container>
      <TitleWrapper>헌혈증 보내기</TitleWrapper>
      <Form onSubmit={handleSubmit}>
        <SendingTokens>{checkedList.toString()}</SendingTokens>
        <Input
          name="to"
          onChange={handleInputChange}
          placeholder="받는 사람 지갑"
          required
        />
        <Button type="submit" title="보내기" />
        <Button title="취소하기" onClick={() => handleModal()} />
      </Form>
    </Container>
  );
}
