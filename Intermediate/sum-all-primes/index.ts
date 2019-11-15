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

const sumPrimes = (num: number) => {
  let elems: number[] = [];

  for (let i = 2; i <= num; i++) {
    let prime = true;

    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j !== i) prime = false;
    }
      elems.push( prime ? i : undefined);
  }

    return elems.filter(v => v !== undefined).reduce((a, b) => a + b, 0);
};

console.log(sumPrimes(977));
