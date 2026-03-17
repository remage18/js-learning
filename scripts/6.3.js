// Sum with closures - task 1
// Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
    return (b) => b + a;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

// Filter through function - task 2
// Make a set of “ready to use” filters:
// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.

function inBetween(a, b) {
    return (x) => x >= a && x <= b;
}

function inArray(arr) {
    return (x) => arr.includes(x);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// Sort by field - task 3
// We’ve got an array of objects to sort:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
];
// The usual way to do that would be:
// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?
console.log(users);
console.log([...users].sort(byField("name")));
console.log([...users].sort(byField("age")));
// So, instead of writing a function, just put byField(fieldName).
// Write the function byField that can be used for that.

function byField(key) {
    return (a, b) => (a[key] > b[key]) - (a[key] < b[key]);
}
