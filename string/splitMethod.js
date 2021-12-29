var greet1 = "H,e,l,l,o"

var lowGreet = greet1.toLowerCase()
console.log(lowGreet)

var split1 = lowGreet.split(",");
console.log(split1)

let greet2 = "G o o d M o r n i n g";

let split2 = greet2.split(" ")
console.log(split2)

// It seperates from | so 2 oO comes as 1 element
const greet3 = "W|E|l|c|oO|m|e"

const split3 = greet3.split("|")
console.log(split3)

let greet4 = "GkokokdkMkokrknkiknkg";

let split4 = greet4.split("k")
console.log(split4)

// If double spacing char option is identified then it gives one blank element in array
// if 2 comes 2 and 3 comes 3
let greet5 = "G o o d M  o r n i   n g";

let split5 = greet5.split(" ")
console.log(split5)