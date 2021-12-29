let color = ["red", "green","blue"];

let colors = ["red","green","blue","white","black","yellow"];
let allColors = [...color,"white","black","yellow"]

console.log(colors)
console.log(allColors)

console.log(allColors==colors)


// need to remember
color.push("cyan")
console.log(color)
console.log(allColors) // this will not add cyan
