import {
    configureStore,
    combineReducers,
    AnyAction,
    Reducer,
  } from "@reduxjs/toolkit";
  import storage from "redux-persist/lib/storage";

  import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  import filters from "./slices/filter.slice";

  interface AsyncReducers {
    [key: string]: Reducer<any, AnyAction>;
  }
  
  const staticReducers = {
    filters: filters,
  };
  
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["reportConfig", "analyticsConfig"], // only these will be persisted
  };
  
  export function createReducer(asyncReducers: AsyncReducers = {}) {
    return combineReducers({
      ...staticReducers,
      ...asyncReducers,
    });
  }
  
  const persistedReducer = persistReducer(persistConfig, createReducer());
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  (store as any).asyncReducers = {};
  
  export function injectReducer(
    key: string,
    asyncReducer: Reducer<any, AnyAction>
  ) {
    const asyncReducers = (store as any).asyncReducers;
    if (!asyncReducers[key]) {
      asyncReducers[key] = asyncReducer;
      store.replaceReducer(persistReducer(persistConfig, createReducer(asyncReducers)));
    }
  }
  
  export const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  