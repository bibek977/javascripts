let array = [3,7,67,12,43,95]

let newArray = array.map((ele) => ele < 20);

console.log(array)
console.log(newArray)

let showArray = array.map((elem,index,array)=>{
    return `${elem} is in ${index} index of array ${array} `    
})

// }).reduce().sort()
// In map() method we can attached reduce() sort() filter()

console.log(showArray)
