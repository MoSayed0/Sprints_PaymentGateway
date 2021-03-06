import express, { IRouter } from "express";
import { HomeController } from "../Controllers/HomeController";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";

const homeController = new HomeController();

export class HomeRouter implements RouteInterface {
  getRouter(): IRouter {
    const route = express.Router();

    route.get("/", homeController.WelcomScreen);
    return route;
  }
  getPath(): string {
    return "/";
  }
}
