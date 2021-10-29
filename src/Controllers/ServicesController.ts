import { Request, Response } from "express";
import { ServiceTypesService } from "../Services/ServiceTypesService";

const serviceService = new ServiceTypesService();

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function AllServices(req: Request, res: Response) {
  res.json({ services: await serviceService.all() });
}

/**
 *
 * @param req
 * @param res
 * @constructor
 */
export async function CreateService(req: Request, res: Response) {
  try {
    let typeId = req.body.typeId;
    let name = req.body.name;
    let feesAmount = req.body.feesAmount;
    let service = await serviceService.create({
      typeId,
      name,
      feesAmount
    });
    return res.send({ service: service });
  } catch (e: any) {
    return res.status(404).send({ message: e.message });
  }
}
