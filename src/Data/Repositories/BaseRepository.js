"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepo = void 0;
var mongodb_1 = require("mongodb");
var MongoConnection_1 = require("../../Core/Database/MongoConnection");
var BaseRepo = /** @class */ (function () {
    function BaseRepo() {
    }
    BaseRepo.prototype.findAll = function (filter) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return new Promise(function (resolve, reject) {
            (0, MongoConnection_1.ConnectToMongo)().then(function (d) {
                return d.db.collection(_this.collectionName).find(filter).toArray(function (err, result) {
                    if (err)
                        return reject(err);
                    resolve(result);
                    d.mongoClient.close();
                });
            });
        });
    };
    BaseRepo.prototype.insert = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            (0, MongoConnection_1.ConnectToMongo)().then(function (d) {
                return d.db.collection(_this.collectionName).insertOne(item, function (err, res) {
                    if (err)
                        return reject(err);
                    resolve(res === null || res === void 0 ? void 0 : res.insertedId);
                    d.mongoClient.close();
                });
            });
        });
    };
    BaseRepo.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _id;
            try {
                _id = new mongodb_1.ObjectId(id);
            }
            catch (e) {
                return reject(new Error("invalid id"));
            }
            (0, MongoConnection_1.ConnectToMongo)().then(function (d) {
                return d.db.collection(_this.collectionName).deleteOne({ _id: _id }, function (err, res) {
                    if (err)
                        return reject(err);
                    resolve(res);
                    d.mongoClient.close();
                });
            });
        });
    };
    BaseRepo.prototype.update = function (id, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _id;
            try {
                _id = new mongodb_1.ObjectId(id);
            }
            catch (e) {
                return reject(new Error("invalid id"));
            }
            (0, MongoConnection_1.ConnectToMongo)().then(function (d) {
                return d.db.collection(_this.collectionName).updateOne({ _id: _id }, { $set: item }, function (err, res) {
                    if (err)
                        return reject(err);
                    resolve(res);
                    d.mongoClient.close();
                });
            });
        });
    };
    BaseRepo.prototype.findById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _id;
            try {
                _id = new mongodb_1.ObjectId(id);
            }
            catch (e) {
                return reject(new Error("invalid id"));
            }
            (0, MongoConnection_1.ConnectToMongo)().then(function (d) {
                return d.db.collection(_this.collectionName).findOne({ _id: _id }, function (err, result) {
                    if (err)
                        return reject(err);
                    resolve(result);
                    d.mongoClient.close();
                });
            });
        });
    };
    return BaseRepo;
}());
exports.BaseRepo = BaseRepo;
