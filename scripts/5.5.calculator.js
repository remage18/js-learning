// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the
// format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// Then add the method addMethod(name, func) that teaches the calculator a new operation.
// It takes the operator name and the two-argument function func(a,b) that implements it.
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (str) {
        const [a, operator, b] = str.split(" ");
        if (!this.methods[operator] || !isFinite(a) || !isFinite(b)) return NaN;
        return this.methods[operator](Number(a), Number(b));
    };

    this.addMethod = function (name, fn) {
        return (this.methods[name] = fn);
    };
}

let test = new Calculator();
console.log(test.calculate("1 + 2"));
console.log(test.calculate("1 +2"));
console.log(test.calculate("asdsa + 2"));
console.log(test.calculate("1 - 2"));
console.log(test.calculate("1 * 2"));
test.addMethod("*", (a, b) => a * b);
console.log(test.calculate("1 * 2"));
test.addMethod("/", (a, b) => a / b);
console.log(test.calculate("1 / 2"));
test.addMethod("**", (a, b) => a ** b);
console.log(test.calculate("1 ** 2"));
