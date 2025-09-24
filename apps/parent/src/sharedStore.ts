import { store } from './store/store';
import { sharedStoreActions } from './store/sharedStoreActions';

// Initialize shared store globally
export const initializeSharedStore = () => {
  // Expose store and actions globally
  window.__SHARED_STORE__ = store;
  window.__SHARED_STORE_ACTIONS__ = sharedStoreActions;

  // Optional: Add debugging helpers in development
  if (process.env.NODE_ENV === 'development') {
    (window as any).__REDUX_STORE_DEBUG__ = {
      store,
      actions: sharedStoreActions,
      getState: () => store.getState(),
    };
    console.log('🏪 Shared store initialized and available globally');
  }
};

export { sharedStoreActions, store };
export type { RootState, AppDispatch } from './store/store';