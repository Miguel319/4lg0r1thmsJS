/*
Return true
if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should
return true because all of the letters in the second string
 are present in the first, ignoringcase.

The arguments["hello", "hey"] should
return false because the string "hello"
does not contain a "y".

Lastly, ["Alien", "line"], should
return true because all of the letters in "line"
are present in "Alien".
*/

const mutation = (arr) => {
    let arrSet = new Set(arr[0].toLowerCase());
    let newArr = [];

    for (let elem of arr[1].toLowerCase()) {
        newArr.push(arrSet.has(elem) ? true : false);
    }

    return newArr.includes(false) ? false : true;
}

console.log(mutation(["hello", "hey"]));