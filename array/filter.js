// currVal = elem = element

const numbers = [34,56,78,99,345,653];

const num = numbers.filter((elem,index) => {
    return elem >99
})

console.log(num)

console.log(numbers.filter((elem,index) => elem>99))

console.log(numbers.filter((elem,index) => elem<99))