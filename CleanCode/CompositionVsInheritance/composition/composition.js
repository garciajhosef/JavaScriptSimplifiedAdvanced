const walker = ({ name }) => ({
    walk() {
        console.log(`${name} walked`);
    },
});

const swimmer = ({ name }) => ({
    swim() {
        console.log(`${name} swam`);
    },
});

const flyer = ({ name }) => ({
    fly() {
        console.log(`${name} flew`);
    },
});

const attacker = ({ name }) => ({
    attack() {
        console.log(`${name} attacked`);
    },
});

const sleeper = ({ name }) => ({
    sleep() {
        console.log(`${name} slept`);
    },
});

function createBear(name) {
    const bear = { name };
    return { ...bear, ...attacker(bear), ...sleeper(bear), ...walker(bear) };
}

function createShark(name) {
    const shark = { name };
    return {
        ...shark,
        ...attacker(shark),
        ...sleeper(shark),
        ...swimmer(shark),
    };
}

function createBird(name) {
    const bird = { name };
    return { ...bird, ...attacker(bird), ...sleeper(bird), ...flyer(bird) };
}

const bear = createBear("Bear");
bear.attack();
bear.sleep();
bear.walk();

const shark = createShark("Shark");
shark.attack();
shark.sleep();
shark.swim();

const bird = createBird("Bird");
bird.attack();
bird.sleep();
bird.fly();
