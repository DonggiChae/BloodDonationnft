import BloodDonationContract from "../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

const getNFT = (user, setFeedState) => {
  BloodDonationContract.methods
    .getTotalBDCount()
    .call()
    .then((count) => {
      const feed = [];
      if (!count) return setFeedState([]);
      for (let i = count; i > 0; i--) {
        BloodDonationContract.methods
          .getBD(i)
          .call()
          .then((res) => {
            if (
              user.toUpperCase() === res[1][res[1].length - 1].toUpperCase()
            ) {
              feed.push(res);
              setFeedState([...feed]);
            }
          });
      }
      setFeedState([...feed]);
    })
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export const getNFTDetail = async (id) => {
  try {
    const res = await BloodDonationContract.methods.getBD(id).call();
    return res;
  } catch (error) {
    toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER });
  }
};

export default getNFT;
