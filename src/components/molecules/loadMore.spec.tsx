import React from 'react';
import {screen} from '@testing-library/react-native';
import {renderWithReStyle} from '@app/jest/utils';
import LoadMore from './loadMore';

describe('LoadMore comp should render correctly', () => {
  it('it should show loading', () => {
    renderWithReStyle(<LoadMore isEnd={false} isFetching={true} />);
    expect(screen.getByTestId('activityIndicator')).toBeVisible();
  });
  it('it should hide loading at the end of the list', () => {
    renderWithReStyle(<LoadMore isEnd={true} isFetching={true} />);
    expect(screen.queryByTestId('activityIndicator')).toBeNull();
  });
  it('it should hide loading when it not fetching', () => {
    renderWithReStyle(<LoadMore isEnd={true} isFetching={false} />);
    expect(screen.queryByTestId('activityIndicator')).toBeNull();
  });
});
