// Task 1
// Use the for loop to output even numbers from 2 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2) continue;
    alert(i);
}

// Task 2
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
//for (let i = 0; i < 3; i++) {
//    alert(`number ${i}!`);
//}

let i = 0;
while (i++ < 3) alert(`number ${i - 1}!`);

// Task 3
// Write a loop which prompts for a number greater than 100.
// If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters
// a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers.
// There’s no need to implement a special handling for a non-numeric input in this task.

let inputNumber;

do {
    inputNumber = prompt("Type a number greater than 100");
} while (inputNumber <= 100 && inputNumber);

// Task 4
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let numOfIterations;

do {
    numOfIterations = prompt(
        "Enter the upper limit of the range (must be > 2)",
    );
} while (numOfIterations <= 2 && numOfIterations);

if (numOfIterations) {
    let result = `Prime numbers from 2 to ${numOfIterations} is: `;
    nextNum: for (let i = 2; i <= numOfIterations; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextNum;
        }
        result += `${i}, `;
    }
    alert(result);
}
