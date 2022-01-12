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

    //Private property
    //Not accessible in child classes
    // #cleaningProductCount = 10

    //Faking protected property
    _cleaningProductCount = 10;

    set cleaningProductCounter(value) {
        if (value > 5) this._cleaningProductCount = value;
    }

    clean() {
        this.#helperFunction();
        console.log(
            `The janitor cleaned with ${this.NumberOfMops} mops and used ${this._cleaningProductCount} cleaning products`
        );
    }

    #helperFunction() {
        console.log("help");
    }
}

class SuperJanitor extends Janitor {
    _cleaningProductCount = 100;
}

const janitor = new Janitor("Jan", 12);
// console.log(janitor._cleaningProductCount);

const superJanitor = new SuperJanitor("Jani", 122);
console.log(superJanitor.clean());
