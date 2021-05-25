import { checkGoToGoal } from "../checkGoToGoal.js"
import { getDataForCheckCurrentWayToSpaceXY } from './getDataForCheckCurrentWayToSpaceXY.js';

function checkGoToSpaceXY(way, chosenPos) {
  const {
    leftToRight,
    rightToLeft,
    upToBottom,
    bottomToUp
  } = getDataForCheckCurrentWayToSpaceXY(way, chosenPos);
  if (checkGoToGoal(leftToRight)) return true;
  if (checkGoToGoal(rightToLeft)) return true;
  if (checkGoToGoal(upToBottom)) return true;
  if (checkGoToGoal(bottomToUp)) return true;
}

export { checkGoToSpaceXY };