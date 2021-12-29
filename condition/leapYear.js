var year = 2020


debugger
// It uses for testing in web browser

if (year%4==0 && year%400==0) {
    console.log("The year " + year + " is a leap year")
}
else{
    console.log("The year " + year + " is not a leap year")
}


if(year%4 == 0) {
    if(year%100 == 0) {
        if(year%400 == 0) {
            console.log(`${year} is a leap year`)
        }
        else{
            console.log(`${year} is not a leap year`)
        }
    }
    else{
        console.log(`${year} is not a leap year`)
    }
}
else{
    console.log(`${year} is not a leap year`)
}