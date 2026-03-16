// Sum all numbers till the given one - task 1
// Make 3 solution variants:
// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

console.log("Loop:", sumToLoop(100));
console.log("Recursion:", sumToRecursion(100));
console.log("Arithmetic progression formula:", sumToFormula(100));

console.log("Loop:", getExecutionTime(sumToLoop, 100));
console.log("Recursion:", getExecutionTime(sumToRecursion, 100));
console.log(
    "Arithmetic progression formula:",
    getExecutionTime(sumToFormula, 100),
);

function sumToLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToRecursion(n) {
    return n == 1 ? n : n + sumToRecursion(n - 1);
}

function sumToFormula(n) {
    return (n * (1 + n)) / 2;
}

function getExecutionTime(fn, n, iterations = 1000000) {
    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
        fn(n);
    }

    const end = performance.now();
    return end - start;
}

// Calculate factorial - task 2
// The task is to write a function factorial(n) that calculates n! using recursive calls.

console.log("Factorial", factorial(5));

function factorial(n) {
    return n == 1 ? n : n * factorial(n - 1);
}

// Fibonacci numbers - task 3
// Write a function fib(n) that returns the n-th Fibonacci number.

console.log("Fibonacci numbers", fib(7));

// resursion solution (very slow for big n)
// function fib(n) {
//     return n > 2 ? fib(n - 1) + fib(n - 2) : 1;
// }

// base solution O(n)
// function fib(n) {
//     if (n <= 2) return 1;

//     let a = 1n;
//     let b = 1n;

//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }

//     return b;
// }

// memoization solution O(n)
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

// Output a single-linked list - task 4
// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

console.log("Output a single-linked list");
printList(list);

// loop solution
// function printList(list) {
//     let temp = list;

//     while (temp) {
//         console.log(temp.value);
//         temp = temp.next;
//     }
// }

// resursion solution
function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

// Output a single-linked list in the reverse order - task 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.
// Make two solutions: using a loop and using a recursion.

console.log("Output a single-linked list in the reverse order");
printListReverse(list);

// loop solution
// function printListReverse(list) {
//     let arr = [];
//     let temp = list;

//     while (temp) {
//         arr.push(temp.value);
//         temp = temp.next;
//     }

//     //console.log(arr.reverse());
//     for (let i = arr.length; i > 0; i--) {
//         console.log(i);
//     }
// }

// recursion solution
function printListReverse(list) {
    if (list.next) {
        printListReverse(list.next);
    }

    console.log(list.value);
}
