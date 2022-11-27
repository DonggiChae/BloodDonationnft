import { toast } from "react-toastify";
import BloodDonationContract from "../../klaytn/BloodDonationContract";

export const useBloodDonationNFT = async (tokenID) => {
  await BloodDonationContract.methods
    .use(tokenID)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.use(tokenID).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
    })
    .then(() =>
      toast.success(`헌혈증을 사용했습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((e) =>
      toast.error("사용 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};
