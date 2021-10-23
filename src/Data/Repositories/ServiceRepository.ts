import { Service } from "../Models/Service.Model";
import { BaseRepo } from "./BaseRepository";

export class ServiceRepository extends BaseRepo<Service> {
  readonly collectionName: string = "services";
}
