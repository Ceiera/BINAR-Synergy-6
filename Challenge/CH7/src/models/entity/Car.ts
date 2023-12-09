interface CarEntity {
  id: number;
  name: string;
  cost_per_day: number;
  size: string;
  car_picture_url: string;
  created_by?: number;
  updated_by?: number;
  deleted_by?: number;
  created_at?: Date;
  updated_at?: Date;
}

export default CarEntity;
