import { useEffect } from "react";
import styled from "styled-components";
import getNFT from "../components/ContractMethods/GetNFT";
import { useSelector, useDispatch } from "react-redux";
import * as NFTReducer from "../redux/reducers/bdNFTs";

import dotenv from "dotenv";
dotenv.config();

const NFTContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MyNFTPage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    getNFT();
  }, [user]);

  return <NFTContainer></NFTContainer>;
}

export default MyNFTPage;
