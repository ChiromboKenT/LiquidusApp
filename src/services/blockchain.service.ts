
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { contract, formatEther } from '@config/blockchain.config';


export const blockchainApi = createApi({
  reducerPath: 'blockchainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({

    getTotalLiquidity: builder.query<number, void>({
      queryFn: async () => {
        try {
          const data = await contract.stakedTokenSupply();
          const etherValue = formatEther(data.toString());

          console.log(`Total Liquidity: ${etherValue}`);
          return { data: etherValue };
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


    getLIQTokensStaked: builder.query<string, void>({
      queryFn: async () => {
        try {
          const data = await contract.stakedToken();
          console.log(`LIQ Tokens Staked: ${data.toString()}`);
          return { data: data.toString() };
        } catch (error : any) {
          console.error('Error fetching LIQ tokens staked:', error);
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: error.message || 'An error occurred',
            },
          };
        }
      },
    }),


    getAPR: builder.query<number, void>({
      queryFn: async () => {
        try {
          const data = await contract.rewardPerBlock();
          const etherValue = formatEther(data.toString());

          console.log(`APR: ${etherValue}`);
          return { data: etherValue };
        } catch (error : any) {
          console.error('Error fetching APR:', error);
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
  useGetTotalLiquidityQuery,
  useGetLIQTokensStakedQuery,
  useGetAPRQuery,
} = blockchainApi;
