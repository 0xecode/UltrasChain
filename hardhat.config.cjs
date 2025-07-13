require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000, // Plus d'optimisations pour réduire le gaz
        details: {
          yul: true, // Optimisations Yul pour réduire encore plus le gaz
        }
      },
      viaIR: true // Code generation via IR pour optimisations avancées
    }
  },
  networks: {
    chilizSpicy: {
      url: "https://spicy-rpc.chiliz.com/",
      chainId: 88882,
      accounts: process.env.PRIVATE_KEY && process.env.PRIVATE_KEY.length === 66 ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 10000000000, // 10 Gwei (250x moins cher!)
      gas: 8000000, // Limite de gaz raisonnable
    },
    chilizSpicyAlt: {
      url: "https://chiliz-testnet.gateway.tatum.io",
      chainId: 88882,
      accounts: process.env.PRIVATE_KEY && process.env.PRIVATE_KEY.length === 66 ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 10000000000, // 10 Gwei
      gas: 8000000,
    },
    chilizSpicyPublic: {
      url: "https://chiliz-spicy.publicnode.com",
      chainId: 88882,
      accounts: process.env.PRIVATE_KEY && process.env.PRIVATE_KEY.length === 66 ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 10000000000, // 10 Gwei
      gas: 8000000,
    },
    hardhat: {
      chainId: 31337,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        count: 10,
        accountsBalance: "10000000000000000000000", // 10000 ETH
      }
    }
  },
  etherscan: {
    apiKey: {
      chilizSpicy: "PLACEHOLDER_API_KEY"
    },
    customChains: [
      {
        network: "chilizSpicy",
        chainId: 88882,
        urls: {
          apiURL: "https://testnet.chiliscan.com/api",
          browserURL: "https://testnet.chiliscan.com"
        }
      }
    ]
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};