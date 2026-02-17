//1st task
//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let officialNameOfJavaScript = prompt(
    'What is the "official" name of JavaScript?',
);
alert(
    officialNameOfJavaScript === "ECMAScript"
        ? "Right!"
        : "You don’t know? ECMAScript!",
);

//2nd task
//Using if..else, write the code which gets a number via prompt and then shows in alert:
//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.
//In this task we assume that the input is always a number.
let inputNum = Number(prompt("Write some number"));
if (inputNum > 0) {
    alert(1);
} else if (inputNum < 0) {
    alert(-1);
} else {
    alert(0);
}

//3rd task
//Rewrite this if using the conditional operator '?'
let result = a + b < 4 ? "Below" : "Over";

//4th task
//Rewrite 'if..else' into '?'
let message =
    login == "Employee"
        ? "Hello"
        : login == "Director"
          ? "Greetings"
          : login == ""
            ? "No login"
            : "";
