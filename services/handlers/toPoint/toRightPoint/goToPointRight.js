import { getMoreCorrectWays } from '../getMoreCorrectWays.js';
import { moreWays } from '../moreWays.js';

function isSpaceSame(chosenPos, way) {
  if (chosenPos[0] > way.spacePos[0]) {
    return 'up';
  }
  return 'down';
}

function spaceAnother(chosenPos, way) {
  const options = {
    direction: 'right down', whereIsSpace: 'another',
    isEnoughSpaces: chosenPos[1] + 2 <= 3, chosenPos
  };
  if (isSpaceSame(chosenPos, way) === 'up') {
    options.direction = 'right up';
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
}


function sameSpace(chosenPos, way) {
  const options = {
    direction: 'right down', whereIsSpace: 'same',
    isEnoughSpaces: chosenPos[1] + 2 <= 3, chosenPos
  };
  if (isSpaceSame(chosenPos, way) === 'up') {
    options.direction = 'right up';
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
}


function goToPointRight(chosenPos, way) {
  if (chosenPos[1] === way.spacePos[1]) return sameSpace(chosenPos, way);
  return spaceAnother(chosenPos, way);
}

export { goToPointRight };