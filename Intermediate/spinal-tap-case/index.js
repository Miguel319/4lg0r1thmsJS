/*
Convert a string to spinal case.Spinal
case is all - lowercase - words - joined - by - dashes.
*/
var spinalCase = function (str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str
        .toLowerCase()
        .split(/(?:_| )+/)
        .join("-");
};
console.log(spinalCase("This_Is Spinal_Tap"));
