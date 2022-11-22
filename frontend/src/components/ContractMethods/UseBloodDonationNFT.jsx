import { toast } from "react-toastify";
import BloodDonationContract from "../../klaytn/BloodDonationContract";

export const useBloodDonationNFT = async (tokenID) => {
  const gasAmount = await BloodDonationContract.methods
    .use(tokenID)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("사용 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .use(tokenID)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`헌혈증을 사용했습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};
