"use strict";
exports.__esModule = true;
var steamrollArray = function (arr) {
    var flattened = [].concat.apply([], arr);
    return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
};
console.log(steamrollArray([1, [2], [3, [[4]]]]));
