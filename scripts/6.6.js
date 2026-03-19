// Set and decrease for counter
// Modify the code of makeCounter() so that the counter can also decrease and set the number:
// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    counter.set = function (value) {
        counter.count = value;
    };

    counter.decrease = function () {
        counter.count--;
    };
    return counter;
}

let counter = makeCounter();
console.log(counter.count);
counter();
console.log(counter.count);
counter.set(10);
console.log(counter.count);
counter.decrease();
console.log(counter.count);
counter();
console.log(counter.count);

// Sum with an arbitrary amount of brackets
// Write function sum that would work like this:

console.log(sum(1)(2).toString());
console.log(sum(1)(2)(3).toString());
console.log(sum(5)(-1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());

function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}
