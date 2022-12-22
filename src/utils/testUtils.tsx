import 'whatwg-fetch';
import '@testing-library/jest-native/extend-expect';

import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../redux/store';
import {ThemeProvider} from '@shopify/restyle';
import theme from '@app/themes/light';
import {IResult} from '@character';

export function renderWithRedux(ui: ReactElement) {
  const queries = render(<Provider store={store}>{ui}</Provider>);
  return {...queries, store};
}

export function renderWithReStyle(ui: ReactElement) {
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

export function renderWithStoreAndReStyle(ui: ReactElement) {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>,
  );
}

export function renderNavigator(
  ui:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
) {
  return render(<NavigationContainer>{ui}</NavigationContainer>);
}

export function buildNavigationMock() {
  return {
    navigate: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
    isFocused: jest.fn(() => true),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    addListener: jest.fn(),
  };
}

export const sampleCharacter: IResult = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Earth',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: new Date(),
};

export const sampleCharacterResponse = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [sampleCharacter],
};

export const sampleLocation = {
  id: 1,
  name: 'Earth',
  type: 'Planet',
  dimension: 'Dimension C-137',
  residents: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
  ],
  url: 'https://rickandmortyapi.com/api/location/1',
  created: new Date(),
};

export const sampleLocationResponse = {
  info: {
    count: 126,
    pages: 7,
    next: 'https://rickandmortyapi.com/api/location?page=2',
    prev: null,
  },
  results: [],
};
