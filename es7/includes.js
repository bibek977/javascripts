let color = ["red", "green","blue"];

let colors = ["red","green","blue","white","black","yellow"];
let allColors = [...color,"white","black","yellow"]

console.log(allColors.includes("red"))

// console.log(allColors.includes(color)) //need to remember : this gives false
console.log(allColors.includes(color[2]))

console.log(colors.includes(color[2]))