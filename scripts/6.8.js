// Output every second
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
// Make two variants of the solution.
// Using setInterval.
// Using nested setTimeout.
// solution

printNumbers(3, 9);

// solution using setInterval
// function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(() => {
//         console.log(current);
//         current++;
//         if (current > to) clearInterval(timerId);
//     }, 1000);
// }

// solution using setTimeout
// function printNumbers(from, to) {
//     let current = from;

//     setTimeout(function tick() {
//         console.log(current);
//         current++;
//         if (current <= to) setTimeout(tick, 1000);
//     }, 1000);
// }

// solution without delay on first call
function printNumbers(from, to) {
    let current = from;

    function tick() {
        console.log(current);
        current++;
        if (current <= to) setTimeout(tick, 1000);
    }

    tick();
}
