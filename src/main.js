"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomeServer_1 = require("./Core/CustomeServer");
var BodyParserMiddleware_1 = require("./Middlewares/BodyParserMiddleware");
var HomeRouter_1 = require("./Routes/HomeRouter");
var TransactionsRouter_1 = require("./Routes/TransactionsRouter");
var MerchantRouter_1 = require("./Routes/MerchantRouter");
var ServiceRouter_1 = require("./Routes/ServiceRouter");
/**
 * init server
 */
var app = new CustomeServer_1.CustomServer();
/**
 *  user middleware
 */
app.middleware(new BodyParserMiddleware_1.BodyParserMiddleware());
/**
 * init routes
 */
app.route(new HomeRouter_1.HomeRouter());
app.route(new TransactionsRouter_1.TransactionsRouter());
app.route(new MerchantRouter_1.MerchantRouter());
app.route(new ServiceRouter_1.ServiceRouter());
/**
 * start application
 */
var PORT = 3333;
app.listen(PORT);
