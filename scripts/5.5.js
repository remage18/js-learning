// 1. Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

function camelize(str) {
    return str
        .split("-")
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1),
        )
        .join("");
}

// 2. Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values
// higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}

// 3. Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values
// except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    arr.forEach((element, index) => {
        if (element < a || element > b) arr.splice(index, 1);
    });
}

// 4. Sort in decreasing order

arr = [5, 2, 1, -10, 8];
//console.log(arr.reverse(arr.sort((a, b) => a - b))); // 8, 5, 2, 1, -10
console.log(arr.sort((a, b) => b - a));

// 5. Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    return arr.slice().sort();
}

// 6. Map to names
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };
let users = [john, pete, mary];

let names = users.map((element) => element.name);
console.log(names); // John, Pete, Mary

// 7. Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let usersMapped = users.map((element) => ({
    fullName: `${element.name} ${element.surname}`,
    id: element.id,
}));

console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

// 8. Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

console.log(sortByAge(users));

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

// 9. Shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements.

arr = [1, 2, 3];
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 10. Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

console.log(getAverageAge(users));

function getAverageAge(users) {
    return users.reduce((sum, item) => sum + item.age, 0) / users.length;
}

// 11. Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// 12. Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

users = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

function groupById(array) {
    return array.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}
