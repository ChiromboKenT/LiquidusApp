import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { contract } from '@config/blockchain.config';


export const blockchainApi = createApi({
  reducerPath: 'blockchainApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    getTotalLiquidity: builder.query<string, void>({
      queryFn: async () => {
        console.log("Triggered")
        const data = await contract.stakedTokenSupply();
        return { data: data.toString() };
      },
    }),
    getLIQTokensStaked: builder.query<string, void>({
      queryFn: async () => {
        const data = await contract.stakedToken();
        return { data: data.toString() };
      },
    }),
    getAPR: builder.query<string, void>({
      queryFn: async () => {
        const data = await contract.rewardPerBlock();
        return { data: data.toString() };
      },
    }),
  }),
});

export const {
  useGetTotalLiquidityQuery,
  useGetLIQTokensStakedQuery,
  useGetAPRQuery,
} = blockchainApi;
