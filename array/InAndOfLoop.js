var friends = ["anushil","anees","apeal","bipin","kiran","nishan"]

for (i=0; i<=friends.length-1;i++) {
    console.log(friends[i])
}


for (let x in friends) {

    // console.log(friends[x])
    
    // console.log(x)
    // It gives numbers 0 1 2 3 4 5
    
    console.log(`${x} ${friends[x]}`)
}


for (let y of friends) {

    console.log(y)
    // It gives name lists of friends
    
    console.log(friends.indexOf(y))
}