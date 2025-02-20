import type { NetworksUserConfig } from "hardhat/types";

export const getHardhatConfigNetworks = (PRIVATE_KEYS: string[]): NetworksUserConfig => ({
  hardhat: {
    chainId: 1337,
    forking: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      blockNumber: 14672712,
    },
  },
  "eth-mainnet": {
    url: "https://api.mycryptoapi.com/eth",
    accounts: PRIVATE_KEYS,
  },
  goerli: {
    url: "https://rpc.goerli.mudit.blog",
    accounts: PRIVATE_KEYS,
    gas: 2100000,
    gasPrice: 8000000000,
  },
  "bsc-testnet": {
    url: `https://data-seed-prebsc-2-s3.binance.org:8545`,
    accounts: PRIVATE_KEYS,
    gas: 5000000,
    gasPrice: 80000000000,
  },
  "polygon-mumbai": {
    url: "https://polygon-mumbai.chainstacklabs.com",
    accounts: PRIVATE_KEYS,
    gas: 5000000,
    gasPrice: 80000000000,
  },
  ropsten: {
    url: "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    accounts: PRIVATE_KEYS,
    gas: 9000000,
    gasPrice: 80000000000,
  },
  "eth-localnet": {
    url: "http://localhost:8100",
    gas: 2100000,
    gasPrice: 80000000000,
  },
  "bsc-localnet": {
    url: "http://localhost:8120",
    gas: 5000000,
    gasPrice: 80000000000,
  },
  "polygon-localnet": {
    url: "http://localhost:8140",
    gas: 5000000,
    gasPrice: 80000000000,
  },
});

export const getHardhatConfigScanners = () => ({
  apiKey: {
    bscTestnet: process.env.BSCSCAN_API_KEY,
    goerli: process.env.ETHERSCAN_API_KEY,
    polygonMumbai: process.env.POYLGONSCAN_API_KEY,
    ropsten: process.env.ETHERSCAN_API_KEY,
  },
});
