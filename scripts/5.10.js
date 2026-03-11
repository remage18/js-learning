// Destructuring assignment
// Write the destructuring assignment that reads:
// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
let user = {
    name: "John",
    years: 30,
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// The maximal salary
// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

console.log(topSalary(salaries));

function topSalary(obj) {
    let topPaid = null;
    let curSalary = 0;
    for (const [name, salary] of Object.entries(obj)) {
        if (curSalary < salary) {
            curSalary = salary;
            topPaid = name;
        }
    }
    return topPaid;
}
