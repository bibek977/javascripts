let num=[3,6,2,8]

let sum = num.reduce((accumulator,currentElement,currentIndex,array)=> {
    return accumulator *= currentElement;
});

console.log(sum)


// to add another sigle number 4 to multiply at num array

let num2=[3,6,2,8]

let sum2 = num2.reduce((accumulator,currentElement,currentIndex,array)=> {
    return accumulator *= currentElement;
},4);

console.log(sum2)