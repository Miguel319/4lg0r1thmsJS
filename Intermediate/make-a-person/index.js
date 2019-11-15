/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
*/


const Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(' ')[0];
    let lastName = firstAndLast.split(' ')[1];

    this.getFirstName = () => firstName;
    this.getLastName = () => firstAndLast.split(' ')[1];
    this.getFullName = () => `${firstName} ${lastName}`;
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = (full) => {
        firstName = full.split(' ')[0];
        lastName = full.split(' ')[1];
    }
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());

bob.setFirstName('Gregg');
bob.setLastName('James');
console.log(bob.getFullName());

console.log(bob instanceof Person);
