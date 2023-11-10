import { Model, ModelObject } from 'objection';
import postgresqlInstance from '../../../config/postgresql';

export class CarEntity extends Model {
  id?: number;
  name!: string;
  cost_per_day!: bigint;
  size!: string;
  car_picture_url!: string;

  static get tableName() {
    return 'cars';
  }
}

Model.knex(postgresqlInstance);

export type Car = ModelObject<CarEntity>;