// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
console.log(ucFirst("hello"));

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));

function checkSpam(str) {
    return (
        str.toLowerCase().includes("viagra") ||
        str.toUpperCase().includes("XXX")
    );
}

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;
    return str.slice(0, maxlength - 1) + "...";
}

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

let cost = extractCurrencyValue("$100");

console.log(cost);
console.log(typeof cost);

function extractCurrencyValue(str) {
    return Number(str.slice(1));
}
