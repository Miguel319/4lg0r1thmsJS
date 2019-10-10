//With slice
const confirmEnding = (str, target) => str.slice(-target.length) === target;

console.log(confirmEnding("Bastian", "n"));