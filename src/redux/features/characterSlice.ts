import {ICharacter} from '@character';
import {createSlice} from '@reduxjs/toolkit';
import {characterApi} from '../service';

const characterSlice = createSlice({
  name: 'character',
  initialState: {info: null, results: []} as unknown as ICharacter,
  reducers: {
    clearCharacterResultsData: state => {
      state.results = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      characterApi.endpoints.getCharacters.matchFulfilled,
      (state, {payload}) => {
        state.info = payload.info;
        state.results = [...state.results, ...payload.results];
      },
    );
  },
});

export const {clearCharacterResultsData} = characterSlice.actions;

export default characterSlice.reducer;
