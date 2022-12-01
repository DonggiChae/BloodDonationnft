import BloodDonationContract from "../klaytn/BloodDonationContract";
import { toast } from "react-toastify";

export const addAdmin = async (account) => {
  await BloodDonationContract.methods
    .addAdmin(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.addAdmin(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
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
  await BloodDonationContract.methods
    .renounceAdmin(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.renounceAdmin(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
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
  await BloodDonationContract.methods
    .grantHospitalRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.grantHospitalRole(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
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
  await BloodDonationContract.methods
    .grantRedCrossRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.grantRedCrossRole(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
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

export const checkHospitalRole = async (account) => {
  await BloodDonationContract.methods
    .checkHospitalRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.checkHospitalRole(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
    })
    .catch((e) =>
      toast.error(e.toString, {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export const checkRedCrossRole = async (account) => {
  await BloodDonationContract.methods
    .checkRedCrossRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.checkRedCrossRole(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
    })
    .catch((e) =>
      toast.error(e.toString, {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};

export const checkAdminRole = async (account) => {
  await BloodDonationContract.methods
    .checkAdminRole(account)
    .estimateGas({
      from: window.klaytn.selectedAddress,
      gas: 6000000,
    })
    .then(async (gasAmount) => {
      await BloodDonationContract.methods.checkAdminRole(account).send({
        from: window.klaytn.selectedAddress,
        gas: gasAmount,
      });
    })
    .catch((e) =>
      toast.error(e.toString, {
        position: toast.POSITION.TOP_CENTER,
      })
    );
};
