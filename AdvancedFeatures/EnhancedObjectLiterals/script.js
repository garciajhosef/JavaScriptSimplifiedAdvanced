const firstName = "Chris";
const age = 25;
const propertyName = "name";
const index = 1;

const sayHi1 = function () {
    console.log("Hi");
};

const person = {
    [propertyName]: firstName,
    [`age${index}`]: age,
    sayHi1,
    sayHi2() {
        console.log("Hi");
    },
};

console.log(person);
