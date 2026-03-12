// Create a date - task 1
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using alert.

console.log(new Date(2012, 1, 20, 3, 12));
console.log(new Date(Date.parse("2012-2-20 3:12")));

// Show a weekday - task 2
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
    const shortWeekDay = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return shortWeekDay[date.getDay()];
}

let date = new Date(2015, 0, 2);
console.log(getWeekDay(date));

// European weekday - task 3
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2)
// and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date) {
    let europeanWeekDay = date.getDay();
    if (europeanWeekDay == 0) europeanWeekDay = 7;
    return europeanWeekDay;
}

console.log(getLocalDay(date));

// Which day of month was many days ago? - task 4
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
// Should work reliably for days=365 or more:

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);
    return dateCopy.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));

// Last day of month? - task 5
// Write a function getLastDayOfMonth(year, month) that returns the last day of month.
// Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// How many seconds have passed today? - task 6
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

console.log(getSecondsToday());

// How many seconds till tomorrow? - task 7
// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
    const secondsInDay = 86400;
    let now = new Date();
    return (
        secondsInDay -
        (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds())
    );
}

console.log(getSecondsToTomorrow());

// Format the relative date - task 8
// Write a function formatDate(date) that should format date as follows:
// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes",
// all in 2-digit format, e.g. 31.12.16 10:00.

function formatDate(date) {
    let diff = Math.round((new Date() - date) / 1000);
    let formatDate = [
        "0" + date.getDate(),
        "0" + (date.getMonth() + 1),
        date.getFullYear().toString(),
        "0" + date.getHours(),
        "0" + date.getMinutes(),
    ].map((item) => item.slice(-2));

    if (diff < 1) {
        return "right now";
    } else if (diff < 60) {
        return `${diff} sec. ago`;
    } else if (diff < 3600) {
        return `${Math.round(diff / 60)} min. ago`;
    } else {
        return (
            formatDate.slice(0, 3).join(".") +
            " " +
            formatDate.slice(3).join(":")
        );
    }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
