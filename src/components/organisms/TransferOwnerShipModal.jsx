import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isValidAddress } from "../../utils/crypto";

import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

const ModalWrapper = styled.div`
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

function TransferOwnershipModal({
  handleModal,
  sendingModalState,
  checkedList,
  handleSendingNFT,
  method,
}) {
  const [toState, setToState] = useState(null);
  const toastId = React.useRef(null);

  const handleInputChange = (e) => {
    setToState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tokenIds = checkedList;
    toast.dismiss();
    if (!isValidAddress(toState)) {
      toastId.current = toast("Invalid wallet address", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    method(tokenIds, toState)
      .then(() => {
        handleSendingNFT(false);
        handleModal(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <ModalWrapper>
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
      </ModalWrapper>
    </Container>
  );
}

export default TransferOwnershipModal;
