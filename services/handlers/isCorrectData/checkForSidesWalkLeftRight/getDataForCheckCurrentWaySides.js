function getDataForCheckCurrentWaySides(way, chosenPos) {
  const rightOfSpaceWalk = {
    posOne: { nArr: chosenPos[0] - 1, nIndex: way.spacePos[1] },
    posTwo: { nArr: way.toPos[0], nIndex: chosenPos[1] - 1 },
    toPos: way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  const leftOfSpaceWalk = {
    posOne: { nArr: chosenPos[0] - 1, nIndex: way.spacePos[1] },
    posTwo: { nArr: way.toPos[0], nIndex: chosenPos[1] + 1 },
    toPos: way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  return {
    leftOfSpaceWalk,
    rightOfSpaceWalk
  }
}

export { getDataForCheckCurrentWaySides };