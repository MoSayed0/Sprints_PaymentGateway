import { TransactionRepository } from "../Data/Repositories/TransactionRepository";
import { Transaction } from "../Data/Models/Transaction.Model";
import { IntegerType } from "mongodb";
import { Timestamp } from "bson";

let transactionRepo = new TransactionRepository();

export class TransactionService {
  async create(data: {
    merchant_id: string;
    customerCardHolderName: string;
    customerCardNumber: IntegerType;
    customerExpireDate: string;
    customerCVV: IntegerType;
    serviceId: string;
    billAmount: Number;
    trxFees: Number;
    totAmount:Number;
    date: Timestamp;
    trx_status:string;
  }) {
    let transaction = new Transaction(
      data.merchant_id,
      data.customerCardHolderName,
      data.customerCardNumber,
      data.customerExpireDate,
      data.customerCVV,
      data.serviceId,
      data.billAmount,
      data.trxFees,
      data.totAmount,
      data.date,
      data.trx_status
    );
    let transactionId =
      (await transactionRepo.insert(transaction))?.toString() || "";
    return this.findByIdOrFail(transactionId);
  }

  all() {
    return transactionRepo.findAll();
  }

  findById(id: string) {
    return transactionRepo.findById(id);
  }

  async findByIdOrFail(id: string): Promise<Transaction> {
    let transaction = await this.findById(id);
    if (transaction) return transaction;

    throw new Error("missing or invalid Id");
  }
}
