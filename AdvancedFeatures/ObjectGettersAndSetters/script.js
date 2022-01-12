//Getters and Setters
//Getter: Must start with the word getter, then we can use any property name we want. Never takes parameters
//A getter is essentially a property name, that would be normally a function, but you just put the get keyword in front of it and that means that the function can not take any properties 'cause you're always getting a value
//You must return something from it, and whatever you return is just what's returned for that property name

//Setter: a setter is the same thing. It always takes a single parameter, and we can use that parameter to set any values that we want
const person = {
    firstName: "Chris",
    lastName: "Davis",
    _username: "ChrisD", //underscore "private property"
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    set username(value) {
        if (value.length > 5) this._username = value;
    },
};

console.log(person);
person.fullName = "New name";

const personB = {
    age: 25,
    get birthYear() {
        const year = new Date().getFullYear();
        return year - this.age;
    },
};

console.log(personB.birthYear);
