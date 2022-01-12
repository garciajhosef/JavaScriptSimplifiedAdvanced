class Animal {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} attacked`);
    }

    sleep() {
        console.log(`${this.name} slept`);
    }
}

class Bear extends Animal {
    walk() {
        console.log(`${this.name} walked`);
    }
}

class Shark extends Animal {
    swim() {
        console.log(`${this.name} swam`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} flew`);
    }
}

const bear = new Bear("Bear");
bear.attack();
bear.sleep();
bear.walk();

const shark = new Shark("Shark");
shark.attack();
shark.sleep();
shark.swim();

const bird = new Bird("Bird");
bird.attack();
bird.sleep();
bird.fly();
