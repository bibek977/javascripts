let list = [
    ["name-1", "sname-2"],
    ["name-2", "sname-2", "sname-3"],
    ["name-3", ["sname-3"]]
]

let listed = list.reduce((acc,ele)=>{
    return acc.concat(ele);
});

console.log(listed)