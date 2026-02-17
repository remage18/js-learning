let name = "John";
let admin = name;
//alert(admin);

let userName = prompt("What is your name?");
alert(`Hello ${userName}`);

//2.8 task, fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
// prompt return string by default, as a result "+" operator will concatenate 2 string
alert(a + b); // 12
// should use type conversion to Number
alert(+a + +b);
