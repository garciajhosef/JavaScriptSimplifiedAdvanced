const chris = {
    name: "Chris",
    age: 25,
    address: {
        street: "123 Main St",
        zipcode: "23085",
    },
    sayHi() {
        console.log("Hi");
    },
    hobbies: ["Bowling", "Weight Lifting"],
};
//?.
//check if the value that it's trying to get is null or undefined
function printStreet(person) {
    console.log(person?.address?.street);
    // console.log(person && person.address && person.address.street);
}

function callSayHi(person) {
    person?.sayHi?.();
}

function printHobbyOne(person) {
    console.log(person?.hobbies?.[0]);
}
printStreet(chris);
callSayHi(chris);
printHobbyOne(chris);
