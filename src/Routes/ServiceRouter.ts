import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import express, { IRouter } from "express";
import {
  AllServices,
  CreateService,
} from "../Controllers/ServicesController";

export class ServiceRouter implements RouteInterface {
  getPath(): string {
    return "/services";
  }

  getRouter(): IRouter {
    const route = express.Router();
    route.get("/", AllServices);
    route.post("/", CreateService);


    return route;
  }
}
