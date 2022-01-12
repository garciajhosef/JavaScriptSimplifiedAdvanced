//Rest operator
//at the end add the ... in front of your last parameter name
//that means that every other parameter added to your function after the ones that are predefined
//is gonna be converted into an array and it's going to be sent into the last parameter (numbers)
function sum(multiplier, ...numbers) {
    console.log(multiplier);
    console.log(numbers);
    return multiplier * numbers.reduce((sum, number) => sum + number, 0);
}

// console.log(sum(10, 2, 3));

const numberArray = [10, 2, 3];

//Spread operator
//the spread operator all it does is take all the elements inside of the array that we have here and it converts them to individual values that it passes to the function
//Allow us to create brand new arrays
//Allow us to create a clone that's not actually modified by whenever we changed the original element
//Works on anything that is similar to an array
const array = ["A", "B", "C", "D"];
sum(...numberArray);

function concatName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}

const names = ["Chris", "Davis"];
concatName(...names);

const divs = [...document.querySelectorAll("div")];
console.log(divs);
const [first, second, ...rest] = array;
console.log(first, second, rest);

const person = {
    name: "Chris",
    age: 24,
    address: {
        street: "123 Main St",
        zipcode: "23085",
    },
};

const details = {
    friend: "italy",
    age: 25,
};

const { name, age, ...rest2 } = person;
console.log(name, age, rest2);

const person2 = { ...person };
console.log(person2);

const person3 = { ...person, ...details, extra: "extraField" };
console.log(person3);
