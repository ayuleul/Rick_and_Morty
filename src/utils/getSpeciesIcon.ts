import {ISpecies} from '@character';

const getSpeciesIcon = (status: ISpecies) => {
  if (status === 'Alien') {
    return '☺️';
  } else {
    return '👽';
  }
};

export default getSpeciesIcon;
