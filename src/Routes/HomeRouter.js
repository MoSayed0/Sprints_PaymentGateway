"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRouter = void 0;
var express_1 = __importDefault(require("express"));
var HomeController_1 = require("../Controllers/HomeController");
var homeController = new HomeController_1.HomeController();
var HomeRouter = /** @class */ (function () {
    function HomeRouter() {
    }
    HomeRouter.prototype.getRouter = function () {
        var route = express_1.default.Router();
        route.get("/", homeController.WelcomScreen);
        return route;
    };
    HomeRouter.prototype.getPath = function () {
        return "/";
    };
    return HomeRouter;
}());
exports.HomeRouter = HomeRouter;
