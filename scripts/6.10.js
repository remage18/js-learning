"use strict";
// Bound function as a method - task 1
// What will be the output?
// function f() {
//     console.log(this); // strict-mode - null / non-strict - window
// }

// let user = {
//     g: f.bind(null),
// };

// user.g();

// Second bind - task 2
// Can we change this by additional binding?
// What will be the output?

// function f() {
//     console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f(); // John. If a function has already been created using bind, subsequent bind calls are ignored.

// Function property after bind - task 3
// There’s a value in the property of a function. Will it change after bind? Why, or why not?
// function sayHi() {
//     console.log(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "John",
// });

// console.log(bound.test); // what will be the output? why?
// undefined
// When using bind, a new function is created with an explicitly defined this.
// test is a property of the original function, and it will not be copied when bind is used.

// Fix a function that loses "this" - task 4
// The call to askPassword() in the code below should check the password
// and then call user.loginOk/loginFail depending on the answer.
// But it leads to an error. Why?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// // When functions are called inside askPassword, the context will be lost
// //askPassword(user.loginOk, user.loginFail);
// // should use bind to fix this
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Partial application for login - task 5
// The task is a little more complex variant of Fix a function that loses "this".
// The user object was modified. Now instead of two functions loginOk/loginFail,
// it has a single function user.login(true/false).
// What should we pass askPassword in the code below, so that
// it calls user.login(true) as ok and user.login(false) as fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "John",

    login(result) {
        console.log(this.name + (result ? " logged in" : " failed to log in"));
    },
};

// askPassword(?, ?);
// When calling bind, we can also specify a list of arguments that will be used as default values.
askPassword(user.login.bind(user, true), user.login.bind(user, false));
