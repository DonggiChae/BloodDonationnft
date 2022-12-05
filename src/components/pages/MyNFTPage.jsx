import { useEffect } from "react";
import styled from "styled-components";
import getNFT from "../../ContractMethods/GetNFT";
import { useSelector, useDispatch } from "react-redux";
import * as nftListReducer from "../../redux/reducers/bdNFTs";
import MyNFTTemplate from "../templates/MyNFTTemplate";

import dotenv from "dotenv";
dotenv.config();

const MyNFTContainer = styled.div``;

function MyNFTPage() {
  const dispatch = useDispatch();
  const setFeed = (nftList) => dispatch(nftListReducer.setFeed(nftList));
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      getNFT(user, setFeed);
    }
  }, [user]);

  return (
    <MyNFTContainer>
      <MyNFTTemplate />;
    </MyNFTContainer>
  );
}

export default MyNFTPage;
