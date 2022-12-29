import { toast } from "react-toastify";
import BloodDonationContract from "../klaytn/BloodDonationContract";

const transferOwnership = async (tokenIds, to) => {
  await BloodDonationContract.methods
    .batchTransferOwnership(tokenIds, to)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods
        .batchTransferOwnership(tokenIds, to)
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
    .catch((e) => {
      toast.error(e.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};

export default transferOwnership;
