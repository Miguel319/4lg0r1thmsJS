//Flatten a nested array. You must account for varying levels of nesting.
export {};

const steamrollArray = (arr: any[]) => {
  let flattened = [].concat(...arr);

  return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
