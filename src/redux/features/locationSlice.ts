import {ILocation} from '@location';
import {createSlice} from '@reduxjs/toolkit';
import {locationApi} from '../service';

const locationSlice = createSlice({
  name: 'location',
  initialState: {info: null, results: []} as unknown as ILocation,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      locationApi.endpoints.getLocations.matchFulfilled,
      (state, {payload}) => {
        state.info = payload.info;
        state.results = payload.results;
      },
    );
  },
});

export default locationSlice.reducer;
