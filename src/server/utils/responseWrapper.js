"use strict";
exports.__esModule = true;
exports.ResponseWrapper = void 0;
var ResponseWrapper = /** @class */ (function () {
    function ResponseWrapper() {
    }
    ResponseWrapper.handler = function (res, data, status, message) {
        if (message === void 0) { message = "Success"; }
        var msg = '';
        if (status >= 100 && status < 200) {
            msg = 'Informative response';
        }
        else if (status >= 200 && status < 300) {
            msg = 'Successful response';
        }
        else if (status >= 300 && status < 400) {
            msg = 'Redirect error';
        }
        else if (status >= 400 && status < 500) {
            msg = 'Client error';
        }
        else if (status >= 500 && status < 600) {
            msg = 'Server error';
        }
        res.status(status).json({
            statusCode: status,
            body: data,
            message: msg
        });
    };
    return ResponseWrapper;
}());
exports.ResponseWrapper = ResponseWrapper;
