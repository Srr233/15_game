import EMPTY_POS from '../constants/emptyCardNum.js';

function checkSides(chosenPos, direction, arr) {
  let isContain;
  switch (chosenPos[1]) {
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




function checkUpSides(chosenPos, direction, arr) {
  switch (chosenPos[0]) {
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

function checkAngles (chosenPos, direction, arr) {

  const checkAngle = (chosenPos, direction, arr) => {
    const correctDirection = (n) => {
      return arr.indexOf(direction) === chosenPos + n ? chosenPos + n : false;
    }
    switch (chosenPos) {
      case 0:
        return correctDirection(1);
      case 3:
        return correctDirection(-1);
      default:
        const right = correctDirection(1);
        const left = correctDirection(-1);
        return (right !== false ? right : false ) || (left !== false ? left : false);
    }
  };

  let resultOfAngle = false;
  let resultOfAngleUp = false;
  let resultOfAngleDown = false;
  switch (chosenPos[0]) {
    case 0:
      resultOfAngle = checkAngle(chosenPos[1], direction, arr[1]);
      if (resultOfAngle) {
        return [1, resultOfAngle];
      }
      return [];
    case 3:
      resultOfAngle = checkAngle(chosenPos[1], direction, arr[2]);
      if (resultOfAngle) {
        return [2, resultOfAngle];
      }
      return [];
    case 1:
        resultOfAngleUp = checkAngle(chosenPos[1], direction, arr[0]);
        resultOfAngleDown = checkAngle(chosenPos[1], direction, arr[2]);
        if (resultOfAngleUp !== false) {
          return [0, resultOfAngleUp];
        } else if (resultOfAngleDown !== false) {
          return [2, resultOfAngleDown];
        }
        return [];
    case 2:
      resultOfAngleUp = checkAngle(chosenPos[1], direction, arr[1]);
      resultOfAngleDown = checkAngle(chosenPos[1], direction, arr[3]);
      if (resultOfAngleUp !== false) {
        return [1, resultOfAngleUp];
      } else if (resultOfAngleDown !== false) {
        return [3, resultOfAngleDown];
      }
      return [];
    default:
      throw new Error('Current position didn\'t find');
  }
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
    console.dir(foundSpace)
  } else {
    foundDirection = searchCardAroundGivenPos(chosenPos, direction, arr);
    foundSpace = searchCardAroundGivenPos(chosenPos, EMPTY_POS, arr);
    console.dir(foundDirection);
    console.dir(foundSpace);
  }
}

export { checkSides, checkUpSides, checkTransferToCard, searchCardAroundGivenPos};