"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRouter = void 0;
var express_1 = __importDefault(require("express"));
var TransactionsController_1 = require("../Controllers/TransactionsController");
var TransactionsRouter = /** @class */ (function () {
    function TransactionsRouter() {
    }
    TransactionsRouter.prototype.getPath = function () {
        return "/transactions";
    };
    TransactionsRouter.prototype.getRouter = function () {
        var route = express_1.default.Router();
        route.get("/", TransactionsController_1.AllTransaction);
        route.post("/", TransactionsController_1.CreateTransaction);
        // route.get("/:id", GetTransaction);
        // route.put("/:id", EditTransaction);
        // route.delete("/:id", DeleteTransaction);
        return route;
    };
    return TransactionsRouter;
}());
exports.TransactionsRouter = TransactionsRouter;
