var friends = ["anushil","anees","apeal","bipin","kiran","nishan"];

friends.forEach(function(element,index,array) {

    // console.log(element);

    // console.log(index);

    // console.log(array);

    console.log(element + " index : " + index );
    
    // console.log(element + " index : " + index + array);
});

// Fat arrow function

friends.forEach((element,index,array) => {
    console.log(element + " index : " + index );
});