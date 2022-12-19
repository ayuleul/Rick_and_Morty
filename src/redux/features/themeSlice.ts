import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ThemeMeta, ThemeNames, themes} from '../../themes';

const initialState: ThemeMeta = themes[0];

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeNames>) => {},
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
