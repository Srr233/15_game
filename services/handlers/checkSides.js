import EMPTY_POS from '../constants/emptyCardNum.js';
import { getCurrentPos } from './checkMove.js';

function getDifferenceIsMore1(n1, n2) {
  function toPositiveNumber(n) {
    if (n < 0) return Math.abs(n);
    return n;
  }
  return toPositiveNumber(n1 - n2) > 1
}
function checkSides(chosenPos, direction, arr) {
  const [directionArr, directionIndex] = getCurrentPos(direction, arr);
  const [chosenArr, chosenIndex] = chosenPos;
  const differenceIsMore1 = getDifferenceIsMore1(chosenIndex, directionIndex);
  if (differenceIsMore1) return [];
  if (chosenArr !== directionArr) return [];
  if (chosenIndex > directionIndex) return [chosenArr, chosenIndex - 1];
  return [chosenArr, chosenIndex + 1];
}
function checkUpSides(chosenPos, direction, arr) {
  const [directionArr, directionIndex] = getCurrentPos(direction, arr);
  const [chosenArr, chosenIndex] = chosenPos;
  const differenceIsMore1 = getDifferenceIsMore1(chosenArr, directionArr);
  if (differenceIsMore1) return [];
  if (chosenIndex !== directionIndex) return [];
  if (chosenArr > directionArr) return [chosenArr - 1, chosenIndex];
  return [chosenArr + 1, chosenIndex];
}
function checkAngles (chosenPos, direction, arr) {
  const [directionArr, directionIndex] = getCurrentPos(direction, arr);
  const [chosenArr, chosenIndex] = chosenPos;
  const differenceArrIsMore1 = getDifferenceIsMore1(chosenIndex, directionIndex);
  const differenceIndexIsMore1 = getDifferenceIsMore1(chosenArr, directionArr);
  if (differenceArrIsMore1 || differenceIndexIsMore1) return [];
  if (chosenArr > directionArr) return [chosenArr - 1, directionIndex];
  return [chosenArr + 1, directionIndex];
}
function searchCardAroundGivenPos (chosenPos, direction, arr) {
  const sides = checkSides(chosenPos, direction, arr);
  const upSides = checkUpSides(chosenPos, direction, arr);
  const angles = checkAngles(chosenPos, direction, arr);

  return sides.length > 0 ? sides
    : upSides.length > 0 ? upSides
      : angles.length > 0 ? angles
        : [];
}



function checkTransferToCard (chosenPos, direction, arr) {
  let foundDirection;
  let foundSpace;
  if (direction === EMPTY_POS) {
    foundSpace = searchCardAroundGivenPos(chosenPos, direction, arr);
    return [foundSpace];
  }
  foundDirection = searchCardAroundGivenPos(chosenPos, direction, arr);
  foundSpace = searchCardAroundGivenPos(chosenPos, EMPTY_POS, arr);
  return [foundSpace, foundDirection];
}

export { checkSides, checkUpSides, checkTransferToCard, searchCardAroundGivenPos};