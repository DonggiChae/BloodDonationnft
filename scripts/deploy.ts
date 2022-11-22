import { ethers } from "hardhat";
import { artifacts } from "hardhat";

const path = require("path");

async function main() {
  const Lock = await ethers.getContractFactory("BloodDonation");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(`Address: ${lock.address}`);

  saveFrontendFiles(lock);
}

function saveFrontendFiles(lock: any) {
  const fs = require("fs");
  const contractsDir = path.join(
    __dirname,
    "..",
    "frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ lock: lock.address }, undefined, 2)
  );

  const LockArtifact = artifacts.readArtifactSync("BloodDonation");

  fs.writeFileSync(
    path.join(contractsDir, "BloodDonation.json"),
    JSON.stringify(LockArtifact, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
