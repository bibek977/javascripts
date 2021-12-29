var area = ["circle","triangle","square"];
var l = 5, b = 10, h = 6, r = 4;
var pi = 3.14;

var i = 0;
while (i <= area.length-1) {
    var areaName = area[i];
    switch(areaName) {
        case "triangle":
            console.log("The area of triangle is" + (1/2)*b*h);
        break;
    
        case "square":
            console.log("The area of square is " + (l*l));
        break;
    
        case "circle":
            console.log("The area of circle is " + (pi*r*r));
        break;
    
        default:
            console.log("Enter The valid name of solid");
    }
    i++;
}
