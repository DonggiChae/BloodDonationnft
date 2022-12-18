import React from "react";
import styled from "styled-components";
import MintMethodsContainer from "../organisms/MintMethodsContainer";
import mintBD from "../../ContractMethods/MintBD";

const Container = styled.div`
  margin-top: 150px;
`;

export default function MintNFTTemplate({ method }) {
  return (
    <Container>
      <MintMethodsContainer title="헌혈증 발행" method={mintBD} />
    </Container>
  );
}
