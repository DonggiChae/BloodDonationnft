import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isValidAddress } from "../../utils/crypto";
import { useSelector } from "react-redux";

import TransferMethodModalContainer from "./TransferMethodModalContainer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

function TransferOwnership({ method, handleModal, sendingModalState }) {
  const [toState, setToState] = useState(null);

  const [NFTIdsState, setNFTIdsState] = useState([]);
  const toastId = React.useRef(null);

  const handleInputChange = (e) => {
    setToState(e.target.value);
  };

  const handleIds = (e) => {
    setNFTIdsState([e.target.value.split(",").map(Number)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tokenIds = NFTIdsState[0];
    toast.dismiss();
    if (!isValidAddress(toState)) {
      toastId.current = toast("Invalid wallet address", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    method(tokenIds, toState);
  };

  return (
    <Container>
      <TransferMethodModalContainer
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleModal={handleModal}
        handleIds={handleIds}
        sendingModalState={sendingModalState}
      />
    </Container>
  );
}

export default TransferOwnership;
