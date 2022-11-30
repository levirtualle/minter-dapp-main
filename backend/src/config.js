require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Unknown Crew";
const description = "A collections of cadets, officers and admirals of the Unknown Federation (abbvreviated as UF), a multi-national union of individuals who explores the vast body of space in search of new life and new civilisations. The Unknown Federation operates semi-autonomously under a united government, founded on the principles of liberty, equality, peace, justice, and progress, with the purpose of furthering the universal rights of all sentient life. Their main goals is to acquire knowledge and resources to facilitate peaceful cooperation, scientific development, space exploration, and defense."
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

const layerConfigurations = [
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "Background" },
      { name: "Olivia" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 1" },
      { name: "Rank 1" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 900,
    layersOrder: [
      { name: "Background" },
      { name: "Emma" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 2" },
      { name: "Rank 3" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 1500,
    layersOrder: [
      { name: "Background" },
      { name: "Charlotte" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 6" },
      { name: "Rank 5" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 2100,
    layersOrder: [
      { name: "Background" },
      { name: "Amelia" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 7" },
      { name: "Rank 5" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 2700,
    layersOrder: [
      { name: "Background" },
      { name: "Ava" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 3" },
      { name: "Rank 5" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 3300,
    layersOrder: [
      { name: "Background" },
      { name: "Sophia" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 5" },
      { name: "Rank 5" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 5000,
    layersOrder: [
      { name: "Background" },
      { name: "Isabella" },
      { name: "Facial Scar 1" },        
      { name: "Uniform 4" },
      { name: "Rank 7" },
      { name: "Eyebrows 1" },
      { name: "Eyes 1" },
      { name: "Nose 1" },
      { name: "Lips 1" },
      { name: "Eyewear 1" },
      { name: "Facemask 1" },
      { name: "Hair 1" }
    ],
  },
  {
    growEditionSizeTo: 5300,
    layersOrder: [
      { name: "Background" },
      { name: "Liam" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 8" },
      { name: "Rank 2" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 5900,
    layersOrder: [
      { name: "Background" },
      { name: "Noah" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 9" },
      { name: "Rank 4" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 6500,
    layersOrder: [
      { name: "Background" },
      { name: "Oliver" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 13" },
      { name: "Rank 6" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 7100,
    layersOrder: [
      { name: "Background" },
      { name: "Elijah" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 14" },
      { name: "Rank 6" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 7700,
    layersOrder: [
      { name: "Background" },
      { name: "James" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 10" },
      { name: "Rank 6" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 8300,
    layersOrder: [
      { name: "Background" },
      { name: "Benjamin" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 12" },
      { name: "Rank 6" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      { name: "Background" },
      { name: "Lucas" },
      { name: "Facial Scar 2" },        
      { name: "Uniform 11" },
      { name: "Rank 8" },
      { name: "Eyebrows 2" },
      { name: "Eyes 2" },
      { name: "Nose 2" },
      { name: "Lips 2" },
      { name: "Eyewear 2" },
      { name: "Facial Features 1" },
      { name: "Hair 2" }
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: true,
};

const extraMetadata = {
  external_url: "https://unknowncrew.xyz", // Replace with your website or remove this line if you do not have one.
  creator: "Ultra Silvafine",
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 10; // Your API key rate limit
const CHAIN = 'polygon'; // only goerli, polygon, or ethereum

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Unknown Crew';
const CONTRACT_SYMBOL = 'UKC';
const METADATA_UPDATABLE = false; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x4F9206707B79B3caE72E6D5465885888000C1075';
const TREASURY_ADDRESS = '0x4F9206707B79B3caE72E6D5465885888000C1075';
const MAX_SUPPLY = 10000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Goerli = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-11-29T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-11-29T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // 000Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x4F9206707B79B3caE72E6D5465885888000C1075"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which crew member will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeihypm2bipgejs23awi4g7d25oas4rghmeksjodmhcp4azbaxo52ym"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "UKC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://unknowncrew.xyz",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,

  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
