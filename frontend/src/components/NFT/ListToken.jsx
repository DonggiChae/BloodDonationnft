import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import contractAddress from "../../contracts/contract-address.json";

const account = localStorage.getItem("_user");

export default function ListToken() {
  const { isLoading, error, data, isFetching } = useQuery(
    ["BloodDonationNFT"],
    axios({
      method: "get",
      url: `https://kip17-api.klaytnapi.com/v2/contract/${contractAddress.lock}/owner/${account}`,
    }).then((res) => res.data)
  );
}
