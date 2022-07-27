require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-web3');

require('dotenv').config();
const { ETHERSCAN_API_KEY, POLYGONSCAN_API_KEY, ALCHEMY_API_KEY } = process.env;

if (!ETHERSCAN_API_KEY) {
  console.log('Please set ETHERSCAN_API_KEY in file .env !');
}

if (!POLYGONSCAN_API_KEY) {
  console.log('Please set POLYGONSCAN_API_KEY in file .env !');
}

const MUMBAI_RPC_LIST = [
  'https://rpc-mumbai.matic.today',
  'https://rpc-mumbai.maticvigil.com',
  'https://matic-mumbai.chainstacklabs.com',
  'https://matic-testnet-archive-rpc.bwarelabs.com',
  `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
];

const ether = (n) => `${n}${'0'.repeat(18)}`;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.16',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      blockGasLimit: 2e7,
      allowUnlimitedContractSize: true,
      accounts: {
        count: 100,
        accountsBalance: ether(1000000),
      },
    },
    local: {
      url: 'http://localhost:8545',
    },
    apothem: {
      url: 'https://rpc.apothem.network',
      chainId: 51,
    },
    xinfin: {
      url: 'https://rpc.xinfin.network',
      chainId: 50,
    },
    mumbai: {
      url: MUMBAI_RPC_LIST[4],
      chainId: 80001,
    },
  },
  etherscan: {
    apiKey: {
      // polygon
      polygon: POLYGONSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
      apothem: ETHERSCAN_API_KEY,
      xinfin: ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'apothem',
        chainId: 51,
        urls: {
          apiURL: 'https://apothem.blocksscan.io/api',
          browserURL: 'https://explorer.apothem.network',
        },
      },
      {
        network: 'xinfin',
        chainId: 50,
        urls: {
          apiURL: 'https://xdc.blocksscan.io/api',
          browserURL: 'https://explorer.xinfin.network',
        },
      },
    ],
  },
  mocha: {
    timeout: 20000,
  },
};
