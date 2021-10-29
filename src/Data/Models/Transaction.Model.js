"use strict";
exports.__esModule = true;
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(merchant_id, customerCardHolderName, customerCardNumber, customerExpireDate, customerCVV, serviceId, billAmount, trxFees, // default fees 2%
    totAmount, date, trx_status // @TODO
    ) {
        if (trxFees === void 0) { trxFees = 0.02; }
        this.merchant_id = merchant_id;
        this.customerCardHolderName = customerCardHolderName;
        this.customerCardNumber = customerCardNumber;
        this.customerExpireDate = customerExpireDate;
        this.customerCVV = customerCVV;
        this.serviceId = serviceId;
        this.billAmount = billAmount;
        this.trxFees = trxFees;
        this.totAmount = totAmount;
        this.date = date;
        this.trx_status = trx_status;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
