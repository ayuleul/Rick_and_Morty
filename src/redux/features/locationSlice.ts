import {saveLocations} from '@app/data';
import {ILocation} from '@location';
import {createSlice} from '@reduxjs/toolkit';
import {locationApi} from '../service';

const locationSlice = createSlice({
  name: 'location',
  initialState: {info: null, results: []} as unknown as ILocation,
  reducers: {
    addLocationsFromCash: (state, action) => {
      state.results = action.payload;
    },
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
        saveLocations(payload.results);
      },
    );
  },
});
export const {clearLocationResultsData, addLocationsFromCash} =
  locationSlice.actions;

export default locationSlice.reducer;
