import { ServiceTypesRepository } from "../Data/Repositories/ServiceTypesRepository";
import { ServiceTypes } from "../Data/Models/ServiceTypes.Model";

let serviceRepo = new ServiceTypesRepository();

export class ServiceTypesService {
  async create(data: {
    typeId: string;
    name: string;
    feesAmount: Number;
  }) {
    let service = new ServiceTypes(
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

  async findByIdOrFail(id: string): Promise<ServiceTypes> {
    let service = await this.findById(id);
    if (service) return service;

    throw new Error("missing or invalid Id");
  }
  
  findByTypeId(id: string): Promise<ServiceTypes> {
    return serviceRepo.findByTypeId(id);
  }
}
