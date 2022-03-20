import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/store/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
