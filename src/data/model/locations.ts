import {Model} from '@nozbe/watermelondb';
import {field, readonly, date} from '@nozbe/watermelondb/decorators';

export default class Location extends Model {
  static table = 'locations';

  @field('location_id') locationId: number | undefined;
  @field('name') name: string | undefined;
  @field('type') type: string | undefined;
  @field('dimension') dimension: string | undefined;
  @field('residents_number') residentsNumber: number | undefined;
  @field('url') url: string | undefined;
  @readonly @date('created_at') createdAt: string | undefined;
}
