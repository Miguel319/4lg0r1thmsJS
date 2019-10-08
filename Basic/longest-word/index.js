/*
Return the length of the longest 
word in the provided sentence.

Your response should be a number.
*/

const findLongestWordLength = (str) => {
    const strArr = str.split(' ');
    const longest = 0;

    for (let elem of strArr) {
        if (elem.length > longest) longest = elem.length;
    }
    
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");