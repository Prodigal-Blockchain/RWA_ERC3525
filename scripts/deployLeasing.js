const { ethers, run, network } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = deployer.address;
  const LeasingContract = await ethers.getContractFactory("LeasingContract");
  console.log("Deploying contract...");
  const leasingContract = await LeasingContract.deploy(deployerAddress);
  const leasingContractaddress = await leasingContract.getAddress();
  console.log(`Deployed contract to : ${leasingContractaddress}`);

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
    await leasingContract.deploymentTransaction(6);
    await customVerify(leasingContractaddress, []);
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function customVerify(leasingContractaddress, args) {
  console.log("Verifying...");
  await sleep(120 * 1000);
  try {
    await run("verify:verify", {
      address: leasingContractaddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
