import styled from "styled-components";
import ConnectToKaikas from "./ConnectToKaikas";
import CloseButton from "../atoms/CloseButton";

import { useDispatch, useSelector } from "react-redux";
import * as uiReducer from "../../redux/reducers/ui";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0px;
`;

const Modal = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  top: 60px;
  right: 10vw;
  background-color: #fceeee;
  z-index: 999;
`;

const OutSide = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default function AuthModal() {
  const dispatch = useDispatch();
  const accountModal = useSelector((state) => state.ui.accountModal);
  const handleIsWalletOpen = () => {
    dispatch(uiReducer.accountModal(!accountModal));
  };
  return (
    <Container>
      <OutSide onClick={() => handleIsWalletOpen()} />
      <Modal>
        <CloseButton onClick={handleIsWalletOpen} />
        AuthModal
        <ConnectToKaikas />
      </Modal>
    </Container>
  );
}
