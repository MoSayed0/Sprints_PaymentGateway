import { IntegerType } from "mongodb";

export class Merchant {
  _id?: string;
  merchantId: string;
  name: string;
  email: string;
  password: string;
  cardHolderName: string;
  cardNumber: IntegerType;
  expireDate: string;
  CVV: IntegerType;

  constructor(
    merchantId: string,
    name: string,
    email: string,
    password: string,
    cardHolderName: string,
    cardNumber: IntegerType,
    expireDate: string,
    CVV: IntegerType
  ) {
    this.merchantId = merchantId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cardHolderName = cardHolderName;
    this.cardNumber = cardNumber;
    this.expireDate = expireDate;
    this.CVV = CVV;
  }
}
