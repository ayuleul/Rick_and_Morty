import {configureStore} from '@reduxjs/toolkit';

import {
  ThemeReducer,
  CharacterReducer,
  LocationReducer,
} from '@app/redux/features';

import {characterApi, locationApi} from './service';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    character: CharacterReducer,
    location: LocationReducer,
    [characterApi.reducerPath]: characterApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      characterApi.middleware,
      locationApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
