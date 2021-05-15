import { ifPointUpBottomArr } from "./ifPoint/ifPointUpBottomArr.js";
import { moreWays } from '../moreWays.js';

function goToPointUp(chosenPos, way) {
  let ways;
  switch (chosenPos[0]) {
    case 3:
      ways = ifPointUpBottomArr(chosenPos, way);
      return ways;
    default:
      if (way.spacePos[0] < chosenPos[0] && chosenPos[1] > way.spacePos[1]) {
        if (way.spacePos[1] === 2) {
          ways = rotateLeftUpWays(chosenPos);
          if (way.spacePos[0] > 2) {
            ways.push(...moreWays(chosenPos, 'left down', 'down'));
          } else {
            ways.push(...moreWays(chosenPos, 'left up', 'up'));
          }
        } else {

        }
      } else {
        if (way.spacePos[1] === 2) {
          if (chosenPos[1] < way.spacePos[1]) {
            ways = rotateRightUpWays(chosenPos);
            if (way.spacePos[0] < chosenPos[0]) {
              ways.push(...moreWays(chosenPos, 'right up', 'up'));
            } else {
              ways.push(...moreWays(chosenPos, 'right up', 'down'));
            }
          } else {
            ways = rotateLeftUpWays(chosenPos);
            if (way.spacePos[0] < 2) {
              ways.push(...moreWays(chosenPos, 'left up', 'down'));
            } else {
              ways.push(...moreWays(chosenPos, 'left up', 'up'));
            }
          }
        }
      }
  }
  return ways;
}

export { goToPointUp };