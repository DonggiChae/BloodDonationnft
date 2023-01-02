import { useEffect, useState } from "react";
import styled from "styled-components";
import getNFT from "../../ContractMethods/GetNFT";
import { useSelector } from "react-redux";

import BloodDonationNFTUseTemplate from "../templates/BloodDonationNFTUseTemplate";

import dotenv from "dotenv";
dotenv.config();

const MyNFTContainer = styled.div``;

export default function BloodDonationNFTUse() {
  const [feedState, setFeedState] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      getNFT(user, setFeedState);
    }
  }, [user]);

  return (
    <MyNFTContainer>
      <BloodDonationNFTUseTemplate feed={feedState} />
    </MyNFTContainer>
  );
}
