import { checkForCorrectDistanceFromSpace } from "./checkForCorrectDistanceFromSpace/checkForCorrectDistanceFromSpace.js";
import { checkForSidesWalkLeftRight } from "./checkForSidesWalkLeftRight/checkForSidesWalkLeftRight.js";
import { checkForSideWalkUpBottom } from "./checkForSideWalkUpBottom/checkForSideWalkUpBottom.js";
import { checkFromAnglesToSpace } from "./checkFromAnglesToSpace/checkFromAnglesToSpace.js";
import { checkGoToSpaceXY } from "./checkGoToSpaceXY/checkGoToSpaceXY.js";

function isCorrectWay(way, chosenPos) {
  if (!way.spacePos.length) return false;
  if (checkFromAnglesToSpace(way, chosenPos)) return true;
  if (!checkForCorrectDistanceFromSpace(way)) return false;
  if (checkForSideWalkUpBottom(way, chosenPos)) return true;
  if (checkForSidesWalkLeftRight(way, chosenPos)) return true;
  if (checkGoToSpaceXY(way, chosenPos)) return true;
  return true;
}

export { isCorrectWay };