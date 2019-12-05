/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.*/

export { };

const fearNotLetter = (str: string) => {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  const strArr = str.split("");
  const from = alphabet.indexOf(strArr[0]);
  const to = alphabet.indexOf(strArr[strArr.length - 1]);
  const sub = alphabet.substr(from, to);
  const arrSet = new Set(strArr);

  for (let elem of sub) if (!arrSet.has(elem)) return elem;

  return undefined;
};

console.log(fearNotLetter("bcdf"));
