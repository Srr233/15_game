import { moreWays } from '../moreWays.js';

function goToPointBottom(chosenPos, way) {
  let ways;
  switch (chosenPos[0]) {
    case 0:
      switch (chosenPos[1]) {
        case 0:
          ways = rotateRightBottomWays(chosenPos);
          if (way.spacePos[0] === 1) {
            ways.push(...moreWays(chosenPos, 'right bottom', 'down'));
          } else {
            ways.push(...moreWays(chosenPos, 'right bottom', 'up'));
          }
          break;
        case 3:
          ways = rotateLeftBottomWays(chosenPos);
          if (way.spacePos[0] === 1) {
            ways.push(...moreWays(chosenPos, 'left bottom', 'down'));
          } else {
            ways.push(...moreWays(chosenPos, 'left bottom', 'up'));
          }
          break;
        default:
          if (chosenPos[1] > way.spacePos[1]) {
            ways = rotateLeftBottomWays(chosenPos);
            if (way.spacePos[0] === 1) {
              ways.push(...moreWays(chosenPos, 'left bottom', 'down'));
            } else {
              ways.push(...moreWays(chosenPos, 'left bottom', 'up'));
            }
          } else {
            ways = rotateRightBottomWays(chosenPos);
            if (way.spacePos[0] === 1) {
              ways.push(...moreWays(chosenPos, 'right bottom', 'down'));
            } else {
              ways.push(...moreWays(chosenPos, 'right bottom', 'up'));
            }
          }
      }
    case 3:
    default:
  }
  return ways;
}

export { goToPointBottom };