import { IntegerType } from "mongodb";

export class ServiceTypes {
  _id?: string;
  typeId: string;
  name: string;
  feesAmount: Number;
  constructor(
    typeID: string,
    name: string,
    feesAmount: Number  
  ) {
    this.typeId = typeID;
    this.name = name;
    this.feesAmount = feesAmount;
  }
}
