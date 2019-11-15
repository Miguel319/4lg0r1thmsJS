/*Write a function that takes two or more arrays and returns a
 new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the
 final array should not be sorted in numerical order.*/
var uniteUnique = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var arrElems = arr.slice();
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var elem = args_1[_a];
        arrElems.push.apply(arrElems, elem);
    }
    return Array.from(new Set(arrElems));
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
