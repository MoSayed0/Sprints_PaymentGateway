import { Request, Response } from "express";
import { TransactionService } from "../Services/TransactionService";
import { ServiceService } from "../Services/ServiceService";
import { Timestamp } from "mongodb";
const transactionService = new TransactionService();
const Service = new ServiceService();
/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function AllTransaction(req: Request, res: Response) {
  res.json({ transactions: await transactionService.all() });
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function CreateTransaction(req: Request, res: Response) {
  console.log(req.body.serviceId);
  const results:any = await Service.findByTypeId(req.body.serviceId);  
  if(results == null){    
      res.json({message: "invalid service ID or merchant ID !!"});
  }
  else{    
    var feesAmt = Number.parseInt(results.feesAmount);
    var totAmt  = Number.parseInt(req.body.billAmount) + feesAmt;  
    try {
      let merchant_id = req.body.merchant_id;
      let customerCardHolderName = req.body.customerCardHolderName;
      let customerCardNumber = req.body.customerCardNumber;
      let customerExpireDate = req.body.customerExpireDate;
      let customerCVV = req.body.customerCVV;
      let billAmount = req.body.billAmount;
      let trxFees = feesAmt; //req.body.trxFees;
      let totAmount = totAmt; //req.body.totAmount;
      let trxType = req.body.trxType;
      let date = req.body.date;
      let serviceId = req.body.serviceId;
      let transaction = await transactionService.create({
        merchant_id,
        customerCardHolderName,
        customerCardNumber,
        customerExpireDate,
        customerCVV,
        billAmount,
        trxFees,
        totAmount,
        trxType,
        date, 
        serviceId
      });
      return res.send({ transaction: transaction });
    } catch (e: any) {
      return res.status(404).send({ message: e.message });
    }   
  }
}
