import { Transaction } from "../Models/Transaction.Model";
import { BaseRepo } from "./BaseRepository";

export class TransactionRepository extends BaseRepo<Transaction> {
  readonly collectionName: string = "transactions";
}
