var area = "circle";
var l = 5, b = 10, h = 6, r = 4;
var pi = 3.14;


if(area == "triangle") {
    console.log(`The area of ${area} is ${(1/2)*b*h}`);
}
else if(area == "rectangle"){
    console.log(`The area of ${area} is ${l*b}`);
}
else if(area == "circle") {
    console.log(`The area of ${area} is ${pi*r*r}`);
}
else{
    console.log("Please enter valid solid name");
}