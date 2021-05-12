function rotateFromDown (chosenPos) {
  switch (chosenPos[1]) {
    case 0:
      return [
        { n: [3, 1], to: [2, 1] },

        { n: [3, 0], to: [3, 1] },

        { n: [2, 0], to: [3, 0] },

        { n: [2, 1], to: [2, 0] },

        { n: [3, 1], to: [2, 1] },

        { n: [3, 0], to: [3, 1] }
      ];
    case 3:
      return [
        { n: [2, 3], to: [2, 2] },

        { n: [2, 3], to: [3, 3] },

        { n: [3, 2], to: [3, 3] },

        { n: [3, 3], to: [3, 2] },

        { n: [3, 2], to: [2, 2] },

        { n: [2, 3], to: [2, 2] },
      ];
    default:
  }
}

function rotateFromUp (chosenPos, to) {

}

function rotateFromMiddle (chosenPos, to) {

}




function transformWayFromArrToDOM (arrOfWays, arr) {
  const waysOfDOM = [];
  for (const way of arrOfWays) {
    let n;
    let spaceN;
    switch (way.n[0] - way.to[0]) {
      case 0:
        n = arr[way.n[0]][way.n[1]];
        spaceN = arr[way.to[0]][way.to[1]];
        switch (way.n[1] - way.to[1]) {
          case 1:
            waysOfDOM.push({ n, to: 'left' });
            waysOfDOM.push({ n: spaceN, to: 'right' });
            break
          case -1:
            waysOfDOM.push({ n, to: 'right' });
            waysOfDOM.push({ n: spaceN, to: 'left' });
            break;
          default: throw new Error('something bad has happened');
        }
        break;
      case 1:
        n = arr[way.n[0]][way.n[1]];
        spaceN = arr[way.to[0]][way.to[1]];
        waysOfDOM.push({ n, to: 'up' });
        waysOfDOM.push({ n: spaceN, to: 'down' });
        break;
      case -1:
        n = arr[way.n[0]][way.n[1]];
        spaceN = arr[way.to[0]][way.to[1]];
        waysOfDOM.push({ n, to: 'down' });
        waysOfDOM.push({ n: spaceN, to: 'up' });
        break;
      default: throw new Error('something bad has happened');
    }
  }
  return waysOfDOM;
}




function getListOfWays (way, chosenPos, arr) {
  const SIZE = 3;

  const isToSpace = () => {
    return way.spacePos.every((n) => way.toPos.includes(n));
  }


  const getListForDOM = () => {
    if (isToSpace()) {
      return transformWayFromArrToDOM([{ n: chosenPos, to: way.spacePos }], arr);
    }
  }


  const getListForArr = () => {
    if (isToSpace()) {
      return [{n: chosenPos, to: way.spacePos}];
    }
  }
  const getListForArrAngleToSpace = () => {
    switch (chosenPos[0]) {
      case SIZE:
        return rotateFromDown(chosenPos);
      case SIZE - SIZE:
        return transformWayFromArrToDOM(rotateFromUp(chosenPos, way.spacePos));
      default:
        return transformWayFromArrToDOM(rotateFromMiddle(chosenPos, way.spacePos));
    }
  }
  const getListForDOMAngleToSpace = () => {
    switch(chosenPos[0]) {
      case SIZE:
        return transformWayFromArrToDOM(rotateFromDown(chosenPos), arr);
      case SIZE - SIZE:
        return transformWayFromArrToDOM(rotateFromUp(chosenPos, way.spacePos));
      default:
        return transformWayFromArrToDOM(rotateFromMiddle(chosenPos, way.spacePos));
    }
  }

  console.log(chosenPos);
  console.log(way.toPos);
  console.log(way.spacePos);
  if (way.toPos && way.spacePos) {
    return { listForArr: getListForArr(), listForDOM: getListForDOM() };
  } else if (way.spacePos && !way.toPos) {
    return { listForArr: getListForArrAngleToSpace(), listForDOM: getListForDOMAngleToSpace() };
  }
}

export { getListOfWays };