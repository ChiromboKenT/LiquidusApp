import '@ethersproject/shims';
import { ethers } from 'ethers';
import ContractAbi from "./contract-abi"

const rplURL =
  process.env.EXPO_PUBLIC_RPC_URL || 'https://bsc-dataseed.binance.org/';

const provider = new ethers.JsonRpcProvider(rplURL);

const contractAddress = process.env.EXPO_PUBLIC_CONTRACT_ADDRESS || '';

export const contract = new ethers.Contract(contractAddress, ContractAbi, provider);

export const formatEther = (number: string): number => {
  return +parseFloat(ethers.formatEther(number)).toFixed(6);
}
