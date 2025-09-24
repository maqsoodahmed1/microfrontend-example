import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Make store available globally for other microfrontends
declare global {
  interface Window {
    __SHARED_STORE__: typeof store;
    __SHARED_STORE_ACTIONS__: any;
  }
}

// Expose store globally
window.__SHARED_STORE__ = store;