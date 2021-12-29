// ways to get the date

var nowDate = new Date();

console.log(nowDate.toLocaleString())
console.log(nowDate.getTime())
console.log(nowDate.getFullYear())
console.log(nowDate.getMonth())  //As we know it starts from 0 to 11
console.log(nowDate.getDate())
console.log(nowDate.getDay())  //It also starts and end as 0-6 as month
console.log(nowDate.getHours())
console.log(nowDate.getMinutes())
console.log(nowDate.getSeconds())
console.log(nowDate.getMilliseconds())


// To set the date that we want to get

var setDate = new Date();

console.log(setDate.setFullYear(2022))
console.log(setDate.setMonth(10))
console.log(setDate.setDate(22))
console.log(setDate.setHours(5))
console.log(setDate.setMinutes(30))
console.log(setDate.setSeconds(00))
console.log(setDate.toLocaleString())