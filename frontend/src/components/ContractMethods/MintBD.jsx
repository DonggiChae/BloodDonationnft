import BloodDonationContract from "../../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

const mintBD = async (title, location, description, to) => {
  const gasAmount = await BloodDonationContract.methods
    .mintBD(title, location, description, to)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("발행 권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );

  await BloodDonationContract.methods
    .mintBD(title, location, description, to)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`성공적으로 헌혈증을 발행하였습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) => {
      console.log("하히", error);
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER });
    });
};

export default mintBD;
