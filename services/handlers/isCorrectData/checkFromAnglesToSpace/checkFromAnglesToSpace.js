import { checkGoToGoal } from "../checkGoToGoal.js"
import { getDataForCheckCurrentWayAngles } from "./getDataForCheckCurrentWayAngles.js";

function checkFromAnglesToSpace(way, chosenPos) {
  const {
    fromUpLeftToRightBottom,
    fromBottomLeftToRightUp,
    fromUpRightToLeftBottom,
    fromBottomRightToLeftUp
  } = getDataForCheckCurrentWayAngles(way, chosenPos);

  if (checkGoToGoal(fromUpLeftToRightBottom)) return true;
  if (checkGoToGoal(fromBottomRightToLeftUp)) return true;
  if (checkGoToGoal(fromBottomLeftToRightUp)) return true;
  if (checkGoToGoal(fromUpRightToLeftBottom)) return true;
}

export { checkFromAnglesToSpace };