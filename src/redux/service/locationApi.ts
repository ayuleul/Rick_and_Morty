import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import {ILocation} from '@location';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/location`}),
  endpoints: builder => ({
    getLocations: builder.query<ILocation, number>({
      query: page => `?page=${page}`,
    }),
  }),
});

export const {useGetLocationsQuery} = locationApi;
