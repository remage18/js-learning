// Task 1
// Rewrite the function using '?' or '||'
//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm('Did parents allow you?');
//  }
//}

function checkAge(age) {
    //return age > 18 ? true : confirm("Did parents allow you?");
    return age > 18 || confirm("Did parents allow you?");
}

// Task 2
// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
    return a < b ? a : b;
}

// Task 3
// Write a function pow(x,n) that returns x in power n. Or, in other words,
// multiplies x by itself n times and returns the result.
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.

let num = prompt("Enter a number greater than 1");
let exp = prompt("Enter an exponent");

function pow(n, x) {
    let result = n;
    for (let i = 1; i < x; i++) {
        result *= n;
    }
    return result;
}

function checkNum(n) {
    if (n >= 1) {
        return n;
    } else {
        n = prompt("You should enter a number greater than 1 !");
        return checkNum(n);
    }
}

alert(pow(checkNum(num), exp));
