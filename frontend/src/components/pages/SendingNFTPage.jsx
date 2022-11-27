import React from "react";
import styled from "styled-components";
import transferOwnership from "../ContractMethods/TransferOwnership";
import TransferOwnership from "../templates/TransferOwnerShipTemplate";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SendingNFTPage() {
  return (
    <Container>
      <TransferOwnership method={transferOwnership} />
    </Container>
  );
}

export default SendingNFTPage;
