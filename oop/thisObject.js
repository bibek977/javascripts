// this .  shows the current contex

// 1st example 
console.log(this)


// 2nd example
const currPath = ()=>{
    console.log(this)
}
currPath()


// 3rd example
var myName = "Bibek Bhattarai"
function getName(){
    console.log(myName);
    console.log(this.myName); //this is inside and myName is outside the object
}
getName()


// 4th example
const orange = {
    shape : "sphere",
    getOrange() {
        console.log(this);
        console.log(this.shape)
    }
}
orange.getOrange()

// 5th example
//we can not use {this} method in fat arrow function
const obj = {
    age : 25,
    getAge : ()=>{
        console.log(this);
        console.log(this.age);
    }
}
obj.getAge()

// ex-6
var bioData = {
    myName : "bibek",
    myAge : 25,
    myCollege :  {
        prevCollege : "Hsm",
        nextCollege : "Ncit"
    },
    showData() {
        console.log(`${this.myName} \n ${this.myAge} \n ${this.myCollege.nextCollege} and ${this.myCollege.prevCollege}`)
        //         console.log( `Name : ${bioData.myName} \n Age : ${bioData.myAge} \n colleges : ${bioData.myCollege["prevCollege"]} and ${bioData.myCollege["nextCollege"]}`)

    }
}

bioData.showData()