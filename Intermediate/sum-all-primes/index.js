/*
Sum all the prime numbers up to and
including the provided number.

A prime number is defined as a number
 greater than one and having only two
  divisors, one and itself. For example,
  2 is a prime number because it's only
   divisible by one and two.

The provided number may not be a prime.
*/
var sumPrimes = function (num) {
    var elems = [];
    for (var i = 2; i <= num; i++) {
        var prime = true;
        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i)
                prime = false;
        }
        elems.push(prime ? i : undefined);
    }
    return elems.filter(function (v) { return v !== undefined; }).reduce(function (a, b) { return a + b; }, 0);
};
console.log(sumPrimes(977));
