"use strict";
exports.__esModule = true;
exports.ConnectToMongo = void 0;
var mongodb_1 = require("mongodb");
var url = "mongodb://localhost:27017/";
var ConnectToMongo = function () {
    return new Promise(function (resolve, reject) {
        mongodb_1.MongoClient.connect(url, function (err, mongoClient) {
            if (err)
                return reject(err);
            if (mongoClient)
                return resolve({ mongoClient: mongoClient, db: mongoClient.db("PaymentGetway") });
            return reject(new Error("cant connect to db"));
        });
    });
};
exports.ConnectToMongo = ConnectToMongo;
