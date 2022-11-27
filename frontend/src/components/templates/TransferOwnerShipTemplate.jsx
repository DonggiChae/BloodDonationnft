import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { getWallet, isValidAddress } from "../../utils/crypto";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;
const FormWrapper = styled.div``;
const TitleWrapper = styled.div``;
const Title = styled.div``;

function TransferOwnership({ method }) {
  const [state, setState] = useState({
    from: null,
    to: null,
    tokenId: null,
  });
  const toastId = React.useRef(null);

  const handleInputChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, from: window.klaytn.selectedAddress });
    const { to, from, tokenId } = state;
    toast.dismiss();
    if (!isValidAddress(to) || !isValidAddress(from)) {
      toastId.current = toast("* Invalid wallet address", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    method(from, to, tokenId);
  };
  return (
    <Container>
      <FormWrapper>
        <TitleWrapper>
          <Title>헌혈증 보내기</Title>
        </TitleWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            name="tokenId"
            label="TokenId"
            onChange={handleInputChange}
            placeholder="Token ID"
            required
          />
          <Input
            name="to"
            label="to"
            onChange={handleInputChange}
            placeholder="Transfer Ownership to..."
            err={state.warningMessage}
            required
          />
          <Button type="submit" title="Transfer Ownership" />
        </form>
      </FormWrapper>
    </Container>
  );
}

export default TransferOwnership;
