export const WalkerMixin = (superclass) =>
    class extends superclass {
        walk() {
            console.log(`${this.name} walked`);
        }
    };

export const SwimMixin = (superclass) =>
    class extends superclass {
        swim() {
            console.log(`${this.name} swam`);
        }
    };

export const FlyMixin = (superclass) =>
    class extends superclass {
        fly() {
            console.log(`${this.name} flew`);
        }
    };

export const AttackMixin = (superclass) =>
    class extends superclass {
        attack() {
            console.log(`${this.name} attacked`);
        }
    };

export const SleepMixin = (superclass) =>
    class extends superclass {
        sleep() {
            console.log(`${this.name} slept`);
        }
    };
