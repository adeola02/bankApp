import { configureStore } from '@reduxjs/toolkit';
import bankApp  from './feature';

export const store = configureStore({
  reducer: {
    bankAppStore:bankApp
  },
})