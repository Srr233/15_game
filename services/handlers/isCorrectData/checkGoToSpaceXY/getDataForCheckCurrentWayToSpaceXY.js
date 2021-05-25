function getDataForCheckCurrentWayToSpaceXY(way, chosenPos) {
  const leftToRight = {
    posOne: { nArr: chosenPos[0], nIndex: chosenPos[1] + 1 },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: !way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  const rightToLeft = {
    posOne: { nArr: chosenPos[0], nIndex: chosenPos[1] - 1 },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: !way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  const upToBottom = {
    posOne: { nArr: chosenPos[0] + 1, nIndex: chosenPos[1] },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: !way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  const bottomToUp = {
    posOne: { nArr: chosenPos[0] - 1, nIndex: chosenPos[1] },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: !way.toPos.every((n, i) => way.spacePos[i] === n)
  }
  return {
    leftToRight,
    rightToLeft,
    upToBottom,
    bottomToUp
  }
}

export { getDataForCheckCurrentWayToSpaceXY };