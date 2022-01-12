// const array = [1,2,3,4]
// const TAXES = 1.07

//

// console.log(addElement(array,44,TAXES))

// Definition:
// Given the exact same inputs, I will always get to the exact same output returned with no side effects and no additional changes. 

// A Pure Function essentially as a few different rules.
// One: You need to make sure you only rely on inputs to your function, or you only rely variables
// that can never change (const variables)
// You must always rely on the inputs or global constant variables for your function.
// Two: You can't have any side effects. Like modifying variables outside of that scope
// So anything at all, whether it's mutating data, doing something that's inconsistent like querying a database,
// or querying an API, all those are side effects of the function 
const person = {
    name: "Chris",
    colors: ["red", "blue"],
};

function impureAddColor(color) {
    person.colors.push(color);
}

function pureAddColor(p, color) {
    return { ...p, colors: addElement(p.colors, color) };
}

function addElement(a, element) {
    return [...a, element];
}
// impureAddColor("yellow")
console.log(pureAddColor(person, "yellow"));
console.log(person);
