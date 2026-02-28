// Create a constructor function Calculator that creates objects with 3 methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
    this.read = function () {
        this.a = Number(prompt("Enter first number: "));
        this.b = Number(prompt("Enter second number:"));
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();

calculator.read();
console.log(`Sum is ${calculator.sum()}`);
console.log(`Multiplies is ${calculator.mul()}`);

// Create a constructor function Accumulator(startingValue).
// Object that it creates should:
// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        let newValue = Number(prompt("Enter the number to be added"));
        this.value += newValue;
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
