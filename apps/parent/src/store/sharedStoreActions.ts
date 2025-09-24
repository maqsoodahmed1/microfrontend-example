import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUserPreferences,
  clearError,
  User,
} from './slices/userSlice';

// Get store from global window object to avoid circular dependency
const getStore = () => window.__SHARED_STORE__;

// Actions that other microfrontends can use
export const sharedStoreActions = {
  // User actions
  loginUser: (userData: User) => getStore().dispatch(loginSuccess(userData)),
  logoutUser: () => getStore().dispatch(logout()),
  startLogin: () => getStore().dispatch(loginStart()),
  failLogin: (error: string) => getStore().dispatch(loginFailure(error)),
  updatePreferences: (preferences: Record<string, any>) =>
    getStore().dispatch(updateUserPreferences(preferences)),
  clearUserError: () => getStore().dispatch(clearError()),

  // Getters for current state
  getCurrentUser: () => getStore().getState().user.currentUser,
  isUserAuthenticated: () => getStore().getState().user.isAuthenticated,
  getUserError: () => getStore().getState().user.error,
  isUserLoading: () => getStore().getState().user.loading,

  // Subscribe to store changes
  subscribe: (callback: () => void) => getStore().subscribe(callback),
  
  // Get the entire store state
  getState: () => getStore().getState(),
};

export type SharedStoreActions = typeof sharedStoreActions;