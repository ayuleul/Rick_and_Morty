import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import Button from './button';
import {renderWithReStyle} from '@app/utils/testUtils';

const mockOnPress = jest.fn();

const renderButton = () =>
  renderWithReStyle(<Button handleOnPress={mockOnPress} title="button" />);

describe('button should render correctly', () => {
  it('it should display title', () => {
    renderButton();
    expect(screen.getByText('button')).toBeTruthy();
  });
  it('it should respond on click', () => {
    renderButton();
    fireEvent.press(screen.getByText('button'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
