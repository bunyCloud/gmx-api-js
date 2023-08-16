const AVALANCHE = 43114;
const ARBITRUM = 42161;
const AddressZero = '0x0000000000000000000000000000000000000000';

const SUBGRAPHS_API_URLS = {
  [ARBITRUM]:
    'https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-arbitrum-stats/api',
  [AVALANCHE]:
    'https://api.thegraph.com/subgraphs/name/vipineth/gmx-stats-avax',
  chainlink: 'https://api.thegraph.com/subgraphs/name/deividask/chainlink',
};

const currentPriceUrls = {
  [ARBITRUM]: 'https://gmx-server-mainnet.uw.r.appspot.com/prices',
  [AVALANCHE]: 'https://gmx-avax-server.uc.r.appspot.com/prices',
};

const CHAINLINK_CONTRACTS = {
  USDC: '0x789190466e21a8b78b8027866cbbdc151542a26c',
  'USDC.e': '0x789190466e21a8b78b8027866cbbdc151542a26c',
  USDT: '0x838a42bd3b727880ef27920acb637abeff2f73d4',
  DAI: '0xdec0a100ead1faa37407f0edc76033426cf90b82',
  FRAX: '0x61eb091ea16a32ea5b880d0b3d09d518c340d750',
};

module.exports = {
  AVALANCHE,
  ARBITRUM,
  AddressZero,
  SUBGRAPHS_API_URLS,
  currentPriceUrls,
  CHAINLINK_CONTRACTS,
};
