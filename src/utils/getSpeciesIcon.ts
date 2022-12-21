import {ISpecies} from '@character';

const getSpeciesIcon = (status: ISpecies) => {
  if (status === 'Human') {
    return '☺️';
  } else {
    return '👽';
  }
};

export default getSpeciesIcon;
