require("@nomicfoundation/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/3HYx-meVJ3azGoMDw6OGw-q8AcakcdWs",
      accounts: [
        "fb96b7d92bc15c69348a0c11b92673047a5bd4d0d130c851e72f494bd85ffc48",
      ],
    },
  },
};

// https://eth-goerli.g.alchemy.com/v2/3HYx-meVJ3azGoMDw6OGw-q8AcakcdWs
