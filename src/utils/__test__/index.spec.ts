import getSpeciesIcon from '../getSpeciesIcon';

describe('getSpeciesIcon should responded correctly', () => {
  it('it should response ☺️ for Human', () => {
    expect(getSpeciesIcon('Human')).toBe('☺️');
  });
  it('it should response 👽 for Alien', () => {
    expect(getSpeciesIcon('Alien')).toBe('👽');
  });
});
