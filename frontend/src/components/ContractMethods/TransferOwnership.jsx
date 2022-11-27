import { toast } from "react-toastify";
import BloodDonationContract from "../../klaytn/BloodDonationContract";
import { getWallet } from "../../utils/crypto";

const transferOwnership = async (from, to, tokenId) => {
  await BloodDonationContract.methods
    .transferFrom(from, to, tokenId)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods
        .transferFrom(from, to, tokenId)
        .send({
          from: getWallet().address,
          gas: gasAmount,
        })
        .then(() =>
          toast.success(`성공적으로 헌혈증을 보냈습니다.`, {
            position: toast.POSITION.TOP_CENTER,
          })
        );
    })
    .catch((e) =>
      toast.error("헌혈증을 소유하고 있지 않습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export default transferOwnership;
