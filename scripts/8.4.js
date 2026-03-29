// Add toString to the dictionary - task 1
// There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
// Add method dictionary.toString() into it, that should return a comma-delimited list of keys.
// Your toString should not show up in for..in over the object.

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        },
        enumerable: false,
        writable: true,
        configurable: true,
    },
});

// Object.defineProperty(dictionary, "toString", {
//     value() {
//         let keysList = [];
//         for (let key in dictionary) {
//             keysList.push(key);
//         }
//         return keysList;
//     },
//     enumerable: false,
// });

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary.toString());

// The difference between calls - task 2

// Let’s create a new rabbit object:

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");
// These calls do the same thing or not?

rabbit.sayHi(); // Rabbit

// In the next calls, this refers to Rabbit.prototype, which has no name property, so the result will be undefined
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
