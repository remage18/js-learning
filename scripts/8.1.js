// Working with prototype - task 1
// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
    jumps: null,
};
let rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(rabbit.jumps); // true
delete rabbit.jumps;
console.log(rabbit.jumps); // null
delete animal.jumps;
console.log(rabbit.jumps); // undefined

// Searching algorithm - task 2
// The task has two parts.
// Use __proto__ to assign prototypes in a way that any property
// lookup will follow the path: pockets → bed → table → head.
// For instance, pockets.pen should be 3 (found in table),
// and bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
// Theoretically, direct property access should be faster,
// but in practice there’s no noticeable difference. Moreover, the engine optimizes property access.

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);

// Where does it write? - task 3
// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

// this is not affected by prototypes, the method will be called from animal,
// but this will refer to the object that invoked the eat method.

// Why are both hamsters full? - task 4
// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?
// The problem occurs because the stomach array is stored in the prototype object.
// To store results correctly, we need a separate array for each prototypically inherits object.

let hamster = {
    // stomach = [];
    eat(food) {
        if (!this.stomach) {
            this.stomach = [];
        }
        this.stomach.push(food);
    },
};

let speedy = {
    //stomach: [],
    __proto__: hamster,
};

let lazy = {
    //stomach: [],
    __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
speedy.eat("banana");
console.log(speedy.stomach); // apple
lazy.eat("banana");
// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
console.log(hamster.stomach);
