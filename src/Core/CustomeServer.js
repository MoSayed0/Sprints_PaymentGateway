"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomServer = void 0;
var express_1 = __importDefault(require("express"));
var CustomServer = /** @class */ (function () {
    function CustomServer() {
        this._server = (0, express_1.default)();
    }
    CustomServer.prototype.route = function (router) {
        this._server.use(router.getPath(), router.getRouter());
    };
    CustomServer.prototype.listen = function (port) {
        this._server.listen(port, function () {
            return console.log("server is running on port: " + port);
        });
    };
    CustomServer.prototype.middleware = function (middleware) {
        this._server.use(middleware.getMiddleware());
    };
    return CustomServer;
}());
exports.CustomServer = CustomServer;
