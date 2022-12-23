import {renderWithReStyle, sampleCharacter} from '@app/jest/utils';
import {screen} from '@testing-library/react-native';
import React from 'react';
import CharacterList from './characterList';

const mockFun = jest.fn();

describe('Character list should have to render correctly', () => {
  it('it should display all list of characters', () => {
    renderWithReStyle(
      <CharacterList
        data={[sampleCharacter, sampleCharacter, sampleCharacter]}
        onEndReached={mockFun}
        isFetching={false}
        isEnd={false}
        refreshing={false}
        handleOnRefresh={mockFun}
      />,
    );

    expect(screen.getByTestId('character_list')).toHaveProp('data', [
      sampleCharacter,
      sampleCharacter,
      sampleCharacter,
    ]);

    expect(screen.getAllByText('Rick Sanchez (Male)').length).toBe(3);
  });
  it('it should display load more at the end', () => {
    renderWithReStyle(
      <CharacterList
        data={[sampleCharacter]}
        onEndReached={mockFun}
        isFetching={false}
        isEnd={true}
        refreshing={false}
        handleOnRefresh={mockFun}
      />,
    );

    expect(screen.getByText('--- The End ---')).toBeVisible();
  });
  it('it should display no character when the list is empty', () => {
    renderWithReStyle(
      <CharacterList
        data={[]}
        onEndReached={mockFun}
        isFetching={false}
        isEnd={true}
        refreshing={false}
        handleOnRefresh={mockFun}
      />,
    );

    expect(screen.getByText("I can't find Character!")).toBeVisible();
  });
});
