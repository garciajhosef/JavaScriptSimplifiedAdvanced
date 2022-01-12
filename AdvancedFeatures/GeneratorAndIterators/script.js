function* fibonacciGenerator() {
    let prevOne = 0;
    let prevTwo = 1;

    yield 0;
    yield 1;

    while (true) {
        const result = prevOne + prevTwo;
        yield result;
        prevOne = prevTwo;
        prevTwo = result;
    }
}

const generator = fibonacciGenerator();
// console.log(generator.next());
// console.log(generator.next());

//Return the first value and then add 1 after it is returned. This means it will return the current value of i which is 1 and then increment it.
function* idGenerator() {
    let count = 1;

    while (true) {
        const incrementor = yield count;
        if (incrementor != null) {
            count += incrementor;
        } else {
            count++;
        }
    }
}

const idGeneratorCall = idGenerator();
console.log(idGeneratorCall.next());
console.log(idGeneratorCall.next(2));
console.log(idGeneratorCall.next());
//It's possible to stop a generator using return, if it's necessary to return a value, this needs to be passed as a parameter
console.log(idGeneratorCall.return(11));
console.log(idGeneratorCall.next());
