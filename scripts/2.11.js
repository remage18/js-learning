//1st task
// Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
let age = 91;

if (age >= 14 && age <= 90) {
    alert("between 14 and 90 inclusively");
}

//2st task
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

//if (!(age >= 14 && age <= 90)) {
//    alert("NOT between 14 and 90 inclusively");
//}

if (age < 14 || age > 90) {
    alert("NOT between 14 and 90 inclusively");
}

//3rd task
//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”,
//if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
const USER_LOGIN = "Admin";
const USER_PASSWORD = "TheMaster";
let userLogin = prompt("Type your login");
let userPassword;

if (userLogin === USER_LOGIN) {
    userPassword = prompt("Type your password");

    if (userPassword === USER_PASSWORD) {
        alert("Welcome");
    } else if (!userPassword) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (!userLogin) {
    alert("Canceled");
} else {
    alert("I don’t know you");
}
