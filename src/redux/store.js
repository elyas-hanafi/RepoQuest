import { configureStore } from '@reduxjs/toolkit';
import githubFilterSlice from './filterSlice';

export const store = configureStore({
  reducer: {
    filters: githubFilterSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
