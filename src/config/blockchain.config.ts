import '@ethersproject/shims';

import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider();

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS || '';
const ABI = [
  'function stakedTokenSupply() external view returns (uint256)',
  'function stakedToken() external view returns (uint256)',
  'function rewardPerBlock() external view returns (uint256)',
];

export const contract = new ethers.Contract(contractAddress, ABI, provider);
