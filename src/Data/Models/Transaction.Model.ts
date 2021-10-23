import { Timestamp } from "bson";
import { IntegerType } from "mongodb";

export class Transaction {
  _id?: string;
  merchant_id: string;
  customerCardHolderName: string;
  customerCardNumber: IntegerType;
  customerExpireDate: string;
  customerCVV: IntegerType;
  billAmount: Number;
  trxFees: Number;
  totAmount: Number;
  trxType: string;
  date: Timestamp;
  serviceId: string;

  constructor(
    merchant_id: string,
    customerCardHolderName: string,
    customerCardNumber: IntegerType,
    customerExpireDate: string,
    customerCVV: IntegerType,
    billAmount: Number,
    trxFees: Number = 0.02, // default fees 2%
    totAmount: Number,
    trxType: string, // 0: pay, 1: refund
    date: Timestamp,
    serviceId: string,    // @TODO
  ) {
    this.merchant_id = merchant_id;
    this.customerCardHolderName = customerCardHolderName;
    this.customerCardNumber = customerCardNumber;
    this.customerExpireDate = customerExpireDate;
    this.customerCVV = customerCVV;
    this.billAmount = billAmount;
    this.trxFees = trxFees;
    this.totAmount=totAmount;
    this.trxType = trxType;
    this.date = date;
    this.serviceId = serviceId;
  }
}
