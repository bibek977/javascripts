var friends = ["anushil","anish","apeal","bipin","kiran","nishan"];

// const newfriends = friends.splice(friends.length-1,0,"sujan","radheshyam","bijaya")

const newfriends = friends.splice(3,Infinity,"sujan","radheshyam","bijaya")
// splice(from where to start ,  delete count , adding elements)

console.log(friends)

console.log(newfriends)
// it gives the deleted names



// to delete anish and update anees

const num = friends.indexOf("anish");

if (num != -1) {
    console.log(friends.splice(num,1,"anees"))
}else{
    console.log("doesn't Match")
}

console.log(friends)