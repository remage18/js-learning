// Add method "f.defer(ms)" to functions - task 1
// Add to the prototype of all functions the method defer(ms),
// that runs the function after ms milliseconds.

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// function f() {
//     console.log("Hello!");
// }

// f.defer(1000); // shows "Hello!" after 1 second

// Add the decorating "defer()" to functions
// Add to the prototype of all functions the method defer(ms),
// that returns a wrapper, delaying the call by ms milliseconds.
Function.prototype.defer = function (ms) {
    let fn = this;

    return function (...args) {
        setTimeout(() => fn.apply(this, args), ms);
    };
};

function f1(a, b) {
    console.log(a + b);
}

f1.defer(1000)(1, 2); // shows 3 after 1 second
