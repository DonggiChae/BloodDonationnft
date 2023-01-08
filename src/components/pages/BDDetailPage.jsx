import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNFTDetail } from "../../ContractMethods/GetNFT";
import { toast } from "react-toastify";

import InputNFTID from "../organisms/InputNFTID";
import DetailModal from "../organisms/DetailModal";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BDDetailPage() {
  const [NFTState, setNFTState] = useState([]);
  const [modalState, setModalState] = useState(false);

  const [NFTIdsState, setNFTIdsState] = useState(0);

  const handleIds = (e) => {
    setNFTIdsState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    const res = await getNFTDetail(NFTIdsState);
    if (res !== []) {
      setNFTState(res);
      setModalState(true);
    }
  };

  useEffect(() => {
    setModalState(false);
  }, []);
  return (
    <Container>
      {modalState ? (
        <DetailModal handleModal={setModalState} contents={NFTState} />
      ) : (
        <InputNFTID handleSubmit={handleSubmit} handleIds={handleIds} />
      )}
    </Container>
  );
}

export default BDDetailPage;
