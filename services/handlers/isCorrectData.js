//pizdec...

const isCorrectWay = (way, chosenPos) => {
  if (!way.spacePos.length) return false;

  if (chosenPos[0] + 1 === way.spacePos[0] 
      && chosenPos[1] + 1 === way.spacePos[1] && !way.toPos) {
    return true;
  }
  if (chosenPos[0] - 1 === way.spacePos[0]
    && chosenPos[1] - 1 === way.spacePos[1] && !way.toPos) {
      return true;
  }
  if (chosenPos[0] === way.spacePos[0] + 1
    && chosenPos[1] + 1 === way.spacePos[1] && !way.toPos) {
      return true;
  }
  if (chosenPos[0] === way.spacePos[0] - 1
    && chosenPos[1] - 1 === way.spacePos[1] && !way.toPos) {
    return true;
  }

  if (way.spacePos[1] !== way.toPos[1] + 2) {
    if (way.spacePos[1] !== way.toPos[1] - 2) {
      if (way.spacePos[0] !== way.toPos[0] + 2) {
        if (way.spacePos[0] !== way.toPos[0] - 2) {
          if (chosenPos[0] - 1 !== way.toPos[0] 
              && way.spacePos[0] !== chosenPos[0]) {
            if (chosenPos[0] + 1 !== way.toPos[0]
              && way.spacePos[0] !== chosenPos[0]) {
              return true;
            }
          }
          if (chosenPos[0] - 1 === way.toPos[0]
              && way.spacePos[1] === chosenPos[1] + 1
              && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
                return true;
          }
          if (chosenPos[0] === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] + 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }

          if (chosenPos[0] - 1 === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] - 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
          if (chosenPos[0] === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] - 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }

          if (chosenPos[0] + 1 === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] - 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
          if (chosenPos[0] + 1 === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] + 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }

          if (chosenPos[0] - 1 === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] - 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
          if (chosenPos[0] === way.toPos[0]
            && way.spacePos[1] === chosenPos[1] - 1
            && !way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }

          if (chosenPos[0] === way.spacePos[0] 
            && chosenPos[1] + 1 === way.spacePos[1]
            && way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
          if (chosenPos[0] === way.spacePos[0]
            && chosenPos[1] - 1 === way.spacePos[1]
            && way.toPos.every((n, i) => way.spacePos[i] === n)) {
              return true;
          }
          if (chosenPos[0] + 1 === way.spacePos[0]
            && chosenPos[1] === way.spacePos[1]
            && way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
          if (chosenPos[0] - 1 === way.spacePos[0]
            && chosenPos[1] === way.spacePos[1]
            && way.toPos.every((n, i) => way.spacePos[i] === n)) {
            return true;
          }
        }
      }
    }
  }
}

export { isCorrectWay };