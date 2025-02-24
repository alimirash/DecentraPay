const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const TransferFactory = await hre.ethers.getContractFactory("DecentraPay");
  console.log("Deploying contracts with the account:", deployer.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
