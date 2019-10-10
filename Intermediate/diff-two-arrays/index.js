/*
Compare two arrays and
return a new array with any items only found in one
 of the two given arrays, but not both.In other words,
    return the symmetric difference of the two arrays.
*/

const diffArray = (arr1, arr2) => {
    let arr1Set = new Set(arr1);
    let arrSet2 = new Set(arr2);
    let newArr = [];

    for (let elem of arr2) if (!arr1Set.has(elem)) newArr.push(elem)
    
    for (let elem of arr1) if(!arrSet2.has(elem)) newArr.push(elem);

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));