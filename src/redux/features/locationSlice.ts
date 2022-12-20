import {ILocation} from '@location';
import {createSlice} from '@reduxjs/toolkit';
import {locationApi} from '../service';

const locationSlice = createSlice({
  name: 'location',
  initialState: {info: null, results: []} as unknown as ILocation,
  reducers: {
    clearLocationResultsData: state => {
      state.results = [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      locationApi.endpoints.getLocations.matchFulfilled,
      (state, {payload}) => {
        state.info = payload.info;
        state.results = [...state.results, ...payload.results];
      },
    );
  },
});
export const {clearLocationResultsData} = locationSlice.actions;

export default locationSlice.reducer;
