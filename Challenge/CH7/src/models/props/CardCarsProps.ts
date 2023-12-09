import CarEntity from "../entity/Car";
type CardCarsProps = {
  item: CarEntity;
  onDelete: (id:number) => void;
};

export default CardCarsProps;
