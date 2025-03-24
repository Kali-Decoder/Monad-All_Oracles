import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const ACCOUNTS = process.env.DEPLOYER_ACCOUNT_PRIV_KEY
  ? [`${process.env.DEPLOYER_ACCOUNT_PRIV_KEY}`]
  : [];

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: false,
  },
  networks: {
    hardhat: { chainId: 31337 },
    bnbTestnet: {
      chainId: 97,
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: ACCOUNTS,
    },
    bnbMainnet: {
      chainId: 56,
      url: "https://bsc.nodereal.io", // "https://binance.llamarpc.com", // "https://binance.llamarpc.com", // "https://bsc.drpc.org", // "https://bsc-pokt.nodies.app", // "https://binance.llamarpc.com",
      accounts: ACCOUNTS,
    },
    xrpl_evm:{
      chainId: 1440002,
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: ACCOUNTS,
    },
    monadTestnet:{
      chainId: 10143,
      url: "https://monad-testnet.g.alchemy.com/v2/XvtthJ8YRg0riu9y90IdPJYSDm3HBtai",
      accounts: ACCOUNTS,
    },
  },
  etherscan: {
    apiKey: {
      
    },
    customChains: [
      {
        network: "iotaEvmMainnet",
        chainId: 8822,
        urls: {
          apiURL: "https://explorer.evm.iota.org/api",
          browserURL: "https://explorer.evm.iota.org",
        },
      },
      {
        network: "monadTestnet",
        chainId: 10143,
        urls: {
          apiURL: "https://explorer.evm.iota.org/api",
          browserURL: "https://testnet.monadexplorer.com/",
        },
      },
  
    ],
  },
  sourcify: {
    enabled: false,
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
