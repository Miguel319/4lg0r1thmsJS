/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/


const reverseStringWithWhile = (str) => {
    let count = str.length - 1;
    let newStr = '';

    while (count >= 0) {
        newStr += str[count];
        count--;
    }

    return newStr;
}

console.log(reverseStringWithWhile('Hello World!'));

const reverseStringWithFor = (str) => {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

console.log(reverseStringWithFor('Hello World!'));

const reverseStringWithForOf = (str) => {
    let newStr = '';

    for (let char of str) {
        newStr = char + newStr;
    }

    return newStr;
}

console.log(reverseStringWithForOf('Hello World!'));


const reverseStringWithSplit = (str) => str.split('').reverse().join('');

console.log(reverseStringWithSplit('Hello World!'));


const reverseStringWithSpreadOp = (str) => [...str].reverse().join('');

console.log(reverseStringWithSpreadOp('Hello World!'));


//The set data Structure doesn't allow repeated values
const reverseStringWithSet = (str) => {
    let setStr = new Set(str);
    let newStr = '';

    for (let i = setStr.size ; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseStringWithSet('Hello World!'));