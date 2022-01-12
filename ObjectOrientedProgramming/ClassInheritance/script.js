class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`I am ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, owner) {
        super(name);
        this.owner = owner;
    }

    speak() {
        console.log("Bark");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow");
    }
}

const dog = new Dog("x", "c");
console.log(dog);
dog.speak();
const cat = new Cat("cat");
console.log(cat);
cat.speak();
