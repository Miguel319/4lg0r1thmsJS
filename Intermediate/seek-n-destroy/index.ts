/*You will be provided with an initial array (the first argument 
in the destroyer function), 
followed by one or more arguments. Remove all elements from 
the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.*/


const destroyer = (arr: any[], ...args: any) => {
  const newArr = [...args];
  const uniqueSet = new Set(newArr);

  for (let elem of arr)
    if (uniqueSet.has(elem)) arr.splice(arr.indexOf(elem), 1, undefined);

  return arr.filter(v => typeof v !== "undefined");
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));