var areaData = ["circle","triangle","rectangle","square"];
var l = 5, b = 10, h = 6, r = 4;
var pi = 3.14;

for(i=0;i<=areaData.length-1;i++) {
    area=areaData[i]
    if(area == "triangle") {
        console.log(`The area of ${area} is ${(1/2)*b*h}`);
    }
    else if(area == "rectangle"){
        console.log(`The area of ${area} is ${l*b}`);
    }
    else if(area == "square"){
        console.log(`The area of ${area} is ${l*l}`);
    }
    else if(area == "circle") {
        console.log(`The area of ${area} is ${pi*r*r}`);
    }
    else{
        console.log("Please enter valid solid name");
    }
}