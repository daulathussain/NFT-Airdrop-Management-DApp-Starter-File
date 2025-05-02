// Update with your actual contract address after deployment on Holesky

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
const DEFAULT_MINT_FEE_CHARGE = process.env.NEXT_PUBLIC_DEFAULT_MINT_FEE;
const APP_NAME_DAPP = process.env.NEXT_PUBLIC_APP_NAME;
const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY;
const PINATA_API_URL = process.env.NEXT_PUBLIC_PINATA_API_URL;

// NETWORK
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const BLOCKCHAIN = process.env.NEXT_PUBLIC_BLOCKCHAIN;
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const NAME = process.env.NEXT_PUBLIC_NAME;
const SYMBOL = process.env.NEXT_PUBLIC_SYMBOL;
const DECIMAL = process.env.NEXT_PUBLIC_DECIMAL;
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
const EXPLORER_URL = process.env.NEXT_PUBLIC_EXPLORER_URL;

export const NFTsAirDropAddress = CONTRACT_ADDRESS;

// IPFS gateway URLs
export const IPFS_GATEWAY = PINATA_API_URL;

// Pinata keys (store these securely in environment variables in production)
export const pinataConfig = {
  pinataApiKey: PINATA_API_KEY,
  pinataSecretApiKey: PINATA_SECRET_API_KEY,
};

// Default mintFee in wei
export const DEFAULT_MINT_FEE = DEFAULT_MINT_FEE_CHARGE; // 0.00025 ETH

// App name
export const APP_NAME = APP_NAME_DAPP;

// Network configuration - Updated for Holesky testnet
export const networkConfig = {
  chainId: CHAIN_ID, // Holesky testnet
  chainName: BLOCKCHAIN,
  nativeCurrency: {
    name: NAME,
    symbol: SYMBOL,
    decimals: DECIMAL,
  },
  rpcUrls: [RPC_URL],
  blockExplorerUrls: [EXPLORER_URL],
};
