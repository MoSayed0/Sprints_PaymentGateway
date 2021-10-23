import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import express, { IRouter } from "express";
import {
  AllMerchants,
  CreateMerchant,
} from "../Controllers/MerchantsController";

export class MerchantRouter implements RouteInterface {
  getPath(): string {
    return "/merchants";
  }

  getRouter(): IRouter {
    const route = express.Router();
    route.get("/", AllMerchants);
    route.post("/", CreateMerchant);
    // route.get("/:id", GetTransaction);
    // route.put("/:id", EditTransaction);
    // route.delete("/:id", DeleteTransaction);

    return route;
  }
}
