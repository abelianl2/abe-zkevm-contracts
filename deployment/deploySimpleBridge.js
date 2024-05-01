const {ethers, upgrades} = require("hardhat");

async function main() {

    // // SimpleBridge
    // const SimpleBridge = await ethers.getContractFactory("SimpleBridgeV2");
    // const instance = await upgrades.deployProxy(SimpleBridge);
    // await instance.waitForDeployment();
    // console.log("SimpleBridge V2:", instance.target);

     // SimpleBridge
     const SimpleBridge = await ethers.getContractFactory("SimpleBridgeV2");
     const instance = await upgrades.deployProxy(SimpleBridge);
     await instance.deployed(); // 等待合约部署完成
     console.log("SimpleBridge V2:", instance.address);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
