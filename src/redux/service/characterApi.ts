import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICharacter} from '@character';
import {API_URL} from '@env';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/character`}),
  endpoints: builder => ({
    getCharacters: builder.query<ICharacter, string>({
      query: () => '',
    }),
  }),
});

export const {useGetCharactersQuery} = characterApi;
