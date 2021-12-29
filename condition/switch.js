var area = "circle";
var l = 5, b = 10, h = 6, r = 4;
var pi = 3.14;

switch(area) {
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