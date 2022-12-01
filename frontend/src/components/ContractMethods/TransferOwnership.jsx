import { toast } from "react-toastify";
import BloodDonationContract from "../../klaytn/BloodDonationContract";

const transferOwnership = async (from, to, tokenId) => {
  console.log(from, to, tokenId);
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
          from: window.klaytn.selectedAddress,
          gas: gasAmount,
        })
        .then(() =>
          toast.success(`성공적으로 헌혈증을 보냈습니다.`, {
            position: toast.POSITION.TOP_CENTER,
          })
        );
    })
    .catch((e) =>
      toast.error(e.toString(), {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export default transferOwnership;
