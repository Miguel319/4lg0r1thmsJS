/*Return the provided string with the first letter
 of each word capitalized.Make sure the rest of the 
 word is in lower case.

For the purpose of this exercise, you should also 
capitalize connecting words like "the"
and "of".

Remember to use Read - Search - Ask
if you get stuck.
*/

const titleCase = (str) => {
    const strArr = str.toLowerCase().split(' ');

    return strArr.map(v => v = `${v[0].toUpperCase()}${v.slice(1, v.length)}`)
        .join(' ');
}

console.log(titleCase("I'm a little tea pot"));