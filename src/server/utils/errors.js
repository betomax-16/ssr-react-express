"use strict";
exports.__esModule = true;
exports.Errors = void 0;
var responseWrapper_1 = require("./responseWrapper");
var Errors = /** @class */ (function () {
    function Errors() {
    }
    Errors.handler = function (error, res) {
        if (error.code && error.code == 11000) {
            var data = { message: "Field \"".concat(Object.keys(error.keyValue)[0], "\" with value ").concat(Object.values(error.keyValue)[0], " already exists.") };
            responseWrapper_1.ResponseWrapper.handler(res, data, 500);
        }
        else if (error.message) {
            var data = { message: error.message };
            responseWrapper_1.ResponseWrapper.handler(res, data, 500);
        }
        else {
            responseWrapper_1.ResponseWrapper.handler(res, error, 500);
        }
    };
    return Errors;
}());
exports.Errors = Errors;
