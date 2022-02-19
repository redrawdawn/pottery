//Purchasing clay
const buyClay = () => {
   return {} 
}
//Throw a bowl
const makePottery = (clay) => {
    clay.shape = 'Bowl'
    return clay
}
//Bisque firing
const bisqueFire = (shapedClay) => {
    shapedClay.readyForGlazing = true 
    return shapedClay
}
//Glaze the bowl
const glazePottery = (readyForGlazing) => {
    if (readyForGlazing) readyForGlazing.glazing = 'Midnight Blue'
    else console.log("Make sure you bisque fire the pottery before you glaze it.")
    return readyForGlazing
}
//Fire the bowl
const finalFiring = (glazedBowl, temp) => {
   if (temp >= 1200) glazedBowl.cracked = true
   else glazedBowl.cracked = false
   return glazedBowl
}

var clay = buyClay();
var pottery = makePottery(clay);
var bisqueFiredPottery = bisqueFire(pottery);
var glazedBowl = glazePottery(bisqueFiredPottery);
var firedBowl = finalFiring(glazedBowl, 2000);
console.log(firedBowl);



