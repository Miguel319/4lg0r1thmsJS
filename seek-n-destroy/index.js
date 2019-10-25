/*You will be provided with an initial array (the first argument
in the destroyer function),
followed by one or more arguments. Remove all elements from
the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.*/
var destroyer = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var newArr = args.slice();
    var uniqueSet = new Set(newArr);
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var elem = arr_1[_a];
        if (uniqueSet.has(elem))
            arr.splice(arr.indexOf(elem), 1, undefined);
    }
    return arr.filter(function (v) { return typeof v !== "undefined"; });
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
