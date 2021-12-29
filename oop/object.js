// first Way to create Object

// var bioData = {
//     myName : "bibek",
//     myAge : 25,
//     myCollege : All = {
//         prevCollege : "Hsm",
//         nextCollege : "Ncit"
//     },
//     showData : ()=> {
//         console.log( `Name : ${bioData.myName} \n Age : ${bioData.myAge} \n colleges : ${bioData.myCollege["prevCollege"]} and ${bioData.myCollege["nextCollege"]}`)
//     }
// }

// bioData.showData()


// NO need to write function in es6

var bioData = {
    myName : "bibek",
    myAge : 25,
    myCollege :  {
        prevCollege : "Hsm",
        nextCollege : "Ncit"
    },
    showData() {
        console.log( `Name : ${bioData.myName} \n Age : ${bioData.myAge} \n colleges : ${bioData.myCollege["prevCollege"]} and ${bioData.myCollege["nextCollege"]}`)
    }
}

bioData.showData()

