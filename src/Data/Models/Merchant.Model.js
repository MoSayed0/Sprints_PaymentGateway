"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Merchant = void 0;
var Merchant = /** @class */ (function () {
    function Merchant(merchantId, name, email, password, cardHolderName, cardNumber, expireDate, CVV) {
        this.merchantId = merchantId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cardHolderName = cardHolderName;
        this.cardNumber = cardNumber;
        this.expireDate = expireDate;
        this.CVV = CVV;
    }
    return Merchant;
}());
exports.Merchant = Merchant;
