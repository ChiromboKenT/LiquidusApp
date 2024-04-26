import { configureStore } from '@reduxjs/toolkit';
import { blockchainApi } from '../services/blockchain.service';
import { bscscan } from '@services/stat.service';

export const store = configureStore({
  reducer: {
    [blockchainApi.reducerPath]: blockchainApi.reducer,
    [bscscan.reducerPath]: bscscan.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(blockchainApi.middleware, bscscan.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
