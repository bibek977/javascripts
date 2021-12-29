// there is 1 defect in this function i.e. 
//we can not use {this} method in fat arrow function

const myName = () => {
    let fname = "Bibek"
    let lname = "Bhattarai"
    return fname + " " + lname
}

console.log(myName())


const sum = () => {
    
    return (a=5)+(b=7)
}

console.log(sum())

// for 1 line of code no need to write return

const mul = () => (a=5)*(b=7)

console.log(mul())