import { MerchantRepository } from "../Data/Repositories/MerchantRepository";
import { TransactionRepository } from "../Data/Repositories/TransactionRepository";
import { Merchant } from "../Data/Models/Merchant.Model";
import { IntegerType } from "mongodb";
//import { Timestamp } from "bson";

let merchantRepo = new MerchantRepository();

export class MerchantService {
  async create(data: {
    merchantId: string,
    name: string;
    email: string;
    password: string;
    cardHolderName: string;
    cardNumber: IntegerType;
    expireDate: string;
    CVV: IntegerType;
  }) {
    let merchant = new Merchant(
      data.merchantId,
      data.name,
      data.email,
      data.password,
      data.cardHolderName,
      data.cardNumber,
      data.expireDate,
      data.CVV
    );
    let merchantId =
      (await merchantRepo.insert(merchant))?.toString() || "";
    return this.findByIdOrFail(merchantId);
  }

  all() {
    return merchantRepo.findAll();
  }

  findById(id: string) {
    return merchantRepo.findById(id);
  }

  async findByIdOrFail(id: string): Promise<Merchant> {
    let merchant = await this.findById(id);
    if (merchant) return merchant;

    throw new Error("missing or invalid Id");
  }
}
