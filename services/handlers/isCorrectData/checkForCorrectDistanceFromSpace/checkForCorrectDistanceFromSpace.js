function checkForCorrectDistanceFromSpace(way) {
  if (way.spacePos[1] === way.toPos[1] + 2) return false;
  if (way.spacePos[1] === way.toPos[1] - 2) return false;
  if (way.spacePos[0] === way.toPos[0] + 2) return false;
  if (way.spacePos[0] === way.toPos[0] - 2) return false;
  return true;
}

export { checkForCorrectDistanceFromSpace }