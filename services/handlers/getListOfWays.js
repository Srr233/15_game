function getListOfWays (way, chosenPos, arr) {
  const forSpaceDOM = () => {
    let n;
    let spaceN;
    switch (chosenPos[0] - way.spacePos[0]) {
      case 0:
        n = arr[chosenPos[0]][chosenPos[1]];
        spaceN = arr[way.spacePos[0]][way.spacePos[1]];
        switch (chosenPos[1] - way.spacePos[1]) {
          case 1:
            return [{ n, to: 'left' }, { n: spaceN, to: 'right' }];
          case -1:
            return [{ n, to: 'right' }, { n: spaceN, to: 'left' }];
          default: throw new Error('something bad has happened');
        }
      case 1:
        n = arr[chosenPos[0]][chosenPos[1]];
        spaceN = arr[way.spacePos[0]][way.spacePos[1]];
        return [{ n, to: 'up' }, { n: spaceN, to: 'down' }];
      case -1:
        n = arr[chosenPos[0]][chosenPos[1]];
        spaceN = arr[way.spacePos[0]][way.spacePos[1]];
        return [{ n, to: 'down' }, { n: spaceN, to: 'up' }];
      default: throw new Error('something bad has happened');
    }
  }


  const isToSpace = () => {
    return way.spacePos.every((n) => way.toPos.includes(n));
  }


  const getListForDOM = () => {
    if (isToSpace()) {
      return forSpaceDOM();
    }
  }


  const getListForArr = () => {
    if (isToSpace()) {
      return [{n: chosenPos, to: way.spacePos}];
    }
  }


  console.log(chosenPos);
  console.log(way.toPos);
  console.log(way.spacePos);
  return { listForArr: getListForArr(), listForDOM: getListForDOM() };
}

export { getListOfWays };