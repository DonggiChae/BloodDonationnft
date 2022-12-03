import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { isValidAddress } from "../../utils/crypto";
import { useSelector } from "react-redux";

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
  const [state, setState] = useState({
    from: null,
    to: null,
    tokenId: null,
  });
  const toastId = React.useRef(null);
  const user = useSelector((state) => state.auth.user);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { to, from, tokenId } = state;
    toast.dismiss();
    if (!isValidAddress(to) || !isValidAddress(from)) {
      console.log(from, to, "~~~~");
      toastId.current = toast("Invalid wallet address", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    method(from, to, tokenId);
  };
  useEffect(() => setState({ ...state, from: user }), [user]);
  return (
    <Container>
      <TransferMethodContainer
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default TransferOwnership;
