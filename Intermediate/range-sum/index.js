/*
We'll pass you an array of two numbers.
 Return the sum of those two numbers plus 
 the sum of all the numbers between them.

The lowest number will not always come first.
*/

const sumAll = (arr) => {
    const newArr = arr.sort((a, b) => a > b ? 1 : -1);;

    let val = newArr[0];
    let sum = 0;

    while (val <= newArr[1]) {
        sum += val;
        val ++;
    }
    

    return sum;
}

console.log(sumAll([5, 10]));
console.log(sumAll([4, 1]));