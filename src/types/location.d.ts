declare module '@location' {
  export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev?: any;
  }

  export interface IResult {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
  }

  export interface ILocation {
    info: IInfo;
    results: IResult[];
  }
}
