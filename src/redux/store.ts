import {configureStore} from '@reduxjs/toolkit';

import {ThemeReducer, CharacterReducer} from '@app/redux/features';
import {characterApi} from './service';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    character: CharacterReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(characterApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
