// Immutability
// The word immutability essentially it means something that cannot be mutated which means something cannot be
// changed.

const person = {
    name: "Chris",
    colors: Object.freeze(["red", "blue"]),
};

const person2 = deepFreeze({
    name: "Chris",
    colors: ["red", "blue"],
    address: {
        street: "1234",
    },
});

const newPerson = { ...person2, address: { ...person2.address, street: "1" } };

console.log(person2);
console.log(newPerson);

// person2.colors.push("black");

function deepFreeze(object) {
    Object.values(object).forEach((value) => {
        if (value && typeof value == "object") {
            deepFreeze(value);
        }
    });

    return Object.freeze(object);
}
