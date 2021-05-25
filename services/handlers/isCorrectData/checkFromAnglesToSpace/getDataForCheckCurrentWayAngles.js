function getDataForCheckCurrentWayAngles(way, chosenPos) {
  const fromUpLeftToRightBottom = {
    posOne: { nArr: chosenPos[0] + 1, nIndex: chosenPos[1] + 1 },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: way.toPos
  }
  const fromBottomLeftToRightUp = {
    posOne: { nArr: chosenPos[0], nIndex: chosenPos[1] + 1 },
    posTwo: { nArr: way.spacePos[0] + 1, nIndex: way.spacePos[1] },
    toPos: way.toPos
  }
  const fromUpRightToLeftBottom = {
    posOne: { nArr: chosenPos[0], nIndex: chosenPos[1] - 1 },
    posTwo: { nArr: way.spacePos[0] - 1, nIndex: way.spacePos[1] },
    toPos: way.toPos
  }
  const fromBottomRightToLeftUp = {
    posOne: { nArr: chosenPos[0] - 1, nIndex: chosenPos[1] - 1 },
    posTwo: { nArr: way.spacePos[0], nIndex: way.spacePos[1] },
    toPos: way.toPos
  }

  return {
    fromUpLeftToRightBottom,
    fromBottomLeftToRightUp,
    fromUpRightToLeftBottom,
    fromBottomRightToLeftUp
  }
}

export { getDataForCheckCurrentWayAngles };