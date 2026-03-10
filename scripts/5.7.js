// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = [
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

console.log(unique(values)); // Hare, Krishna, :-O

// Filter anagrams
// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.
// From every anagram group should remain only one word, no matter which one.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// object solution
// function aclean(arr) {
//     return Object.values(
//         arr.reduce(
//             (obj, word) => (
//                 (obj[word.toLowerCase().split("").sort().join("")] = word),
//                 obj
//             ),
//             {},
//         ),
//     );
// }

// map solution
function aclean(arr) {
    return Array.from(
        arr
            .reduce(
                (map, word) =>
                    map.set(word.toLowerCase().split("").sort().join(""), word),
                new Map(),
            )
            .values(),
    );
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// Iterable keys
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
// But that doesn’t work:
// Why? How can we fix the code to make keys.push work?

let map = new Map();

map.set("name", "John");

// let keys = map.keys();
// need to use Array.from to access the built-in methods of arrays.
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");
