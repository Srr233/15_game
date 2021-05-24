import { isSpaceLeft } from '../checkingSpace.js';
import { getMoreCorrectWays } from '../getMoreCorrectWays.js';

function spaceUp (chosenPos, way) {
  const options = { 
    direction: 'left up', whereIsSpace: 'up',
    isEnoughSpaces: chosenPos[1] - 2 >= 0, chosenPos
  };
  if (isSpaceLeft(chosenPos, way) === 'right') {
    options.direction = 'right up';
    options.isEnoughSpaces = chosenPos[1] + 2 <= 3;
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
}

function spaceDown (chosenPos, way) {
  const options = {
    direction: 'left up', whereIsSpace: 'down',
    isEnoughSpaces: chosenPos[1] - 2 >= 0, chosenPos
  };
  if (isSpaceLeft(chosenPos, way) === 'right') {
    options.direction = 'right up';
    options.isEnoughSpaces = chosenPos[1] + 2 <= 3;
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
}

function goToPointUp(chosenPos, way) {
  if (chosenPos[0] === way.spacePos[0]) return spaceDown(chosenPos, way);
  return spaceUp(chosenPos, way);
}

export { goToPointUp };