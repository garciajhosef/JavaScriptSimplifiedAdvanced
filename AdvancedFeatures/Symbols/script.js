import { person } from "./module.js";

//Primitive Symbol
//Symbols are always unique, you can create more than one with same name but they will be completely different
//if you see Symbol.for and parse in a name, it'll create a global symbol if one doesn't exist. Otherwise, it'll get the global symbol of the same name that currently exist

console.log(person);

const sym3 = Symbol.for("globalSymbol");
const sym2 = Symbol("name");

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});

console.log(JSON.stringify(person));

console.log(Object.getOwnPropertySymbols(person));
console.log(person[sym3], person[sym2]);
