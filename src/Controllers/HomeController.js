"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.WelcomScreen = function (req, res) {
        return res.send("<h1>Welcom To our Payment-Getway API</h1>\n      <p style=\"font-size: 22px; fon-family: arial;\">if you are a current user please sign in so you can use our services.</br>\n      if you are not, please sign up.</p>\n      ");
    };
    return HomeController;
}());
exports.HomeController = HomeController;
