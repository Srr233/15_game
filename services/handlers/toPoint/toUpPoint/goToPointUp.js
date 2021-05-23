import { moreWays } from '../moreWays.js';

function isSpaceLeft (chosenPos, way) {
  if (chosenPos[1] > way.spacePos[1]) {
    return 'left';
  }
  return 'right';
}

function spaceUp (chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 12, 16]
  */
  let isEnoughSpaces;

  if (isSpaceLeft(chosenPos, way) === 'right') {
    isEnoughSpaces = () => chosenPos[1] + 2 <= 3;
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right up', 'up');
    }
    return moreWays(chosenPos, 'right up', 'up', false);
  }

  isEnoughSpaces = () => chosenPos[1] - 2 >= 0;
  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'left up', 'up');
  }
  return moreWays(chosenPos, 'left up', 'up', false);
}
function spaceDown (chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 12, 16]
  */
  let isEnoughSpaces;

  if (isSpaceLeft(chosenPos, way) === 'right') {
    isEnoughSpaces = () => chosenPos[1] + 2 <= 3;
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right up', 'down');
    }
    return moreWays(chosenPos, 'right up', 'down', false);
  }

  isEnoughSpaces = () => chosenPos[1] - 2 >= 0;
  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'left up', 'down');
  }
  return moreWays(chosenPos, 'left up', 'down', false);
}

function goToPointUp(chosenPos, way) {
  let ways;
  /* space up or down 
  [1, 16, 2] [1, 4, 2]
  [3, 4, 7] [3, 16, 7]
  */
  if (chosenPos[0] === way.spacePos[0]) {
    return spaceDown(chosenPos, way);
  }
  return spaceUp(chosenPos, way);
}

export { goToPointUp };