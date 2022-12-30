import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isValidAddress } from "../../utils/crypto";

import TransferMethodContainer from "../organisms/TransferMethodContainer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
`;

function TransferOwnership({ method }) {
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
      <TransferMethodContainer
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleIds={handleIds}
      />
    </Container>
  );
}

export default TransferOwnership;
