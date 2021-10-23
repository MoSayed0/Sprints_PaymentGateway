import { ServiceRepository } from "../Data/Repositories/ServiceRepository";
import { Service } from "../Data/Models/Service.Model";
//import { IntegerType } from "mongodb";
//import { Timestamp } from "bson";

let serviceRepo = new ServiceRepository();

export class ServiceService {
  async create(data: {
    typeId: string;
    name: string;
    feesAmount: Number;
  }) {
    let service = new Service(
      data.typeId,
      data.name,
      data.feesAmount
    );
    let serviceId =
      (await serviceRepo.insert(service))?.toString() || "";
    return this.findByIdOrFail(serviceId);
  }

  all() {
    return serviceRepo.findAll();
  }

  findById(id: string) {
    return serviceRepo.findById(id);
  }

  async findByIdOrFail(id: string): Promise<Service> {
    let service = await this.findById(id);
    if (service) return service;

    throw new Error("missing or invalid Id");
  }
}
