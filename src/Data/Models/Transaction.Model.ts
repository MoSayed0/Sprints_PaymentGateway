import { Timestamp } from "bson";
import { IntegerType } from "mongodb";

export class Transaction {
  _id?: string;
  merchant_id: string;
  customerCardHolderName: string;
  customerCardNumber: IntegerType;
  customerExpireDate: string;
  customerCVV: IntegerType;
  serviceId: string;
  billAmount: Number;
  trxFees: Number;
  totAmount: Number;
  date: Timestamp;
  trx_status: string;
  constructor(
    merchant_id: string,
    customerCardHolderName: string,
    customerCardNumber: IntegerType,
    customerExpireDate: string,
    customerCVV: IntegerType,
    serviceId: string,
    billAmount: Number,
    trxFees: Number = 0.02, // default fees 2%
    totAmount: Number,
    date: Timestamp,
    trx_status: string        // @TODO
  ) {
    this.merchant_id = merchant_id;
    this.customerCardHolderName = customerCardHolderName;
    this.customerCardNumber = customerCardNumber;
    this.customerExpireDate = customerExpireDate;
    this.customerCVV = customerCVV;
    this.serviceId = serviceId;
    this.billAmount = billAmount;
    this.trxFees = trxFees;
    this.totAmount=totAmount;
    this.date = date;
    this.trx_status = trx_status;
  }
}
