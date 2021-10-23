"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantRouter = void 0;
var express_1 = __importDefault(require("express"));
var MerchantsController_1 = require("../Controllers/MerchantsController");
var MerchantRouter = /** @class */ (function () {
    function MerchantRouter() {
    }
    MerchantRouter.prototype.getPath = function () {
        return "/merchants";
    };
    MerchantRouter.prototype.getRouter = function () {
        var route = express_1.default.Router();
        route.get("/", MerchantsController_1.AllMerchants);
        route.post("/", MerchantsController_1.CreateMerchant);
        // route.get("/:id", GetTransaction);
        // route.put("/:id", EditTransaction);
        // route.delete("/:id", DeleteTransaction);
        return route;
    };
    return MerchantRouter;
}());
exports.MerchantRouter = MerchantRouter;
