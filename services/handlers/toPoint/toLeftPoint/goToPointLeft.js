import { isSpaceSame } from '../checkingSpace.js';
import { getMoreCorrectWays } from '../getMoreCorrectWays.js';

function spaceAnother(chosenPos, way) {
  const options = {
    direction: 'left down', whereIsSpace: 'another',
    isEnoughSpaces: chosenPos[1] - 2 >= 0, chosenPos
  };
  if (isSpaceSame(chosenPos, way) === 'up') {
    options.direction = 'left up';
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
}


function sameSpace(chosenPos, way) {
  const options = {
    direction: 'left down', whereIsSpace: 'same',
    isEnoughSpaces: chosenPos[1] - 2 >= 0, chosenPos
  };
  if (isSpaceSame(chosenPos, way) === 'up') {
    options.direction = 'left up';
    return getMoreCorrectWays(options);
  }
  return getMoreCorrectWays(options);
  
}


function goToPointLeft(chosenPos, way) {
  if (chosenPos[1] === way.spacePos[1]) return sameSpace(chosenPos, way);
  return spaceAnother(chosenPos, way);
}

export { goToPointLeft };