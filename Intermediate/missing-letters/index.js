"use strict";
/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/
exports.__esModule = true;
var fearNotLetter = function (str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var strArr = str.split("");
    var from = alphabet.indexOf(strArr[0]);
    var to = alphabet.indexOf(strArr[strArr.length - 1]);
    var sub = alphabet.substr(from, to);
    var arrSet = new Set(strArr);
    for (var _i = 0, sub_1 = sub; _i < sub_1.length; _i++) {
        var elem = sub_1[_i];
        if (!arrSet.has(elem))
            return elem;
    }
    return undefined;
};
console.log(fearNotLetter("bcdf"));
