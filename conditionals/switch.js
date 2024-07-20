const dateNow = new Date();

const month = dateNow.getMonth();

// day (getDay) index is from 1 - 30 but others is zero indexed

/*
new Date - Creates a new Date.

@param year — The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.

@param monthIndex — The month as a number between 0 and 11 (January to December).

@param date — The date as a number between 1 and 31.

@param hours — Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.

@param minutes — Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
*/

switch (month) {
  case 1:
    ``;
    console.log("Hello, March"); // this is from the time on my local machine
    break;

  default:
    console.log("Hello, Its not March");
    break;
}

// lets define a date
// const date = new Date(2022, 1, 20, 8, 0, 0);

const date = new Date();

console.log(date);

const day = date.getDay();

switch (day) {
  case 0:
    console.log("Its Monday");
    break;

  case 1:
    console.log("Its Tuesday");
    break;

  case 2:
    console.log("its wednesday");
    break;

  default:
    console.log("");
    break;
}
