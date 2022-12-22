import React from 'react';
import {screen} from '@testing-library/react-native';
import Empty from './empty';
import {renderWithReStyle} from '@app/utils/testUtils';

const renderEmpty = () => renderWithReStyle(<Empty name="sample" />);

describe('Empty comp should render correctly', () => {
  renderEmpty();
  it('it should display message', () => {
    expect(screen.getByText("I can't find sample")).toBeTruthy();
  });
});
