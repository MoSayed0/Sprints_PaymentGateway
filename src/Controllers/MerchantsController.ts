import { Request, Response } from "express";
import { MerchantService } from "../Services/MerchantService";

const merchantService = new MerchantService();

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function AllMerchants(req: Request, res: Response) {
  res.json({ merchants: await merchantService.all() });
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function CreateMerchant(req: Request, res: Response) {
  try {
    let merchantId = req.body.merchantId;
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let cardHolderName = req.body.cardHolderName;
    let cardNumber = req.body.cardNumber;
    let expireDate = req.body.expireDate;
    let CVV = req.body.CVV;
    console.log(CVV);
    let merchant = await merchantService.create({
      merchantId,
      name,
      email,
      password,
      cardNumber,
      cardHolderName,
      expireDate,
      CVV
    });
    return res.send({ merchant: merchant });
  } catch (e: any) {
    return res.status(404).send({ message: e.message });
  }
}
