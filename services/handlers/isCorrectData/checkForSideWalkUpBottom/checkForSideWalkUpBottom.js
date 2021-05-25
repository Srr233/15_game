function checkForSideWalkUpBottom(way, chosenPos) {
  if (chosenPos[0] - 1 === way.toPos[0] || way.spacePos[0] === chosenPos[0]) return false;
  if (chosenPos[0] + 1 === way.toPos[0] || way.spacePos[0] === chosenPos[0]) return false;
  return true;
}

export { checkForSideWalkUpBottom };