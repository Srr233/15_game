import go from './ways.js';


function getListForArr(way, chosenPos) {
  const isToSpace = (way) => {
    return way.spacePos.every((n) => way.toPos.includes(n));
  }
  if (isToSpace(way)) {
    return [{n: chosenPos, to: way.spacePos}];
  }
}


function getListForArrAngleToSpace(way, chosenPos) {
  const SIZE = 3;
  switch (chosenPos[0]) {
    case SIZE:
      return go.rotateFromDown(chosenPos, way.spacePos);
    case SIZE - SIZE:
      return go.rotateFromUp(chosenPos, way.spacePos);
    default:
      return go.rotateFromMiddle(chosenPos, way.spacePos);
  }
}


function getListForArrToPoint(way, chosenPos) {
  if (chosenPos[0] > way.toPos[0]) {
    return go.goToPointUp(chosenPos, way);
  } else if (chosenPos[0] < way.toPos[0]){
    return go.goToPointBottom(chosenPos, way);
  } else {
    if (chosenPos[1] > way.toPos[1]) {
      return go.goToPointLeft(chosenPos, way);
    } else {
      return go.goToPointRight(chosenPos, way);
    }
  }
}


function getListOfWays (way, chosenPos) {
  const isToPosEqualSpacePos = (way) => way.toPos.every((item, i) => way.spacePos[i] === item);

  if (way.toPos && way.spacePos) {
    if (isToPosEqualSpacePos(way)) return getListForArr(way, chosenPos);
    if (way.toPos && way.spacePos) return getListForArrToPoint(way, chosenPos);
  }
  if (way.spacePos && !way.toPos) return getListForArrAngleToSpace(way, chosenPos);
}

export { getListOfWays };