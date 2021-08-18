"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managerEntries = void 0;
function managerEntries(entry) {
    if (entry === void 0) { entry = []; }
    return __spreadArray(__spreadArray([], entry), [require.resolve('./register')]);
}
exports.managerEntries = managerEntries;
