function transformWayFromArrToDOM(arrOfWays, arr) {
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
            waysOfDOM.push({ n, to: 'right' });
            waysOfDOM.push({ n: spaceN, to: 'left' });
            break
          case -1:
            waysOfDOM.push({ n, to: 'left' });
            waysOfDOM.push({ n: spaceN, to: 'right' });
            break;
          default: throw new Error('something bad has happened');
        }
        break;
      case 1:
        n = arr[way.n[0]][way.n[1]];
        spaceN = arr[way.to[0]][way.to[1]];
        waysOfDOM.push({ n, to: 'down' });
        waysOfDOM.push({ n: spaceN, to: 'up' });
        break;
      case -1:
        n = arr[way.n[0]][way.n[1]];
        spaceN = arr[way.to[0]][way.to[1]];
        waysOfDOM.push({ n, to: 'up' });
        waysOfDOM.push({ n: spaceN, to: 'down' });
        break;
      default: throw new Error('something bad has happened');
    }
  }
  return waysOfDOM;
}

export { transformWayFromArrToDOM };