import {
  rotateFromDown,
  rotateFromUp,
  rotateFromMiddle,
  goToPointUp,
  goToPointBottom,
  goToPointLeft,
  goToPointRight
} from './ways.js';

function getListOfWays (way, chosenPos, arr) {
  const SIZE = 3;

  const isToSpace = () => {
    return way.spacePos.every((n) => way.toPos.includes(n));
  }

  const getListForArr = () => {
    if (isToSpace()) {
      return [{n: chosenPos, to: way.spacePos}];
    }
  }
  const getListForArrAngleToSpace = () => {
    switch (chosenPos[0]) {
      case SIZE:
        return rotateFromDown(chosenPos, way.spacePos);
      case SIZE - SIZE:
        return rotateFromUp(chosenPos, way.spacePos);
      default:
        return rotateFromMiddle(chosenPos, way.spacePos);
    }
  }

  const getListForArrToPoint = () => {
    
    if (chosenPos[0] > way.toPos[0]) {
      return goToPointUp(chosenPos, way);
    } else if (chosenPos[0] < way.toPos[0]){
      return goToPointBottom(chosenPos, way);
    } else {
      if (chosenPos[1] > way.toPos[1]) {
        return goToPointLeft(chosenPos, way);
      } else {
        return goToPointRight(chosenPos, way);
      }
    }
  }
  if (way.toPos && way.spacePos) {
    if (way.toPos.every((item, i) => way.spacePos[i] === item)) {
      return getListForArr();
    } else if (way.toPos && way.spacePos) {
      return getListForArrToPoint();
    }
  } else if (way.spacePos && !way.toPos) {
    return getListForArrAngleToSpace();
  }
}

export { getListOfWays };