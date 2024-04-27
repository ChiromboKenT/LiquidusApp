
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { contract, formatEther } from '@config/blockchain.config';

interface ContractData {
  totalLiquidity: number;
  apr: number;
}

export const blockchainApi = createApi({
  reducerPath: 'blockchainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({

    getContractData: builder.query<any, void>({
      queryFn: async () => {
        try {
          const data = await contract.stakedTokenSupply();
          const tokenSupplyEtherValue = formatEther(data.toString());

          console.log(`Total Liquidity: ${tokenSupplyEtherValue}`);

          //Calculate APR assuming 10512000 blocks per year
          const blocksPerYear = 10512000;
          const aprResponse = await contract.rewardPerBlock();
          const apr = (formatEther(aprResponse.toString()) * blocksPerYear / tokenSupplyEtherValue) * 100;
          console.log(`APR: ${apr.toFixed(2)}`);


          return {
            data: {
              totalLiquidity: tokenSupplyEtherValue,
              apr : parseFloat(apr.toFixed(2)),
            } as ContractData,
          };
        } catch (error: any) {
          console.error('Error fetching total liquidity:', error);
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: error.message || 'An error occurred',
            },
          };
        }
      },
    }),
  }),
});

// Export hooks for each query defined in the API
export const {
  useGetContractDataQuery,
} = blockchainApi;
