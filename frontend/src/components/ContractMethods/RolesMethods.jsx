import { toast } from "react-toastify";
import BloodDonationContract from "../../klaytn/BloodDonationContract";

export const addAdmin = async (account) => {
  const gasAmount = await BloodDonationContract.methods
    .grantHospitalRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .addAdmin(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`성공적으로 관리자 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export const renounceAdmin = async (account) => {
  const gasAmount = await BloodDonationContract.methods
    .grantHospitalRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .renounceAdmin(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`관리자 권한을 포기하였습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export const grantHospitalRole = async (account) => {
  const gasAmount = await BloodDonationContract.methods
    .grantHospitalRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .grantHospitalRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() => {
      toast.success(`성공적으로 병원 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      });
    })
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export const grantRedCrossRole = async (account) => {
  const gasAmount = await BloodDonationContract.methods
    .grantRedCrossRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .grantRedCrossRole(account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    })
    .then(() =>
      toast.success(`성공적으로 헌혈의 집 권한을 주었습니다.`, {
        position: toast.POSITION.TOP_CENTER,
      })
    )
    .catch((error) =>
      toast.error(error.toString(), { position: toast.POSITION.TOP_CENTER })
    );
};

export const checkRole = async (role, account) => {
  const gasAmount = await BloodDonationContract.methods
    .grantRedCrossRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .catch((e) =>
      toast.error("권한이 없습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
    );
  await BloodDonationContract.methods
    .checkRole(BloodDonationContract.methods.HOSPITAL, account)
    .send({
      from: window.klaytn.selectedAddress,
      gas: gasAmount,
    });
};
