import {renderWithReStyle} from '@app/utils/testUtils';
import {fireEvent, screen} from '@testing-library/react-native';
import React from 'react';
import FilterModal from './filterModal';

const mockFun = jest.fn();

const sampleFilterValue = {
  name: '',
  gender: '',
  species: '',
  status: '',
};

describe('Filter Modal should render correctly', () => {
  it('it should display gender, status and Species choices', () => {
    renderWithReStyle(
      <FilterModal
        modalVisible={false}
        setModalVisible={mockFun}
        setFilterValue={mockFun}
        handleClearFilter={mockFun}
        handleApplyFilter={mockFun}
        filterValue={sampleFilterValue}
      />,
    );

    expect(screen.getByText('Gender')).toHaveTextContent('Gender');
    expect(screen.getByText('Status')).toHaveTextContent('Status');
    expect(screen.getByText('Species')).toHaveTextContent('Species');
  });

  it('it should to choose one from the gender, status and Species choices', () => {
    renderWithReStyle(
      <FilterModal
        modalVisible={false}
        setModalVisible={mockFun}
        setFilterValue={mockFun}
        handleClearFilter={mockFun}
        handleApplyFilter={mockFun}
        filterValue={sampleFilterValue}
      />,
    );

    fireEvent.press(screen.getByText('unknown'));
    expect(mockFun).toBeCalled();

    fireEvent.press(screen.getByText('Alien'));
    expect(mockFun).toBeCalled();

    fireEvent.press(screen.getByText('Male'));
    expect(mockFun).toBeCalled();
  });

  it('it should allow to clear and apply filters', () => {
    renderWithReStyle(
      <FilterModal
        modalVisible={false}
        setModalVisible={mockFun}
        setFilterValue={mockFun}
        handleClearFilter={mockFun}
        handleApplyFilter={mockFun}
        filterValue={sampleFilterValue}
      />,
    );

    fireEvent.press(screen.getByText('Clear'));
    expect(mockFun).toBeCalled();

    fireEvent.press(screen.getByText('Apply'));
    expect(mockFun).toBeCalled();
  });

  it('model should be hidden on foreground pressed', () => {
    renderWithReStyle(
      <FilterModal
        modalVisible={false}
        setModalVisible={mockFun}
        setFilterValue={mockFun}
        handleClearFilter={mockFun}
        handleApplyFilter={mockFun}
        filterValue={sampleFilterValue}
      />,
    );

    fireEvent.press(screen.getByTestId('foreground'));
    expect(mockFun).toBeCalled();
  });
});
