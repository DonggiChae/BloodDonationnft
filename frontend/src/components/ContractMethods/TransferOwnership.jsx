import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import BloodDonationContract from "../../klaytn/BloodDonationContract";
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

const transferOwnership = async (from, to, tokenId) => {
  const gasAmount = await BloodDonationContract.methods
    .transferFrom(from, to, tokenId)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("헌혈증을 소유하고 있지 않습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .transferFrom(from, to, tokenId)
    .send({
      from: getWallet().address,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`성공적으로 헌혈증을 보냈습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

function TransferOwnership({ tokenId, issueDate, currentOwner }) {
  const [state, setState] = useState({
    from: null,
    to: null,
  });
  const toastId = React.useRef(null);

  const handleInputChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { to, from } = state;
    toast.dismiss();
    if (!isValidAddress(to) || !isValidAddress(from)) {
      toastId.current = toast("* Invalid wallet address", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    transferOwnership(from, to, tokenId);
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
            name="from"
            label="from"
            onChange={handleInputChange}
            placeholder="Transfer Ownership from..."
            err={state.warningMessage}
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
