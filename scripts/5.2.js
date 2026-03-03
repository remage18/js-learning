// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let a, b;

do {
    ({ a, b } = inputNumbers());
} while (isInvalid(a) || isInvalid(b));

console.log(Number(a) + Number(b));

function inputNumbers() {
    const a = prompt("Enter the first number");
    const b = prompt("Enter the second number");
    return { a, b };
}

function isInvalid(value) {
    return (
        value === null || value.trim() === "" || !Number.isFinite(Number(value))
    );
}

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

let num = readNumber();
console.log(num);
console.log(typeof num);

function readNumber() {
    let input;

    while (true) {
        input = prompt("Enter the number");

        if (input === null || input === "") return null;

        const num = Number(input);

        if (Number.isFinite(num)) return num;
    }
}

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

console.log(random(1, 5));

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability.

console.log(randomInteger(1, 3));

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
