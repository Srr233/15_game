function isSpaceLeft(chosenPos, way) {
  if (chosenPos[1] > way.spacePos[1]) return 'left';
  return 'right';
}

function isSpaceSame(chosenPos, way) {
  if (chosenPos[0] > way.spacePos[0]) {
    return 'up';
  }
  return 'down';
}

export { isSpaceSame, isSpaceLeft };