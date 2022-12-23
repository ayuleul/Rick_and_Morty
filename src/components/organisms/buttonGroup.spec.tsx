import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {renderWithReStyle} from '@app/jest/utils';
import ButtonGroup from './buttonGroup';

const mockOnPress = jest.fn();

const renderButtonGroup = () =>
  renderWithReStyle(
    <ButtonGroup
      title="button group"
      buttons={['testButton']}
      selected={''}
      id={'testId'}
      handleOnPress={mockOnPress}
    />,
  );

describe('button should render correctly', () => {
  it('it should display title', () => {
    renderButtonGroup();
    expect(screen.getByText('button group')).toBeTruthy();
  });
  it('it should respond on click one of the button', () => {
    renderButtonGroup();
    fireEvent.press(screen.getByText('testButton'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
