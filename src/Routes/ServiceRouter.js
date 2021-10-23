"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRouter = void 0;
var express_1 = __importDefault(require("express"));
var ServicesController_1 = require("../Controllers/ServicesController");
var ServiceRouter = /** @class */ (function () {
    function ServiceRouter() {
    }
    ServiceRouter.prototype.getPath = function () {
        return "/services";
    };
    ServiceRouter.prototype.getRouter = function () {
        var route = express_1.default.Router();
        route.get("/", ServicesController_1.AllServices);
        route.post("/", ServicesController_1.CreateService);
        return route;
    };
    return ServiceRouter;
}());
exports.ServiceRouter = ServiceRouter;
