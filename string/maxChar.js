let myTweet = "Lionel Andres Messi[note 1] (Spanish pronunciation  (About this soundlisten) born 24 June 1987) also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards,[note 2] a record six European Golden Shoes, and in 2020 was named to the Ballon dOr Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 35 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.  "

// console.log(myTweet)

// from 100 index to 300 index == 200 length
const newTweet1= myTweet.slice(100,300)
console.log(newTweet1)
console.log(newTweet1.length)

// from 100 index to 300 index == 200 length
const newTweet2= myTweet.substring(100,300)
console.log(newTweet2)
console.log(newTweet2.length)

// from 100 index to after length of 300 length of index ==300 length
const newTweet3= myTweet.substr(100,300)
console.log(newTweet3)
console.log(newTweet3.length)