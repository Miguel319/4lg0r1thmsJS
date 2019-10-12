/*
Check if the predicate (second argument) is truthy on all
 elements of a collection (first argument).

In other words, you are given an array collection of objects. 
The predicate prewill be an object property and you need to 
return trueif its value is truthy. Otherwise, return false.

In JavaScript, truthyvalues are values that translate to 
truewhen evaluated in a Boolean context.

Remember, you can access object properties through either dot 
notation or []notation.
*/

const truthCheck = (collection: Object[], pre: string) => {
    const evaluation = collection.map(obj => Boolean(obj[pre]) );

    for (let elem of evaluation) {
        if (elem === false) return false;
    }
    
    return true;
}

console.log(truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
));