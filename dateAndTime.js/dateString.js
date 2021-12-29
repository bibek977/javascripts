// DateString method 

var d = new Date("November 29,2021 12:00:00");
console.log(d)
console.log(d.toLocaleString())

// milliseconds method

// start date 1970/01/01 00:00:00
console.log(new Date(0));

// result in milliseconds
console.log(Date.now())

// convert given millisecond from start to how long it defined the date
console.log(new Date(1637600216218));
console.log(new Date(1637600216218).toLocaleString());
