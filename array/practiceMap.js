let arr = [25, 36, 43, 65,81];

// Square root of each element of the array

let newArr = arr.map((ele)=> {
    // return ele**(1/2);
    return Math.sqrt(ele)
});

console.log(newArr)

// multiply each element by 2 and return only those elements which are greater than 100 
// Then add them to get sum

let anotherArr = arr.map((ele)=> {
    return ele*2;
}).filter((ele)=> {
    return ele>100;
}).reduce((acc,ele)=>acc+=ele);
console.log(anotherArr)