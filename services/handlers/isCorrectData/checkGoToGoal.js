function checkGoToGoal({ posOne, posTwo, toPos }) {
  return posOne.nArr === posTwo.nArr
    && posOne.nIndex === posTwo.nIndex && !toPos;
}

export { checkGoToGoal };