/*
Perform a search and replace on the sentence using the arguments
 provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be
 replaced as "Dog"
*/
var myReplace = function (str, before, after) {
    var newArr = str.split(' ');
    var beforeIndex = newArr.indexOf(before);
    var isBeforeUpperCase = (before[0] === before[0].toUpperCase());
    if (beforeIndex !== undefined) {
        newArr.splice(beforeIndex, 1, isBeforeUpperCase ?
            after[0].toUpperCase() + after.slice(1, after.length)
            : after);
    }
    return newArr.join(' ');
};
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
