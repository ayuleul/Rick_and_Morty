import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {buildNavigationMock, renderWithNavAndReStyle} from '@app/jest/utils';
import GoBack from './goBack';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useNavigation: jest.fn(),
  };
});

let navigation;

beforeEach(() => {
  navigation = buildNavigationMock();
  useNavigation.mockImplementation(() => navigation);
});

const renderButton = () => renderWithNavAndReStyle(<GoBack />);

describe('goBack should render correctly', () => {
  it('it should respond on click', () => {
    renderButton();
    fireEvent.press(screen.getByTestId('go_back'));
    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
