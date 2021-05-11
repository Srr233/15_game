function checkSides (chosenPos, direction, arr) {
  let isContain;
  switch(chosenPos[1]) {
    case 0:
      isContain = arr[chosenPos[0]][1] === direction;
      if (isContain) {
        return [chosenPos[0], 1];
      }
      return [];
    case 3:
      isContain = arr[chosenPos[0]][2] === direction;
      if (isContain) {
        return [chosenPos[0], 2];
      }
      return [];
    default:
      const isLeftContain = arr[chosenPos[0]][chosenPos[1] - 1] === direction;
      const isRightContain = arr[chosenPos[0]][chosenPos[1] + 1] === direction;

      if (isLeftContain) {
        return [chosenPos[0], chosenPos[1] - 1];
      } else if (isRightContain) {
        return [chosenPos[0], chosenPos[1] + 1];
      }
      return [];
  }
}




function checkUpSides (chosenPos, direction, arr) {
  switch(chosenPos[0]) {
    case 0:
      if (arr[1][chosenPos[1]] === direction) {
        return [1, chosenPos[1]];
      }
      return [];
    case 3:
      if (arr[2][chosenPos[1]] === direction) {
        return [2, chosenPos[1]];
      }
      return [];
    default:
      if (arr[chosenPos[0] + 1][chosenPos[1]] === direction) {
        return [chosenPos[0] + 1, chosenPos[1]];
      } else if (arr[chosenPos[0] - 1][chosenPos[1]] === direction) {
        return [chosenPos[0] - 1, chosenPos[1]];
      }
      return [];
  }
}





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
  if (chosenCard > 16) throw new Error('A max num of cards is 16');
  
  const chosenPos = getCurrentPos(chosenCard, arr);
  const EMPTY_POS = 16;
  if (direction === EMPTY_POS) {
    const resultOfSides = checkSides(chosenPos, direction, arr);
    const resultOfUpSides = checkUpSides(chosenPos, direction, arr);

    if (resultOfUpSides.length > 0) {
      return resultOfUpSides;
    } else if (resultOfSides.length > 0) {
      return resultOfSides;
    }
    return [];
  } else {

  }
}

export { getCurrentPos, checkMove }