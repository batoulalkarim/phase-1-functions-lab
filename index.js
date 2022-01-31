function distanceFromHqInBlocks(pickUp){
    const hq = 42;
   return Math.abs(pickUp - hq);
}
function distanceFromHqInFeet(pickUp){
    const hq = 42;
    return Math.abs(pickUp - hq) * 264;
}
function distanceTravelledInFeet(start, destination){
    const block = 264;
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination){
    if(Math.abs(destination - start) * 264 < 400){
        return 0
    }else if (Math.abs(destination - start)* 264 > 2500){
        return "cannot travel that far"
    } else if(Math.abs(destination - start)* 264 >= 2000){
        return 25 
    } else if(Math.abs(destination- start) * 264 < 2000) {
        return (Math.abs((destination - start)* 264)- 400) * .02
    } 
}