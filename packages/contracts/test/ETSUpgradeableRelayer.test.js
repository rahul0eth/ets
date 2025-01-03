const { setup, getFactories } = require("./setup.js");

let factories;

describe("Upgrades tests", () => {
  beforeEach("Setup test", async () => {
    factories = await getFactories();
    [accounts, contracts, initSettings] = await setup();

    // Create two tags and transfer them to RandomOne so that user can add a relayer in tests.
    const tag = "#LOVE";
    await contracts.ETSRelayer.connect(accounts.RandomTwo).getOrCreateTagIds([tag]);
    tokenId = await contracts.ETSToken.computeTagId(tag);
    await contracts.ETSToken.connect(accounts.ETSPlatform).transferFrom(
      accounts.ETSPlatform.address,
      accounts.RandomOne.address,
      tokenId,
    );

    const tag2 = "#HATE";
    await contracts.ETSRelayer.connect(accounts.RandomTwo).getOrCreateTagIds([tag2]);
    tokenId2 = await contracts.ETSToken.computeTagId(tag2);
    await contracts.ETSToken.connect(accounts.ETSPlatform).transferFrom(
      accounts.ETSPlatform.address,
      accounts.RandomTwo.address,
      tokenId2,
    );

    await contracts.ETSRelayerFactory.connect(accounts.RandomOne).addRelayer("Relayer 1");
    await contracts.ETSRelayerFactory.connect(accounts.RandomTwo).addRelayer("Relayer 2");

    beaconAddress = await contracts.ETSRelayerFactory.getBeacon();
    relayer1Address = await contracts.ETSAccessControls.getRelayerAddressFromName("Relayer 1");
    relayer2Address = await contracts.ETSAccessControls.getRelayerAddressFromName("Relayer 2");

    etsRelayerBeaconABI = require("../abi/contracts/relayers/ETSRelayerBeacon.sol/ETSRelayerBeacon.json");
    etsRelayerV1ABI = require("../abi/contracts/relayers/ETSRelayerV1.sol/ETSRelayerV1.json");
    etsRelayerV2testABI = require("../abi/contracts/test/ETSRelayerV2test.sol/ETSRelayerV2test.json");
  });

  describe("ETSRelayer", () => {
    it("is upgradeable", async () => {
      relayer1v1 = new ethers.Contract(relayer1Address, etsRelayerV1ABI, accounts.Buyer);
      relayer2v1 = new ethers.Contract(relayer2Address, etsRelayerV1ABI, accounts.Creator);

      expect(await relayer1v1.version()).to.be.equal("0.1-Beta");
      expect(await relayer2v1.version()).to.be.equal("0.1-Beta");

      // Connect to the beacon contract by platform
      etsRelayerBeacon = new ethers.Contract(beaconAddress, etsRelayerBeaconABI, accounts.ETSAdmin);

      // Deploy v2 relayer, and update beacon with address.
      const ETSRelayerV2test = await factories.ETSRelayerV2test.deploy();
      await etsRelayerBeacon.update(await ETSRelayerV2test.getAddress());
      expect(await etsRelayerBeacon.implementation()).to.be.equal(await ETSRelayerV2test.getAddress());

      // Reload relayers, note addresses (of proxies) haven't changed, only the API has.
      relayer1v2 = new ethers.Contract(relayer1Address, etsRelayerV2testABI, accounts.Buyer);
      relayer2v2 = new ethers.Contract(relayer2Address, etsRelayerV2testABI, accounts.Creator);

      // Expect version bump.
      expect(await relayer1v2.version()).to.be.equal("0.2-Beta");
      expect(await relayer2v1.version()).to.be.equal("0.2-Beta");

      // Expect new function present.
      expect(await relayer1v2.newFunction()).to.be.equal(true);
      expect(await relayer2v2.newFunction()).to.be.equal(true);
    });

    it("is only upgradeable by owner", async () => {
      // Connect to the beacon contract using random address.
      etsRelayerBeacon = new ethers.Contract(beaconAddress, etsRelayerBeaconABI, accounts.RandomTwo);

      // Deploy v2 relayer, and try to update beacon with address.
      const ETSRelayerV2test = await factories.ETSRelayerV2test.deploy();
      await expect(etsRelayerBeacon.update(await ETSRelayerV2test.getAddress())).to.be.revertedWith(
        "Ownable: caller is not the owner",
      );
    });
  });
});
