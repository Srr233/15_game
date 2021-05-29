class MyNode {
  constructor(n, previous) {
    this.n = n;
    this.previous = previous;
  }
}
const ways = (point) => ({
  up: (() => {
    if (point.nArr - 1 >= 0) {
      return { nArr: point.nArr - 1, nIndex: point.nIndex };
    }
  })(),
  down: (() => {
    if (point.nArr + 1 < 4) {
      return { nArr: point.nArr + 1, nIndex: point.nIndex };
    }
  })(),
  left: (() => {
    if (point.nIndex - 1 >= 0) {
      return { nArr: point.nArr, nIndex: point.nIndex - 1 };
    }
  })(),
  right: (() => {
    if (point.nIndex + 1 < 4) {
      return { nArr: point.nArr, nIndex: point.nIndex + 1 };
    }
  })()
});

function searchWay(arr, start, goal, block) {
  let research = [];
  const explored = [];

  const searchNumber = (arr, n) => {
    const nArr = arr.findIndex(array => array.includes(n));
    const nIndex = arr[nArr].indexOf(n);
    return { nArr, nIndex };
  };
  const s = searchNumber(arr, start);
  const g = searchNumber(arr, goal);
  
  research.push(s);
  if (block) {
    for (const blocked of block) {
      explored.push(blocked);
    }
  }
  let nodes = [];
  const noHasN = (n) => explored.findIndex(i => {
    return i.nArr === n.nArr && i.nIndex === n.nIndex
  }) < 0;
  while (research.length) {
    const pop = research.shift();
    explored.push(pop);

    let node;
    node = nodes.find(n => n.n.nArr === pop.nArr && n.n.nIndex === pop.nIndex);
    if (pop === s) node = new MyNode(pop, null);
    
    if (g.nArr === pop.nArr && g.nIndex === pop.nIndex) return node;

    const way = Object.values(ways(pop));
    for (const direction of way) {
      if (!direction) continue;
      if (!noHasN(direction)) continue;
      nodes.push(new MyNode(direction, node));
      research.push(direction)
    }
  }
}

export { searchWay };