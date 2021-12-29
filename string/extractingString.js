const college = "I studied +2 in HSM and bachelor in NCIT";

// slice(start,end)
// substring(start,end)
// substr(start,length)

const array = ["apple","ball","cat","dog","elephant"];

let slicingString1 = array.slice(0,2)
console.log(slicingString1)

let slicingString2 = college.slice(4,-12)
console.log(slicingString2)


// let slicingString3 = array.substring(0,2)
// It cant use substring in array

let slicingString4 = college.substring(4,-12)
console.log(slicingString4)
// -12 negative doesnt work on substring so it takes as from 0 to 4

// let slicingString5 = array.substr(0,2)
// Same goes as substring

let slicingString6 = college.substr(4,-12)
console.log(slicingString6)

// To show from last backward upto 12 index length
let slicingString7 = college.substr(-12)
console.log(slicingString7)