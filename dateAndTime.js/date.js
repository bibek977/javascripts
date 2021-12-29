// Orgin Data time taken from since 1970 january 1 00:00:00 UTC

// Date takes 7 arguements 
// and 4 ways Create it

// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// new Date()

// new Date(milliseconds)

// new Date(dateString)

console.log(Date())

// the universal time format
let timeNow = new Date();
console.log(timeNow)

// To local time format
console.log(new Date().toLocaleString())

// same as the Date() nepal standard format
console.log(new Date().toString())

// total days from origin to till now in milliseconds
console.log(Date.now())