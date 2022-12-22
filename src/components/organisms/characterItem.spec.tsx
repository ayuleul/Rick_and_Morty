import {renderWithReStyle, sampleCharacter} from '@app/utils/testUtils';
import {screen} from '@testing-library/react-native';
import React from 'react';
import CharacterCard from './characterItem';

const renderCharacterCard = () =>
  renderWithReStyle(<CharacterCard item={sampleCharacter} />);

describe('CharacterCard should render correctly', () => {
  it('It should display the image of the character', () => {
    renderCharacterCard();
    expect(screen.getByTestId('character_image')).toHaveProp('source', {
      uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    });
  });
  it('It should display name and gender of the character', () => {
    renderCharacterCard();
    expect(screen.getByText('Rick Sanchez (Male)')).toBeTruthy();
  });
  it('It should display status of the character', () => {
    renderCharacterCard();
    expect(screen.getByText('Alive')).toBeTruthy();
  });
  it('It should display origin name of the character', () => {
    renderCharacterCard();
    expect(screen.getByText('First seen: Earth')).toBeTruthy();
  });
});
