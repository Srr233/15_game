import { checkGoToGoal } from "../checkGoToGoal.js";
import { getDataForCheckCurrentWaySides } from "./getDataForCheckCurrentWaySides.js";

function checkForSidesWalkLeftRight(way, chosenPos) {
  const {
    leftOfSpaceWalk,
    rightOfSpaceWalk,
  } = getDataForCheckCurrentWaySides(way, chosenPos);
  if (checkGoToGoal(leftOfSpaceWalk)) return true;
  if (checkGoToGoal(rightOfSpaceWalk)) return true;
}

export { checkForSidesWalkLeftRight };