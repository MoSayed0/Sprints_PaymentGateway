import { ServiceTypes } from "../Models/ServiceTypes.Model";
import { BaseRepo } from "./BaseRepository";

export class ServiceTypesRepository extends BaseRepo<ServiceTypes> {
  readonly collectionName: string = "services";
}
