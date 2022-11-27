import BloodDonationContract from "../../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

const getNFT = async (user, setNftList) => {
  await BloodDonationContract.methods
    .getTotalBDCount()
    .call()
    .then((count) => {
      const feed = [];
      if (!count) return setNftList([]);
      for (let i = count; i > 0; i--) {
        BloodDonationContract.methods
          .getBD(i)
          .call()
          .then((res) => {
            if (
              user.toUpperCase() === res[1][res[1].length - 1].toUpperCase()
            ) {
              feed.push(res);
              setNftList([...feed]);
            }
          });
      }
    })
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export default getNFT;
