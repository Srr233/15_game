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
  })()
  ,
  down: (() => {
    if (point.nArr + 1 < 4) {
      return { nArr: point.nArr + 1, nIndex: point.nIndex };
    }
  })()
  ,
  left: (() => {
    if (point.nIndex - 1 >= 0) {
      return { nArr: point.nArr, nIndex: point.nIndex - 1 };
    }
  })()
  ,
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
  const noHasN = (n) => explored.findIndex(i => {
    return i.nArr === n.nArr && i.nIndex === n.nIndex
  }) < 0;

  const s = searchNumber(arr, start);
  const g = searchNumber(arr, goal);
  let nodes = [];

  research.push(s);
  if (block) {
    for (const blocked of block) {
      explored.push(blocked);
    }
  }
  while (research.length) {
    const pop = research.shift();
    explored.push(pop);

    let node;
    if (pop === s) {
      node = new MyNode(pop, null);
    } else {
      node = nodes.find(n => n.n.nArr === pop.nArr && n.n.nIndex === pop.nIndex);
    }

    const way = ways(pop);
    if (g.nArr === pop.nArr && g.nIndex === pop.nIndex) {
      research = [];
      return node;
    } else {
      if (way.up && noHasN(way.up)) {
        nodes.push(new MyNode(way.up, node));
        research.push(way.up);
      }
      if (way.down && noHasN(way.down)) {
        nodes.push(new MyNode(way.down, node));
        research.push(way.down);
      }
      if (way.left && noHasN(way.left)) {
        nodes.push(new MyNode(way.left, node));
        research.push(way.left);
      }
      if (way.right && noHasN(way.right)) {
        nodes.push(new MyNode(way.right, node));
        research.push(way.right);
      }
    }
  }
}

export { searchWay };