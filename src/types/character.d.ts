declare module '@character' {
  export interface ICharacterFilter {
    page: number;
    name: string;
    status: IStatus | string;
    gender: IGender | string;
    species: ISpecies | string;
  }
  export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }

  export interface IOrigin {
    name: string;
    url: string;
  }

  export interface ILocation {
    name: string;
    url: string;
  }
  export type IStatus = 'unknown' | 'Alive' | 'Dead';

  export type ISpecies = 'Human' | 'Alien';

  export type IGender = 'Male' | 'Female';

  export interface IResult {
    id: number;
    name: string;
    status: IStatus;
    species: ISpecies;
    type: string;
    gender: IGender;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
    url: string;
    created: Date;
  }

  export interface ICharacter {
    info: IInfo;
    results: IResult[];
  }
}
