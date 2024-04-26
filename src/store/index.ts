import { configureStore } from '@reduxjs/toolkit';
import { blockchainApi } from '../services/blockchain.service';

export const store = configureStore({
  reducer: {
    [blockchainApi.reducerPath]: blockchainApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(blockchainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
