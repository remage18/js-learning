// Changing "prototype" - task 1
function Rabbit() {}
Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; - rabbit.eats still true, for new objs property eats will be undefined

// Rabbit.prototype.eats = false; - rabbit.eats will be false,
// since we are modifying the property directly rather than the prototype

//delete rabbit.eats; - rabbit.eats will be true,
// since the rabbit does not have the eats property, it is located in the prototype,
// a delete call like this will do nothing

// delete Rabbit.prototype.eats; - now rabbit.eats will be undefined,
// since the property was completely delete from the prototype

console.log(rabbit.eats); // true

// Create an object with the same constructor - task 2
// Imagine, we have an arbitrary object obj, created by a constructor function –
// we don’t know which one, but we’d like to create a new object using it.
// Give an example of a constructor function for obj which lets such code work right.
// And an example that makes it work wrong.

function Obj() {
    this.value = 5;
}

Obj.prototype = {};

let obj = new Obj();
console.log(obj.value);
let obj2 = new obj.constructor();
console.log(obj2.value);
