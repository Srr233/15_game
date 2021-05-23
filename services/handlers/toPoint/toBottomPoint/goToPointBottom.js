import { moreWays } from '../moreWays.js';

function isSpaceLeft(chosenPos, way) {
  if (chosenPos[1] > way.spacePos[1]) {
    return 'left';
  }
  return 'right';
}

function spaceUp(chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 12, 16]
  */
  let isEnoughSpaces;

  if (isSpaceLeft(chosenPos, way) === 'right') {
    isEnoughSpaces = () => chosenPos[1] + 2 <= 3;
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right bottom', 'up');
    }
    return moreWays(chosenPos, 'right bottom', 'up', false);
  }

  isEnoughSpaces = () => chosenPos[1] - 2 >= 0;
  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'left bottom', 'up');
  }
  return moreWays(chosenPos, 'left bottom', 'up', false);
}
function spaceDown(chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 16, 12]
  */
  let isEnoughSpaces;

  if (isSpaceLeft(chosenPos, way) === 'right') {
    isEnoughSpaces = () => chosenPos[1] + 2 <= 3;
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right bottom', 'down');
    }
    return moreWays(chosenPos, 'right bottom', 'down', false);
  }

  isEnoughSpaces = () => chosenPos[1] - 2 >= 0;
  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'left bottom', 'down');
  }
  return moreWays(chosenPos, 'left bottom', 'down', false);
}

function goToPointBottom(chosenPos, way) {
  let ways;
  /* space up or down 
  [1, 16, 2] [1, 4, 2]
  [3, 4, 7] [3, 16, 7]
  */
  if (chosenPos[0] === way.spacePos[0]) {
    return spaceUp(chosenPos, way);
  }
  return spaceDown(chosenPos, way);
}

export { goToPointBottom };