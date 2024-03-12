"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOf = exports.isEven = void 0;
var isEven = function (x) { return x % 2 === 0; };
exports.isEven = isEven;
var typeOf = function (obj) { return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase(); };
exports.typeOf = typeOf;
