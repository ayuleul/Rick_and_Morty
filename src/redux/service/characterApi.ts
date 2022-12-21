import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICharacter, ICharacterFilter} from '@character';
import {API_URL} from '@env';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/character`}),
  endpoints: builder => ({
    getCharacters: builder.query<ICharacter, ICharacterFilter>({
      query: ({page, name, status, gender, species}) =>
        `?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`,
    }),
  }),
});

export const {useGetCharactersQuery} = characterApi;
