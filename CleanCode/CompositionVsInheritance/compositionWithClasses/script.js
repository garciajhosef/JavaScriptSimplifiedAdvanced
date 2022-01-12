import {
    WalkerMixin,
    SwimMixin,
    FlyMixin,
    AttackMixin,
    SleepMixin,
} from "./mixins.js";

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

class Bear extends AttackMixin(SleepMixin(WalkerMixin(Animal))) {}
class Shark extends AttackMixin(SleepMixin(SwimMixin(Animal))) {}
class Bird extends AttackMixin(SleepMixin(WalkerMixin(FlyMixin(Animal)))) {}
class Sharknado extends FlyMixin(Shark) {}

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

const sharknado = new Sharknado("Sharknado");
sharknado.attack();
sharknado.swim();
sharknado.fly();
