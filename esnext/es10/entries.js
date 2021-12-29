const clothes = {
    jeans : "Gucci",
    shirt : "Armani",
    shoes : "Nike"
}

console.log(clothes)

// converts into array
const newClothes = Object.entries(clothes)
console.log(newClothes)

// to convert array form to object form
const changeClothes = Object.fromEntries(newClothes)
console.log(changeClothes)