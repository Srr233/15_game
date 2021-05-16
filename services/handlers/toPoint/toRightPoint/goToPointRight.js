import { moreWays } from '../moreWays.js';

function isSpaceSame(chosenPos, way) {
  if (chosenPos[0] > way.spacePos[0]) {
    return 'up';
  }
  return 'down';
}

function spaceAnother(chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 12, 16]
  */
  let isEnoughSpaces = () => chosenPos[1] + 2 <= 3;

  if (isSpaceSame(chosenPos, way) === 'up') {
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right up', 'another');
    }
    return moreWays(chosenPos, 'right up', 'another', false);
  }

  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'right down', 'another');
  }
  return moreWays(chosenPos, 'right down', 'another', false);
}


function sameSpace(chosenPos, way) {
  /* do we have spaces for?
  [3, 8, 7]
  [9, 12, 16]
  */
  let isEnoughSpaces = () => chosenPos[1] + 2 <= 3;

  if (isSpaceSame(chosenPos, way) === 'up') {
    if (isEnoughSpaces()) {
      return moreWays(chosenPos, 'right up', 'same');
    }
    return moreWays(chosenPos, 'right up', 'same', false);
  }
  if (isEnoughSpaces()) {
    return moreWays(chosenPos, 'right down', 'same');
  }
  return moreWays(chosenPos, 'right down', 'same', false);
}


function goToPointRight(chosenPos, way) {
  let ways;
  /* space up or down 
  [1, 16, 2] [1, 4, 2]
  [3, 4, 7] [3, 16, 7]
  */
  if (chosenPos[1] === way.spacePos[1]) {
    return sameSpace(chosenPos, way);
  }
  return spaceAnother(chosenPos, way);
}

export { goToPointRight };