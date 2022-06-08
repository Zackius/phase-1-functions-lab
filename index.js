// Code your solution in this file!
 function distanceFromHqInBlocks(distance){
return Math.abs (distance-42)
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264

}
function distanceTravelledInFeet(start, destination){
 return Math.abs(destination - start) * 264

}


function calculatesFarePrice (start, destination){
  let actualDistance = Math.abs(destination - start) * 264
  if(actualDistance <= 400){
return 0
  } else if(actualDistance > 400  &&  actualDistance <= 2000){

  return (actualDistance  -  400) * 0.02

} else if (actualDistance > 2000 && actualDistance <= 2500){
  return 25
}else{
  return "cannot travel that far"
}
}