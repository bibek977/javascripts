// var is function scope
// let and const are block scope and they can't be used in following program

function bibek() {
    var college = "Ncit";
    console.log(college);

    if (true) {
        var university = "Pokhara University";
        console.log(university);
        console.log(college);
    }

    // University is out of if {...} so it can't use in let and const
    console.log(university); 
    console.log(college);
}

bibek();


// function bibek() {
//     const college = "Ncit";
//     console.log(college);

//     if (true) {
//         const university = "Pokhara University";
//         console.log(university);
//         console.log(college);
//     }

//     // University is out of if {...} so it can't use in let and const
//     console.log(university); 
//     console.log(college);
// }

// bibek();