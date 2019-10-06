/*
Repeat a given string str(first argument) 
for numtimes(second argument).Return an empty string
if numis not a positive number.
*/

const repeatStringNumTimes = (str, num) => {
    // repeat after me
    let newStr= [];

    for (let i = 1; i <= num; i++) {
        newStr.push(str);
    }

    return newStr.join('');
}

console.log(repeatStringNumTimes("abc", 3));