import { useEffect, useState } from "react";
import styled from "styled-components";
import getNFT from "../../ContractMethods/GetNFT";
import { useSelector } from "react-redux";

import MyNFTTemplate from "../templates/MyNFTTemplate";

import dotenv from "dotenv";
dotenv.config();

const MyNFTContainer = styled.div``;

function MyNFTPage() {
  const [feedState, setFeedState] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      getNFT(user, setFeedState);
    }
  }, [user]);

  return (
    <MyNFTContainer>
      <MyNFTTemplate feed={feedState} />
    </MyNFTContainer>
  );
}

export default MyNFTPage;
