const isCorrectWay = (way) => {
  if (!way.spacePos.length) return false;
  if (way.spacePos[1] !== way.toPos[1] + 2) {
    if (way.spacePos[1] !== way.toPos[1] - 2) {
      if (way.spacePos[0] !== way.toPos[0] + 2) {
        if (way.spacePos[0] !== way.toPos[0] - 2) {
          return true;
        }
      }
    }
  }
}

export { isCorrectWay };