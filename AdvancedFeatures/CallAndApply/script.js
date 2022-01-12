//Call and apply are essentially the same thing that bind
//In that instead of binding a new function, we are just calling that function.
//Using call and apply the function is called immediately

window.name = "Global Name";

const person = {
    name: "Chris",
};

function printName() {
    console.log(this.name);
}

printName();

//The only difference between call and apply is what happens when you start passing parameters to them.
const numbersToAdd = [1, 2, 3, 4, 5];

function sum(...numbers) {
    return numbers.reduce((count, number) => count + number);
}

//spread way
console.log(sum(...numbersToAdd));

//Using call you can pass all the parameters you wanted to apply "this", 1, 2, 3
console.log(sum.call(null, ...numbersToAdd));

//Apply is also the exact same but instead of passing parameters, you need to pass it in array of values. You pass it in array of different parameters.  "this", [1, 2, 3]
console.log(sum.apply(null, numbersToAdd));
