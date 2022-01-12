class Person {
    constructor(name) {
        this.name = name;
    }
}

class Janitor extends Person {
    constructor(name, NumberOfMops) {
        super(name);
        this.NumberOfMops = NumberOfMops;
    }

    clean() {
        console.log(`The janitor cleaned with ${this.NumberOfMops} mops`);
    }
}

const janitor = new Janitor("Jan", 12);
console.log(janitor);
janitor.clean();
