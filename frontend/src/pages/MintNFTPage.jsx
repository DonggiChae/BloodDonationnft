import React from "react";
import styled from "styled-components";
import MintNFTTemplate from "../components/templates/MintNFTTemplate";
import mintBD from "../components/ContractMethods/MintBD";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MintNFTPage() {
  return (
    <Container>
      <MintNFTTemplate method={mintBD} />
    </Container>
  );
}

export default MintNFTPage;
