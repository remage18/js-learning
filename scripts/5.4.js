// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let style = ["Jazz", "Blues"];
console.log(style);
style.push("Rock-n-Roll");
console.log(style);
style[Math.floor(style.length / 2)] = "Classics";
console.log(style);
style.shift(0);
console.log(style);
style.unshift("Rap", "Reggae");
console.log(style);

// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

console.log(sumInput());

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Enter the number");

        if (
            value === null ||
            value.trim() === "" ||
            !Number.isFinite(Number(value))
        )
            break;

        numbers.push(Number(value));
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6 (take all)
console.log(getMaxSubSum([-1, -2, -3])); // == 0

function getMaxSubSum(arr) {
    let sum = 0;
    let result = 0;
    let start = 0;
    let end = -1;
    let temp = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum < 0) {
            sum = 0;
            temp = i + 1;
        } else if (sum > result) {
            result = sum;
            start = temp;
            end = i;
        }
    }

    return {
        result,
        start,
        end,
        subarray: end >= start ? arr.slice(start, end + 1) : [],
    };
}
