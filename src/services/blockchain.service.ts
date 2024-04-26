
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { contract } from '@config/blockchain.config';


export const blockchainApi = createApi({
  reducerPath: 'blockchainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({

    getTotalLiquidity: builder.query<string, void>({
      queryFn: async () => {
        try {
          const data = await contract.stakedTokenSupply();
          console.log(`Total Liquidity: ${data.toString()}`);
          return { data: data.toString() };
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


    getAPR: builder.query<string, void>({
      queryFn: async () => {
        try {
          const data = await contract.rewardPerBlock();
          console.log(`APR: ${data.toString()}`);
          return { data: data.toString() };
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
