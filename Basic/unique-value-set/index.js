const uniqueCheck = (str) => new Set(str).size === str.length;

console.log(uniqueCheck('abcd'));
