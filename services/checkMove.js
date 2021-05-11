import { checkSides, checkUpSides, checkTransferToCard, searchCardAroundGivenPos } from './checkSides/checkSides.js';
import EMPTY_POS from './constants/emptyCardNum.js';

function getCurrentPos (chosenCard, arr) {
  const chosenPos = [];

  ih: for (let i = 0; i < arr.length; i++) {
    const checkIndex = arr[i].indexOf(chosenCard);
    if (checkIndex > -1) {
      chosenPos[0] = i;
      chosenPos[1] = checkIndex;
      break ih;
    }
  }
  return chosenPos;
}

function checkMove (chosenCard, direction, arr) {
  if (chosenCard > EMPTY_POS) throw new Error('A max num of cards is 16');

  const chosenPos = getCurrentPos(chosenCard, arr);
  
  const resultOfSides = checkSides(chosenPos, direction, arr);
  const resultOfUpSides = checkUpSides(chosenPos, direction, arr);
  const searchSpace = searchCardAroundGivenPos(chosenPos, EMPTY_POS, arr);

  if (resultOfUpSides.length > 0 && searchSpace) {
    return [[resultOfUpSides, searchSpace]];
  } else if (resultOfSides.length > 0 && searchSpace) {
    return [[resultOfSides, searchSpace]]
  }
  const checked = checkTransferToCard(chosenPos, direction, arr) || [];

  if (checked.length > 0) {
    return checked;
  }
  return [];
}

export { getCurrentPos, checkMove }