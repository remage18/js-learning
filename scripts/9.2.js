import { Clock } from "./9.1.js";
// Error creating an instance - task 1
// Here’s the code with Rabbit extending Animal.
// Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        // this.name = name; - should call super()
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
console.log(rabbit.name);

// Extended clock - task 2
// We’ve got a Clock class. As of now, it prints the time every second.
// Create a new class ExtendedClock that inherits from Clock and adds the parameter
// precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.
// Your code should be in the file 9.2.js
// Don’t modify the original 9.1.js. Extend it.

class ExtendedClock extends Clock {
    constructor({ template }, precision = 1000) {
        super({ template });
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(this.render, this.precision);
    }
}

let clock = new ExtendedClock({ template: "h:m:s" }, 2000);
clock.start();
