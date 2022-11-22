import { useEffect } from "react";
import styled from "styled-components";
import getNFT from "../components/ContractMethods/GetNFT";
import { useSelector, useDispatch } from "react-redux";
import * as NFTReducer from "../redux/reducers/bdNFTs";
import MyNFTTemplate from "../components/templates/MyNFTTemplate";

import dotenv from "dotenv";
dotenv.config();

function MyNFTPage() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const Feed = getNFT();
    console.log(Feed);
  }, [user]);

  return <MyNFTTemplate />;
}

export default MyNFTPage;
