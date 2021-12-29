// pi in math
console.log(Math.PI);

// round up the floating number
let x = 20/12;
console.log(x);
console.log(Math.round(x));
console.log(Math.round(4.2));
console.log(Math.round(-4.2)); //It gives the same value regarding own sign

// power function in math
console.log(4**4);
console.log(Math.pow(4,4));

// square root func in math
console.log(Math.sqrt(81));
console.log(Math.sqrt(816));
console.log(Math.round(Math.sqrt(816)));

// absolute value func in math i.e. convert negative into positive
console.log(Math.abs(-34));
console.log(Math.abs(-7/12));
console.log(Math.abs(3-8));

// ceil func round up to its largest value
console.log(Math.ceil(9.2))
console.log(Math.ceil(24.000000)) //It gives 24 
console.log(Math.ceil(24.51))
console.log(Math.ceil(24.0000001))

// for negative it gives oposite value
console.log(Math.ceil(-24.51))
console.log(Math.ceil(-24.0000001))

// floor as same which gives smallest value
console.log(Math.floor(3.8))
console.log(Math.floor(54.15))

// for negaive it also gives opposite value
console.log(Math.floor(-3.8))
console.log(Math.floor(-54.15))


// trunc method which gives the exact integer by cancelling the remaining decimals and returns the sign
console.log(Math.trunc(45.4328))
console.log(Math.trunc(-45.4328))
console.log(Math.trunc(-5.8328))
console.log(Math.trunc(5.8328))