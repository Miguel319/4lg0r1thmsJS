/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster)
of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/
var translatePigLatin = function (str) {
    var vowels = new Set(["a", "e", "i", "o", "u"]);
    var strArr = str.split("");
    var newStr = "";
    var counter = 0;
    var sub = "";
    if (vowels.has(strArr[0]))
        return strArr.join("").concat("way");
    if (!vowels.has(str[0]) && (/[aeiou]/i).test(str)) {
        while (!vowels.has(strArr[counter])) {
            counter++;
        }
        sub = strArr.join("").substr(0, counter);
        strArr.splice(0, sub.length);
        newStr = strArr
            .join("")
            .concat(sub)
            .concat("ay");
        return newStr;
    }
    return strArr.join("").concat("ay");
};
console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("schwartz"));
