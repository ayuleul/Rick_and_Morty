import {buildNavigationMock, renderWithStoreAndReStyle} from '@app/jest/utils';
import {useNavigation} from '@react-navigation/native';
import {fireEvent, screen} from '@testing-library/react-native';
import React from 'react';
import Characters from './Characters';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: jest.fn(),
    useIsFocused: jest.fn(),
  };
});

let navigation;

beforeEach(() => {
  navigation = buildNavigationMock();
  useNavigation.mockImplementation(() => navigation);
});

describe('It should display that displays a list of [`characters`]', () => {
  it('Search should accept value', () => {
    renderWithStoreAndReStyle(<Characters />);

    let textInput = screen.getByPlaceholderText('search');

    fireEvent.changeText(textInput, 'test');

    expect(textInput).toHaveProp('value', 'test');
  });
});
