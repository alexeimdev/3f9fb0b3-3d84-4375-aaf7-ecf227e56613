import { configureStore } from '@reduxjs/toolkit';
import storeReducer from '../features/store/storeSlide';

export const store = configureStore({
  reducer: {
    store: storeReducer,
  },
});
