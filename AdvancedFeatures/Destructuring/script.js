const array = ["A", "B", "C", "D", ["E", "F"]];

// const first = array[0];
// const second = array[1];

// const [first, second, , fourth, fifth, sixth = "123456"] = array;
const [first, second, , fourth, [fifth, sixth]] = array;

// console.log(first);
// console.log(second);
// console.log(fourth);
// console.log(fifth);
// console.log(sixth);

function addAndMultiply(a, b) {
    return [a + b, a * b];
    //a plus b, a times b
    //addition and multiplication
}

// const [sum, product] = addAndMultiply(3, 5);
// console.log(sum);
// console.log(product);

const person = {
    name: "Chris",
    age: 25,
    favoriteFood: "Fish",
    address: {
        street: "123 main street",
        city: "somewhere",
    },
};

// const { name: firstName, age } = person;
// console.log(firstName, age);

const {
    address: { street, city, zipcode = "12345" },
} = person;

console.log(street, city, zipcode);

function nameToFirstAndLastArray(fullName) {
    return (splitName = fullName.split(" "));
}

const [firstNameArray, lastNameArray] = nameToFirstAndLastArray("Chris Davis");
console.log(firstNameArray);
console.log(lastNameArray);

function nameToFirstAndLastObject(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    return { firstName, lastName };
}

const { firstName, lastName } = nameToFirstAndLastObject("Chris Davis");
console.log(firstName);
console.log(lastName);

//Destructuring objects as parameters to a function
function addAndMultiplyObjectParam({ a, b = 4 }) {
    return [a + b, a * b];
}

const [sum, product] = addAndMultiplyObjectParam({ a: 3 });
console.log(sum, product);
