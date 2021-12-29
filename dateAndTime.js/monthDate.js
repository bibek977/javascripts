// In Js the 12 month are start from 0 to 11
// and Month is required

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
var checkDate1 = new Date(1996,08, 19, 14, 45, 0);
console.log(checkDate1.toLocaleString());

var checkDate2 = new Date(2021,01, 01);
console.log(checkDate2.toDateString())

// difference in milliosecond
console.log(checkDate2 - checkDate1)