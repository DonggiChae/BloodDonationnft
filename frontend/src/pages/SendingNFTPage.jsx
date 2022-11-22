import React from "react";
import styled from "styled-components";

import TransferOwnership from "../components/ContractMethods/TransferOwnership";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SendingNFTPage() {
  return (
    <Container>
      <TransferOwnership />
    </Container>
  );
}

export default SendingNFTPage;
