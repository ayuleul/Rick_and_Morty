import {renderWithReStyle, sampleLocation} from '@app/jest/utils';
import {fireEvent, screen} from '@testing-library/react-native';
import React from 'react';
import {LocationItem} from '.';

const mockFun = jest.fn();

const renderCharacterCard = () =>
  renderWithReStyle(
    <LocationItem item={sampleLocation} handleNavigation={mockFun} />,
  );

describe('LocationItem should render correctly', () => {
  it('It should display name and type of location and navigate on press', () => {
    renderCharacterCard();
    expect(screen.getByText('Earth (Planet)')).toBeVisible();
    fireEvent.press(screen.getByText('Earth (Planet)'));
    expect(mockFun).toBeCalled();
  });
  it('It should display Dimension of location', () => {
    renderCharacterCard();
    expect(screen.getByText('Dimension: Dimension C-137')).toBeTruthy();
  });
  it('It should display number of residents of the location', () => {
    renderCharacterCard();
    expect(screen.getByText('There are 2 Residents')).toBeTruthy();
  });
});
