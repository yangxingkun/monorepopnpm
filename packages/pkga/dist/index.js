"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = exports.isEven = void 0;
var isEven = function (x) { return x % 2 === 0; };
exports.isEven = isEven;
var calc = function (a, b) {
    return a - b;
};
exports.calc = calc;
console.log((0, exports.calc)(1024, 28));
