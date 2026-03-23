// Spy decorator - task 1
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
// Every call is saved as an array of arguments.

function work(a, b) {
    console.log(a + b); // work is an arbitrary function or method
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}
// eslint-disable-next-line no-func-assign
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// Delaying decorator - task 2
// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function (...args) {
        setTimeout(() => {
            f.apply(this, args);
        }, ms);
    };
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

// Debounce decorator - task 3

function debounce(f, ms) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            f.apply(this, args);
        }, ms);
    };
}
// eslint-disable-next-line no-func-assign
f = debounce(f, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// Throttle decorator - task 4

function throttle(f, ms) {
    let isThrottle = false;
    let savedArgs;
    let savedThis;

    function wrapper(...args) {
        if (isThrottle) {
            savedArgs = args;
            savedThis = this;
            return;
        }

        isThrottle = true;
        f.apply(this, args);

        setTimeout(function () {
            isThrottle = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = savedArgs = null;
            }
        }, ms);
    }

    return wrapper;
}

// f1000 passes calls to f at maximum once per 1000 ms
let f2000 = throttle(f, 2000);

f2000(1); // shows 1
f2000(2); // (throttling, 1000ms not out yet)
f2000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
