let list = [
    ["name-1", "sname-2"],
    ["name-2", "sname-2"],
    ["name-3", "sname-3"],
    ["name-4", ["sname-4", "esname-4"]],
    ["name-4", ["sname-4", "esname-4","esname-4","esname-4"]]
]

// let listed = list.reduce((acc,ele)=>{
//     return acc.concat(ele);
// });

// console.log(listed)

console.log(list.flat())
console.log(list.flat(1))
console.log(list.flat(2))
console.log(list.flat(Infinity))