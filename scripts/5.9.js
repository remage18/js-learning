// Sum the properties
// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(obj) {
    let sum = 0;
    for (let salary of Object.values(obj)) sum += salary;
    return sum;
}

// Count properties
// Write a function count(obj) that returns the number of properties in the object:
let user = {
    name: "John",
    age: 30,
};

console.log(count(user));

function count(obj) {
    return Object.keys(obj).length;
}
