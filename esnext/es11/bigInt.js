// we can only do opearation upto this integer 9007199254740991
let oldnum = Number.MAX_SAFE_INTEGER;
console.log(oldnum)

// we can't perform this operation
console.log(oldnum + 1) //It may gives ans but not always right
console.log(oldnum + 9)
console.log(9007199254740991 + 14)

// to do such operation we use bigInt
console.log(9007199254740991n + 17n)

const newNum = 9007199254740991n;  //the semicolon ; is required

console.log(newNum + 45n)

console.log(typeof oldnum)
console.log(typeof newNum)