import {IResult} from '@location';
import {database} from './database';
import {Q} from '@nozbe/watermelondb';

const locations = database.collections.get('locations');

export const observeLocations = () => locations.query().observe();
export const getAllLocations = async () => await locations.query().fetch();
export const saveLocations = async (locationsData: IResult[]) => {
  await database.write(async () => {
    for (let location of locationsData) {
      const preLocation = await locations
        .query(Q.where('location_id', location.id))
        .fetch();
      if (preLocation.length > 0) {
        const existingLocation = await database
          .get('locations')
          .find(preLocation[0]._raw.id);
        await existingLocation.update((entry: any) => {
          entry.locationId = location.id;
          entry.name = location.name;
          entry.dimension = location.dimension;
          entry.residentsNumber = Number(location.residents.length);
          entry.url = location.url;
        });
      } else {
        await locations.create((entry: any) => {
          entry.locationId = location.id;
          entry.name = location.name;
          entry.dimension = location.dimension;
          entry.residentsNumber = Number(location.residents.length);
          entry.url = location.url;
        });
      }
    }
  });
};
