import BloodDonationContract from "../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

const mintBD = async (title, location, description, to) => {
  await BloodDonationContract.methods
    .mintBD(title, location, description, to)
    .send({
      from: window.klaytn.selectedAddress,
      gas: 450000,
    })
    .then(() =>
      toast.success(`성공적으로 헌혈증을 발행하였습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) => {
      toast.error(error.message.toString(), {
        position: toast.POSITION.TOP_CENTER,
      });
    });
};

export default mintBD;
