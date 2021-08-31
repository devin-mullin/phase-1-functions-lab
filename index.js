const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup){
    if(pickup > hq){
        return pickup - hq
    } else if (pickup < hq){
        return hq - pickup
    }
}

function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * feet
}

function distanceTravelledInFeet(pickup, drop){
    if(pickup > drop){
        return (pickup - drop) * feet
    } else {
        return (drop - pickup) * feet
    }
}

function calculatesFarePrice(pickup, drop){
let calculateFt = distanceTravelledInFeet(pickup, drop)
    if (calculateFt < 400){
        return calculatesFarePrice = 0
    } else if (calculateFt > 400 && calculateFt < 2000){
        return (calculateFt - 400) * 0.02
    } else if (calculateFt > 1999 && calculateFt < 2499){
        return (25)
    } else if (calculateFt > 2500){
        return "cannot travel that far"
    } 
}