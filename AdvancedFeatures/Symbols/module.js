const sym1 = Symbol("name");
const sym2 = Symbol("name");
const sym3 = Symbol.for("globalSymbol");

export const person = {
    [sym1]: "Chris",
    age: 25,
    [sym2]: "Davis",
    [sym3]: "Global symbol",
};

console.log(person);
