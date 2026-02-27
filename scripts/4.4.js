// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = Number(prompt("Enter first number: "));
        this.b = Number(prompt("Enter second number:"));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read();
console.log(`Sum is ${calculator.sum()}`);
console.log(`Multiplies is ${calculator.mul()}`);

// There’s a ladder object that allows you to go up and down:
// Modify the code of up, down, and showStep to make the calls chainable

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().showStep().down().showStep();
