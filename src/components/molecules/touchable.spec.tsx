import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {renderWithReStyle} from '@app/utils/testUtils';
import Touchable from './touchable';
import {Text} from '../atoms';

const mockOnPress = jest.fn();

const renderTouchable = () =>
  renderWithReStyle(
    <Touchable onPress={mockOnPress}>
      <Text>test</Text>
    </Touchable>,
  );

describe('Touchable comp should render correctly', () => {
  it('it should render children components', () => {
    renderTouchable();
    expect(screen.getByText('test')).toBeVisible();
  });
  it('it should respond on click', () => {
    renderTouchable();
    fireEvent.press(screen.getByText('test'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
