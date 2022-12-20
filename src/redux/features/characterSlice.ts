import {ICharacter} from '@character';
import {createSlice} from '@reduxjs/toolkit';
import {characterApi} from '../service';

const characterSlice = createSlice({
  name: 'character',
  initialState: {info: null, results: null} as unknown as ICharacter,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      characterApi.endpoints.getCharacters.matchFulfilled,
      (state, {payload}) => {
        state.info = payload.info;
        state.results = payload.results;
      },
    );
  },
});

export default characterSlice.reducer;
