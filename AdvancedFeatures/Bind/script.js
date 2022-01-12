//Bind
//Creating a new brand function
//Just call the bind function on our variable of our function. So we take our function name and call the bind function on it. this function actually has a function on it. Every function on JavaScript has this bind function you can call and in here, the very first thing you pass to it is whatever "this" will be. Doing this we're redefining what "this" means inside of a function
//The first property is always redefining "this", could be null, this, or a new this(person)

window.name = "Global Name";

const person = {
    name: "Chris",
};

function printName() {
    console.log(this.name);
}

const printNameBind = printName.bind(person);
printNameBind();
printName();

//We can actually use bind to bind properties to a function
function product(a, b) {
    return a * b;
}

const numbers = [1, 2, 3, 4, 5];

const newNumbers1 = numbers.map((number) => {
    return product(2, number);
});

const newNumbers = numbers.map(product.bind(null, 2));

console.log(newNumbers1);
console.log(newNumbers);
