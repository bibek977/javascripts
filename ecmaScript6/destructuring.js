// array destructuring
const bioData = ["Bibek","Bhattarai",25];

// let fname = bioData[0];
// let lname = bioData[1];
// let age = bioData[2];

// let [fname,lname] = bioData;
// let [fname,lname,age] = bioData;
let [fname,lname,age,college="Ncit"] = bioData; //to add values

console.log(lname)
console.log(college)


// Object Destructing
const program = {
    backend : "Django",
    frontend : "Javascript",
    languagePrefor : "Python"
}

let programLang = program.languagePrefor;
console.log(programLang)

// to add data
let {backend,frontend,languagePrefor,anotherLang="css"} = program;
console.log(anotherLang)
console.log(frontend)