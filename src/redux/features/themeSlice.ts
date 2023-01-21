import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ThemeMeta, ThemeNames, themes} from '../../themes';

const initialState: {selected: ThemeMeta} = {selected: themes[0]};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeNames>) => {
      if (action.payload === 'light') {
        state.selected = themes[0];
      } else if (action.payload === 'dark') {
        state.selected = themes[1];
      } else {
        state.selected = themes[0];
      }
    },
  },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;
