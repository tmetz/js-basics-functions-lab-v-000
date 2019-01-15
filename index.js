// Code your solution in this file!
function distanceFromHqInBlocks(curBlock) {
  return Math.abs(curBlock - 42);
}

function distanceFromHqInFeet (block) {
  return distanceFromHqInBlocks(block) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (startBlock, endBlock) {
  // block is 264 ft
  let distTravBlock = Math.abs(endBlock - startBlock);
  return distTravBlock * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
  let numFeet = distanceTravelledInFeet(startBlock, endBlock);
  if (numFeet < 400) {
    return 0;
  }
  else if (numFeet < 2000 && numFeet >= 400) {
    return (numFeet - 400) * 0.02;
  }
  else if (numFeet >= 2000 && numFeet <= 2500) {
    return 25;
  }
  else {
    return "cannot travel that far"
  }
}
