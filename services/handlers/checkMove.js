import { checkSides, checkUpSides, checkTransferToCard, searchCardAroundGivenPos } from './checkSides.js';
import EMPTY_POS from '../constants/emptyCardNum.js';

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
    return { toPos: resultOfUpSides, spacePos: searchSpace };
  } else if (resultOfSides.length > 0 && searchSpace) {
    return { toPos: resultOfSides, spacePos: searchSpace };
  }
  const checked = checkTransferToCard(chosenPos, direction, arr);

  if (checked) {
    return { toPos: checked[1], spacePos: checked[0] };
  }
  return {};
}

export { getCurrentPos, checkMove }