console.log(4==6)

console.log("hello")

console.log(5%3)


let x= 5
console.log(x)
// output is 5
console.log(x--)
// postfix
// output is 5 then after only it changes value
console.log(x)
// the value is changes already  so output is 4 
console.log(--x)
// prefix
// the value is changes first so output is 3 
console.log(x)
// the value is changes already so output is 3 

let y=10
let z=y++ +5
// works as (y + 5== 10 +5)
// then y increases sepeately

let newZ=y +5
// works as (y+1  + 5 ==  11 +5)

let newY=y++
// it consist the value  y == 11 
// then after only it increases
 
console.log(y)
// output is 12
console.log(y)
// output is 12
console.log(newY)
// output is 11
console.log(newY)
// output is 11

console.log(z)
// output is 15
console.log(z)
// output is 15

console.log(newZ)
// output is 16

console.log(newZ)
// output is 16
