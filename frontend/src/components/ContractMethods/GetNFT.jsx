import BloodDonationContract from "../../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

const getNFT = async () => {
  await BloodDonationContract.methods
    .getTotalBDCount()
    .call()
    .then((count) => {
      if (!count) return [];
      const feed = [];
      for (let i = count; i > 0; i--) {
        BloodDonationContract.methods
          .getBD(i)
          .call()
          .then((res) => {
            if (
              localStorage.getItem("_user").toUpperCase() ===
              res[1][res[1].length - 1].toUpperCase()
            ) {
              console.log("result:", res);
              feed.push(res);
            }
          });
      }
      return Promise.all(feed);
    })
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export default getNFT;
