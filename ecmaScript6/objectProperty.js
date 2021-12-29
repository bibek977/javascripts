// how to get dynamic data of in an object
myName = "Bibek Bhattarai"
const profile = {
    [myName] : "is my name",

    // 25 : "is my age"
    [20+5] : "is my age"
}
console.log(profile)

// no need to write the key and value if both are same

var city1 = "lalitpur"
var city2 = "kathmandu"

const cityName = {
    // city1 : city1,
    // city2 : city2

    city1,
    city2
}
console.log(cityName)