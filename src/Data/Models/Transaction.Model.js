"use strict";
exports.__esModule = true;
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(merchant_id, customerCardHolderName, customerCardNumber, customerExpireDate, customerCVV, billAmount, trxFees, // default fees 2%
    totAmount, trxType, // 0: pay, 1: refund
    date, serviceId) {
        if (trxFees === void 0) { trxFees = 0.02; }
        this.merchant_id = merchant_id;
        this.customerCardHolderName = customerCardHolderName;
        this.customerCardNumber = customerCardNumber;
        this.customerExpireDate = customerExpireDate;
        this.customerCVV = customerCVV;
        this.billAmount = billAmount;
        this.trxFees = trxFees;
        this.totAmount = totAmount;
        this.trxType = trxType;
        this.date = date;
        this.serviceId = serviceId;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
