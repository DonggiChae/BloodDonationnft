import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isValidAddress } from "../../utils/crypto";

import TransferMethodModalContainer from "./TransferMethodModalContainer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
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
      <TransferMethodModalContainer
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleModal={handleModal}
        checkedList={checkedList}
        sendingModalState={sendingModalState}
      />
    </Container>
  );
}

export default TransferOwnershipModal;
