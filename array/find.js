// currVal = elem = element

const numbers = [34,56,78,99,345,653];

const num = numbers.find((currVal) => {
    return currVal > 78;
})

console.log(num);
// it checks from all first bigger from its postion

console.log(numbers.find((element) => element <78));
// It checks from all first smaller postion

// To find index number of smallest i.e. 34 number's index
console.log(numbers.findIndex((elem) => elem >78));