// Working with Javascript Date Object

let d;

let date = new Date();

d = date.toString(); // convert the date to a string

d = Date.now(); //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

d = date.valueOf(); // current timestamp

d = date.getFullYear(); //Gets the year, using local time.

d = date.getDate(); //Gets the day-of-the-month, using local time.

d = date.getDay(); //Gets the day of the week, using local time.
d = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // 2024-3-9
// console.log(d, date, typeof date);
console.log(d);

d = new Intl.DateTimeFormat("en-NG");

d = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Africa/Lagos",
});

// JS intl date time format api
