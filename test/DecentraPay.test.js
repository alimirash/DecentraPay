import { expect } from "chai";
import { ethers } from "hardhat";

describe("DecentraPay", function () {
  it("Should return the right name", async function () {
    const [owner] = await ethers.getSigners();

    const DecentraPay = await ethers.getContractFactory("DecentraPay");
    const decentraPay = await DecentraPay.deploy();

    await decentraPay.deployed();

    expect(await decentraPay.name()).to.equal("DecentraPay");
  });
});
