import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { baseApi } from 'services';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import uiReducer from './ui/slice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([baseApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
