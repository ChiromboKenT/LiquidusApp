import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bscscan = createApi({
  reducerPath: 'bscscan',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bscscan.com' }),
  endpoints: builder => ({
    getBinancePrice: builder.query<string, void>({
      queryFn: async () => {
        try {
          const response = await fetch(
            '/api?module=stats&action=bnbprice&apikey=',
          );
          const data = await response.json();
          if(!data.result) throw new Error('No data found');

          return { data: data.result.ethusd };
        } catch (error: any) {
          console.error('Error fetching Binance price:', error);
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