import caver from "../klaytn/caver";
import BloodDonation from "../contracts/BloodDonation.json";
import ContarctAddress from "../contracts/contract-address.json";
/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */

const DEPLOYED_ADDRESS = ContarctAddress.lock;
const DEPLOYED_ABI = BloodDonation.abi;

const BloodDonationContract =
  DEPLOYED_ABI &&
  DEPLOYED_ADDRESS &&
  new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);

export default BloodDonationContract;
